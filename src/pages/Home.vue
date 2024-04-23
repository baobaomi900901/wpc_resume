<!--
* @description  参数1
* @fileName  home
* @author userName
* @date 2024-04-17 21:05:27
* @version V3.0.0
!-->
<template>
      <div
      ref="loading"
      class="loading w-screen h-screen absolute overflow-y-scroll no-scrollbar"
      >
      <!-- class="logoBorder w-12 h-12 border-2 absolute flex justify-center items-center" -->
      <div
        ref="logoBorder"
        class="logoBorder w-12 h-12 border-2 border-white"
      ></div>
      <span ref="logoText" class="logoText text-white font-bold text-xl"
        >w</span
      >
      <div ref="imageBox" class="imageBox w-screen h-screen relative">
        <div ref="center" class="center bg-yellow-500">center</div>
        <div ref="leftTop" class="leftTop bg-red-500">left top</div>
        <div ref="leftBottom" class="leftBottom bg-green-500">left bottom</div>
        <div ref="rightTop" class="rightTop bg-orange-500">right top</div>
        <div ref="rightBottom" class="rightBottom bg-blue-500">
          right bottom
        </div>
      </div>
    </div>
  <div ref="home" id="home" class="home text-red-500">
    <div class="IntroduceOneself">
      <video
      muted="" playsinline="" autoplay="" loop="" class="w-screen  h-full"
      >
      <source src="../../public/C.mp4"></source>
      </video>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { gsap } from "gsap";
import useMainStore from "../store";
const store = useMainStore();

const loading = ref();
const logoBorder = ref();
const logoText = ref();
const imageBox = ref();
const center = ref();
const leftTop = ref();
const leftBottom = ref();
const rightTop = ref();
const rightBottom = ref();

const home = ref();

onMounted(() => {
  const tl = gsap.timeline({
    // repeat: 1, // 重复次数, -1 代表无限循环
    // repeatDelay: 0.5, // 重复延迟
    // 初始化 停止
    paused: true, // true 代表初始化停止
  });
  const LogoBorderDebut = gsap.fromTo(
    logoBorder.value,
    { y: 20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
    }
  );
  gsap.set(logoText.value, { rotateX: -20, opacity: 0 });
  const LogoTextDebut = gsap.to(logoText.value, {
    rotateX: 0,
    opacity: 1,
    duration: 0.5,
  });
  const LogoBorderBlink = gsap.fromTo(
    logoBorder.value,
    {
      opacity: 1,
    },
    {
      opacity: 0.5,
      repeat: 0,
      yoyo: true,
      duration: 1,
      onComplete: () => {
        // console.log("动画结束");
      },
    }
  );
  const LogoTextBackdown = gsap.to(logoText.value, {
    opacity: 0,
    scale: 0.5,
    rotateX: 90,
    duration: 0.5,
  });
  const LogoBorderBackdown = gsap.to(logoBorder.value, {
    opacity: 0,
    // scale: 0.5,
    rotateX: 90,
    duration: 0.5,
  });
  gsap.set(center.value, { x: 0, y: "100%", opacity: 0 });
  gsap.set(leftTop.value, { x: "-100%", y: "-100%", opacity: 0 });
  gsap.set(leftBottom.value, { x: "-100%", y: "100%", opacity: 0 });
  gsap.set(rightTop.value, { x: "100%", y: "-100%", opacity: 0 });
  gsap.set(rightBottom.value, { x: "100%", y: "100%", opacity: 0 });
  const CenterDebut = gsap.to(center.value, {
    y: 0,
    opacity: 1,
    duration: 0.5,
  });
  const LeftTopDebut = gsap.to(leftTop.value, {
    x: "35%",
    y: "35%",
    opacity: 1,
    duration: 0.5,
  });
  const LeftBottomDebut = gsap.to(leftBottom.value, {
    x: "35%",
    y: "-35%",
    opacity: 1,
    duration: 0.5,
  });
  const RightTopDebut = gsap.to(rightTop.value, {
    x: "-35%",
    y: "35%",
    opacity: 1,
    duration: 0.5,
  });
  const RightBottomDebut = gsap.to(rightBottom.value, {
    x: "-75%",
    y: "-75%",
    opacity: 1,
    duration: 0.5,
    // 动画结束后
    onComplete: () => {
      loadingBGTransparent.play();
    },
  });
  const imageBoxRotate = gsap.to(imageBox.value, {
    rotateZ: -25,
    duration: 0.5,
  });
  const imageBoxHidden = gsap.to(imageBox.value, {
    top: "-25%",
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      store.loading = true;
      console.log("store.loading = true");
    },
  });
  const loadingBGTransparent = gsap.fromTo(
    loading.value,
    { backgroundColor: "rgba(0, 0, 0, 1)" },
    {
      backgroundColor: "rgba(0, 0, 0, 0)",
      duration: 0.5,
      paused: true, // true 代表初始化停止
    }
  );
  const homeDebut = gsap.fromTo(
    home.value,
    { opacity: 0, y: "16%" },
    {
      y: "12%" ,
      opacity: 1,
      duration: 0.5,
      onComplete: () => {
        console.log("homeDebut 动画结束");
      },
    }
  );

  tl.add(LogoBorderDebut);
  tl.add(LogoTextDebut, "+=0.15");
  tl.add(LogoBorderBlink);
  tl.add(LogoTextBackdown);
  tl.add(LogoBorderBackdown, "-=0.25");
  tl.add(CenterDebut);
  tl.add(LeftTopDebut, "-=0.5");
  tl.add(LeftBottomDebut, "-=0.5");
  tl.add(RightTopDebut, "-=0.5");
  tl.add(RightBottomDebut, "-=0.5");
  tl.add(imageBoxRotate);
  tl.add(imageBoxHidden);
  tl.add(homeDebut,"-=0.25");

  // 启动 tl
  tl.play();
  // // 监听 tl 完成
  tl.eventCallback("onComplete", () => {
    console.log("tl:>> 动画完成");
  });
});
</script>
<style scoped>
.logoBorder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.logoText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.center,
.leftTop,
.leftBottom,
.rightTop,
.rightBottom {
  width: 200px;
  height: 300px;
  position: absolute;
}
.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.leftTop {
  top: 0;
  left: 0;
}
.leftBottom {
  bottom: 0;
  left: 0;
}
.rightTop {
  top: 0;
  right: 0;
}
.rightBottom {
  bottom: 0;
  right: 0;
}
</style>