<template>
  <div class="product-item">
    <figure class="product-style">
      <div class="AnimationImgPlus" v-show="AddCartState" :style="cssVars">
        <div class="AnimationImg" ref="AnimationImgDiv">
          <img :src="product.image" alt="Books" />
        </div>
      </div>
      <img
        ref="AnimationImg"
        :src="product.image"
        alt="Books"
        class="product-img"
      />
      <button
        type="button"
        class="add-to-cart"
        data-product-tile="add-to-cart"
        @click="addToCart(product.id)"
        :class="{ added: CartState }"
      >
        <AddToCartSvgAnimation v-show="CartState" :theme="'#74642F'" />
        <!-- <AddToCartSvg v-model:isVisible="CartState" v-show="CartState"/> -->
        <span>{{ CartState ? "已添加到购物车" : "添加到购物车" }}</span>
      </button>
      <figcaption>
        <h3>{{ product.author }}</h3>
        <span>{{ product.txt }}</span>
        <div class="item-price">$&nbsp;{{ product.price }}</div>
      </figcaption>
    </figure>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onUnmounted, onMounted, nextTick } from "vue";
import { useCartStateStore } from "../stores/globalCartState";
import AddToCartSvgAnimation from "./svg/AddToCartSvgAnimation.vue";
import { debounce } from "../js/utility/debounce";
const CartState = ref(false);
const CartStateStore = useCartStateStore();
const AddCartState = ref(false);
// 第一个图片动画的时长
const AnimationImgDuration = CartStateStore.CartAnimationDuration[0];
// 第二个图片动画的时长,即图片开始移动到购物车
const AnimationImgDuration01 = CartStateStore.CartAnimationDuration[1];

// 贝塞尔曲线的参数
const cubicBezierVar = ref<number>(2);
const cssVars = computed(() => ({
  "--AnimationImgDuration": AnimationImgDuration,
  "--AnimationImgDuration01": AnimationImgDuration01,
  "--moverX": moverX.value + "px",
  "--moverY": moverY.value + "px",
  "--cubicBezierVar": cubicBezierVar.value,
}));
// 定义组件的 props
interface Product {
  id?: number;
  image?: string;
  author?: string;
  txt?: string;
  price?: number;
}

const props = withDefaults(
  defineProps<{
    product?: Product;
  }>(),
  {
    product: () => ({
      id: 0,
      image: "src/assets/images/product-item1.jpg",
      author: "Simple way of piece life",
      txt: "Armor Ramsey",
      price: 10,
    }),
  }
);

// 定义事件
const emit = defineEmits<{
  (e: "add-to-cart", product: Product): void;
}>();

// 图片
const AnimationImgDiv: any = ref(null);
const AnimationImg: any = ref(null);
// 移动元素的 translate 坐标
const moverX = ref<number>(0);
const moverY = ref<number>(0);

const delay =
  (+AnimationImgDuration.split("s")[0] +
    +AnimationImgDuration01.split("s")[0] +
    0.3) *
  1000;
// 隐藏图片抛物线动画
const hiddenAddCartState = debounce(() => {
  // 动画结束后让图片的动画消失
  AddCartState.value = false;
}, delay);
// let a: any;
// 处理添加到购物车的事件
const addToCart = (id: number = 0) => {
  emit("add-to-cart", props.product);
  // 取AnimationImg的位置信息
  const rect02 = AnimationImg.value.getBoundingClientRect();
  const rect02list = [
    Math.floor(rect02.x + rect02.width / 2), // 图片的中心
    Math.floor(rect02.y + 80 + rect02.height / 2),
  ];
  // 最终要落到的坐标（刚好是购物车的中心）
  moverX.value = window.innerWidth - rect02list[0] - 80;
  moverY.value = 200 - rect02list[1];
  // 动态设置贝塞尔曲线的第三个值
  cubicBezierVar.value = Math.abs((440 / moverY.value) * 2);
  console.log(cubicBezierVar.value);

  console.log("addToCart执行了");
  console.log("id:" + id);
  // 让按钮上的文字变成“已添加到购物车”，并且出现一个添加成功的svg动画
  CartState.value = !CartState.value;
  // 如果卡片的底部没有超过屏幕高度的一半，就不用触发动画
  if (moverY.value > -120) {
    return;
  }
  CartStateStore.CartShow(); // 让购物车显示
  if (CartState.value) {
    // 现在购物车是激活状态
    CartStateStore.CartShow(); // 让购物车显示
    // 将商品id添加到列表中
    CartStateStore.CartList.push(id);
    // 这个是控制图片动画显示的
    AddCartState.value = true;
  } else {
    // 根据商品id在列表中删除
    const CartIndex = CartStateStore.CartList.findIndex((num) => num === id);
    CartStateStore.CartList.splice(CartIndex, 1);
    CartStateStore.CartHide(); // 让购物车隐藏
    AddCartState.value = false;
    return;
  }

  hiddenAddCartState();
  // console.log("moverX:" + moverX.value);
  // console.log("moverY:" + moverY.value);
};

