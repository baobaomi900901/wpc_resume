<template>
  <div id="app" class="overflow-y-scroll no-scrollbar">
    <!-- class="loading w-screen h-screen absolute bg-black flex justify-center items-center" -->
    <div
      class="loading w-screen h-screen absolute bg-black"
    >123
    <!-- class="logoBorder w-12 h-12 border-2 absolute flex justify-center items-center" -->
      <div
        ref="logoBorder"
        class="logoBorder w-12 h-12 border-2 border-white"
      >1</div>
      <span ref="logoText" class="logoText text-white font-bold text-xl">w</span>
      <div class="imageBox">
        <div class="leftTop bg-red-500">left top</div>
        <div class="leftBottom bg-green-500">left bottom</div>
        <div class="rightTop bg-orange-500">right top</div>
        <div class="rightBottom bg-blue-500">right bottom</div>
      </div>
    </div>
    <Menu />
    <router-view />
  </div>
</template>

<script setup>
import Menu from "./components/Menu.vue";
import useMainStore from "./store";
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const store = useMainStore();

const logoBorder = ref();
const logoText = ref();

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
  const LogoTextDebut = gsap.to(
    logoText.value,
    {
      rotateX: 0,
      opacity: 1,
      duration: 0.5,
    }
  );
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
        console.log("动画结束");
      },
    },
  );
  const LogoTextBackdown = gsap.to(
    logoText.value,
    {
      opacity: 0,
      scale: 0.5,
      rotateX: 90,
      duration: 0.5,
    },
  );
  const LogoBorderBackdown = gsap.to(
    logoBorder.value,
    {
      opacity: 0,
      // scale: 0.5,
      rotateX: 90,
      duration: 0.5,
    },
  );
  tl.add(LogoBorderDebut);
  tl.add(LogoTextDebut, "+=0.15");
  tl.add(LogoBorderBlink);
  tl.add(LogoTextBackdown);
  tl.add(LogoBorderBackdown, "-=0.25");

  // 启动 tl
  tl.play();
});
</script>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
}
.logoBorder{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.logoText{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
