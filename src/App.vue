<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Project from "./components/Project.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Particle from "./components/Particle.vue";
const isActive = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function toggleHamburger() {
  isActive.value = !isActive.value;
}

// Smooth Scroll
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <Particle />

  <header
    class="fixed top-0 left-0 w-full flex items-center"
    :class="{ 'navbar-blur': isScrolled }"
  >
    <div data-aos="zoom-out" data-aos-duration="3000" class="container px-5">
      <div class="flex items-center justify-between relative lg:justify-around">
        <!-- Start Logo -->
        <div class="px-4">
          <a
            href="#home"
            @click.prevent="scrollToSection('home')"
            class="font-Poppins font-medium text-lg block py-6 text-white"
            >Putra<span class="font-Lora font-medium">Firdaus.</span></a
          >
        </div>
        <!-- End Logo -->

        <!-- Navigation Menu -->
        <div class="flex items-center px-4">
          <!-- Hamburger dan GitHub untuk Mobile -->
          <div class="flex items-center lg:hidden group">
            <button
              name="hamburger"
              type="button"
              @click="toggleHamburger"
              class="block"
              :class="{ 'hamburger-active ': isActive }"
            >
              <span
                class="w-[30px] h-[2px] my-2 block bg-white transition duration-300 ease-out origin-top-left"
              ></span>
              <span
                class="w-[30px] h-[2px] my-2 block bg-white transition duration-300 ease-out"
              ></span>
              <span
                class="w-[30px] h-[2px] my-2 block bg-white transition duration-300 ease-out origin-bottom-left"
              ></span>
            </button>
          </div>

          <nav
            :class="[
              'absolute py-5 shadow-lg  bg-black rounded-lg w-full right-0 outline lg:outline-none top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ',
              { hidden: !isActive },
            ]"
          >
            <ul
              class="flex font-Poppins font-medium lg:flex py-3 justify-center flex-col lg:flex-row gap-8 lg:px-10 items-center"
            >
              <h1
                class="font-bold font-Lora flex text-white justify-center cursor-default text-3xl lg:hidden"
              >
                Menu
              </h1>
              <li class="group">
                <a
                  href="#home "
                  @click.prevent="scrollToSection('home')"
                  class="text-xl lg:text-base py-2 mx-8 lg:mx-0 group-hover:text-white"
                  >Home</a
                >
              </li>
              <li class="group">
                <a
                  href="#about"
                  @click.prevent="scrollToSection('about')"
                  class="text-xl lg:text-base py-2 mx-8 lg:mx-0 group-hover:text-white"
                  >About</a
                >
              </li>
              <li class="group">
                <a
                  href="#project"
                  @click.prevent="scrollToSection('project')"
                  class="text-xl lg:text-base py-2 mx-8 lg:mx-0 group-hover:text-white"
                  >Project</a
                >
              </li>
              <li class="group">
                <a
                  href="#contact"
                  @click.prevent="scrollToSection('contact')"
                  class="text-xl lg:text-base py-2 mx-8 lg:mx-0 group-hover:text-white"
                  >Contact</a
                >
              </li>
            </ul>
          </nav>

          <!-- GitHub Icon -->
          <div class="px-3 cursor-pointer hover:text-white">
            <a href="https://github.com/PutraFirdausR" target="_blank">
              <i class="fa-brands fa-github text-[30px]"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <section id="home">
    <Home />
  </section>
  <main class="lg:px-[185px]">
    <section id="about">
      <About />
    </section>
    <section id="project">
      <Project />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </main>

  <Footer />
</template>

<style>
.navbar-blur {
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.13);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

header {
  z-index: 1000;
}

@keyframes lineProgress {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

section {
  scroll-margin-top: 4rem;
  min-height: 100vh;
  padding: 1rem;
}

.animate-line {
  animation: lineProgress 2s ease-in-out forwards;
}
</style>
