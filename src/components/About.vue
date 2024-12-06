<template>
  <div class="container">
    <main class="neutral-content bg-base-300 rounded-xl p-5 lg:flex">
      <div class="flex flex-col justify-between">
        <h1
          data-aos="fade-up"
          class="text-xl font-Poppins font-medium text-white cursor-default z-10"
        >
          About <span class="font-Poppins font-bold">Me</span>
          <div class="my-2">
            <div class="h-1 w-32">
              <div class="h-1 bg-primary-content animate animate-line"></div>
            </div>
          </div>
        </h1>
        <div class="flex justify-center items-center z-10">
          <div class="w-52 lg:w-80 py-3 lg:py-5 lg:px-10">
            <img
              data-aos="fade-up"
              class="rounded-full transition-all duration-300 hover:scale-105 filter hover:brightness-110 shadow-lg hover:shadow-neutral-content/50 hover:shadow-xl"
              src="/src/assets/Profile.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        class="flex font-Poppins justify-center flex-col cursor-default"
      >
        <h2 class="text-justify text-sm text-white z-10">
          <div
            class="flex items-center justify-center lg:justify-normal lg:w-[13rem] py-2"
          >
            <h1 class="text-white">
              A
              <span class="bg-[#6c757d] text-white p-1 rounded font-bold"
                >Computer Enthusiast.</span
              >
            </h1>
          </div>
          Hello, I'm Putra! I am dedicated to continuing to develop my knowledge
          and skills in technology development. Armed with knowledge in the
          fields of Graphic Design, Front-end Development, and Social Media
          Marketing, with my expertise, I can combine creativity with technology
          to create innovative solutions.
        </h2>
        <div>
          <h1 class="text-sm text-white font-bold pt-2 z-10">
            Other Thing About Me
          </h1>
          <p class="text-white z-10 text-sm">
            Self-taught coding learner who is enjoying the process of finding
            solutions to various challenges. In between coding, I also enjoy
            playing with my beloved cat.
          </p>
        </div>
      </div>
    </main>

    <div data-aos="fade-up" class="my-2 p-5 flex items-center cursor-default">
      <div class="h-1 w-20 pr-2">
        <div class="h-1 bg-primary-content animate-line"></div>
      </div>
      <h1 class="font-Poppins text-xl font-medium text-white">Skills</h1>
    </div>

    <div class="flex font-Poppins gap-7 flex-wrap justify-center">
      <div data-aos="fade-up" class="group z-10">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <i class="fa-brands fa-html5 text-[3rem] px-5 text-[#ff0000]"></i>
        </div>
      </div>
      <div data-aos="fade-up" class="group z-10">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <i class="fa-brands fa-css3-alt text-[3rem] px-5 text-[#3700ff]"></i>
        </div>
      </div>
      <div data-aos="fade-up" class="group z-10">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <i
            class="fa-brands fa-js text-[3rem] px-5"
            style="color: #ffd43b"
          ></i>
        </div>
      </div>
      <div data-aos="fade-up" class="group z-10">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <img
            src="/src/assets/Tailwind CSS.svg"
            class="lg:w-[87px] w-[73px] px-3 lg:px-5"
            alt="Tailwind"
          />
        </div>
      </div>
      <div data-aos="fade-up" class="group z-10">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <i
            class="fa-brands fa-vuejs text-[3rem] px-5"
            style="color: #42b883"
          ></i>
        </div>
      </div>
      <div data-aos="fade-up" class="group z-10">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <i
            class="fa-brands fa-bootstrap text-[3rem] px-5"
            style="color: #005eff"
          ></i>
        </div>
      </div>
      <div data-aos="fade-up" class="group z-10">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <i
            class="fa-brands fa-sass text-[3rem] px-5"
            style="color: #bf4080"
          ></i>
        </div>
      </div>
      <div data-aos="fade-up" class="group z-10">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <i
            class="fa-brands fa-npm text-[3rem] px-5"
            style="color: #ff0000"
          ></i>
        </div>
      </div>

      <div data-aos="fade-up" class="group z-10">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <img
            src="/src/assets/Adobe Photoshop.svg"
            class="w-[87px] px-5"
            alt="Adobe Photosop"
          />
        </div>
      </div>
      <div data-aos="fade-up" class="group z-10">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <img
            src="/src/assets/Adobe Illustrator.svg"
            class="w-[87px] px-5"
            alt="Adobe Illustrator"
          />
        </div>
      </div>
    </div>
  </div>
</template>