// 初始化和动态更新
onMounted(() => {
  nextTick(() => {
    // updatePosition(); // 初始计算
    // 监听滚动和窗口大小变化
    // window.addEventListener("scroll", updatePosition);
    // window.addEventListener("resize", updatePosition);
  });
});

// 清理事件监听
onUnmounted(() => {
  // window.removeEventListener("scroll", updatePosition);
  // window.removeEventListener("resize", updatePosition);
});
</script>

<style lang="scss" scoped>
.product-item {
  width: 100%;
  height: fit-content;
  .product-style {
    width: 100%;
    position: relative;
    overflow: visible;
    .AnimationImgPlus {
      cursor: pointer;
      position: absolute;
      width: 100%;
      // -440 - 0.8
      animation: moverY var(--AnimationImgDuration01)
        cubic-bezier(0, 0, 0.8, var(--cubicBezierVar))
        calc(var(--AnimationImgDuration) + 0.2s) forwards;
      z-index: 8;
      .AnimationImg {
        position: relative;
        padding: 15%;
        width: 100%;
        height: 100%;
        transform: translateY(80px) scale(0.1);
        animation: AnimationImg var(--AnimationImgDuration)
            cubic-bezier(0.16, 0.29, 0.66, 1),
          moverX var(--AnimationImgDuration01) linear
            calc(var(--AnimationImgDuration) + 0.2s) forwards;
        &::after {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          content: "";
          border-radius: 50%;
          border: #74642f solid 5px;
          width: 130%;
          aspect-ratio: 1 / 1;
          z-index: 999;
        }
      }
    }
    .product-img {
      position: relative;
      background: #efeee8;
      border: 1px solid #eae8df;
      padding: 15%;
      cursor: pointer;
      width: 100%;
    }

    .add-to-cart {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 0 30px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0%);
      background: #000;
      color: #fff;
      width: 80%;
      margin: 0;
      text-transform: uppercase;
      text-align: center;
      line-height: 1;
      bottom: 100px;
      z-index: 9;
      opacity: 0;
      transition: 0.3s ease-out;
      &.added {
        background-color: #74642f;
        // color: ;
      }
      // span {
      //   flex: 2;
      // }
    }
    &:hover .add-to-cart {
      bottom: 165px;
      opacity: 1;
    }
    figcaption {
      margin-top: 30px;
      margin-bottom: 30px;
      text-align: center;
      .item-price {
        color: #74642f;
        font-size: 1.3em;
      }
      h3 {
        font-size: 1.4em;
        font-weight: 500;
        color: #74642f;
        margin: 0;
      }
      p {
        margin-bottom: 20px;
      }
    }
  }
}

// 这个动画是让图片缩小并向下移动
@keyframes AnimationImg {
  0% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
  100% {
    opacity: 1;
    transform: translateY(80px) scale(0.1);
  }
}

@keyframes moverX {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    transform: translateX(var(--moverX)) scale(0.1);
  }
}
@keyframes moverY {
  to {
    transform: translateY(calc(var(--moverY) + 120px));
  }
}
</style>
