<script setup>
import { onMounted, ref } from "vue";
import Typing from "./Typing.vue";

const nameEl = ref(null);
const characters = "123!@#$%^";
const finalName = "Putra Firdaus ";
let interval = null;

// Scramble
onMounted(() => {
  startScramble();
});

function startScramble() {
  let iterations = 0;
  const maxIterations = 14;

  if (interval) clearInterval(interval);

  interval = setInterval(() => {
    nameEl.value.innerText = finalName
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return finalName[index];
        }
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join("");

    iterations += 1 / 3;

    if (iterations >= maxIterations) {
      clearInterval(interval);
    }
  }, 30);
}

// Parallax
// Posisi untuk setiap layer
const backgroundX = ref(0);
const backgroundY = ref(0);
const middleX = ref(0);
const middleY = ref(0);
const foregroundX = ref(0);
const foregroundY = ref(0);

const BACKGROUND_FACTOR = 0.02;
const MIDDLE_FACTOR = 0.05;
const FOREGROUND_FACTOR = 0.1;

const handleMouseMove = (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const offsetX = event.clientX - rect.left - centerX;
  const offsetY = event.clientY - rect.top - centerY;

  backgroundX.value = offsetX * BACKGROUND_FACTOR;
  backgroundY.value = offsetY * BACKGROUND_FACTOR;

  middleX.value = offsetX * MIDDLE_FACTOR;
  middleY.value = offsetY * MIDDLE_FACTOR;

  foregroundX.value = offsetX * FOREGROUND_FACTOR;
  foregroundY.value = offsetY * FOREGROUND_FACTOR;
};

const handleMouseLeave = () => {
  backgroundX.value = 0;
  backgroundY.value = 0;
  middleX.value = 0;
  middleY.value = 0;
  foregroundX.value = 0;
  foregroundY.value = 0;
};
</script>
<template>
  <main
    class="container flex flex-col cursor-default justify-center h-screen text-white"
  >
    <div
      class="relative h-96 w-full overflow-hidden z-10 rounded-lg"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <div
        data-aos="zoom-out"
        data-aos-duration="3000"
        class="absolute inset-0 transition-transform duration-100 ease-out"
      >
        <div class="flex h-full items-center justify-center">
          <div class="text-center">
            <h1
              class="text-white font-Poppins text-2xl hover:text-[#87a5a5] ease-in duration-150"
            >
              Hello, I'am
            </h1>
            <div
              :style="{
                transform: `translate(${foregroundX}px, ${foregroundY}px)`,
              }"
              class="scramble-container font-Lora z-10 lg:text-9xl text-5xl font-bold tracking-wide"
              ref="nameEl"
            ></div>

            <div class="pt-3 font-Poppins font-medium">
              <Typing
                :texts="[
                  'Front-end Developer',
                  'Sosial Media Marketing',
                  'Graphic Design',
                ]"
                :speed="100"
                :delay="2000"
              ></Typing>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@keyframes roles {
  0%,
  30% {
    content: "Front-End Developer";
  }
  31%,
  60% {
    content: "Social Media Marketing";
  }
  61%,
  100% {
    content: "Design Grafis";
  }
}
</style>
