<template>
  <div class="container mx-auto">
    <main class="neutral-content bg-base-300 rounded-xl p-5 lg:flex overflow-x-hidden">
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
          <div class="max-w-full px-5 lg:w-80 py-3 lg:py-5 lg:px-10">
            <img
              data-aos="fade-right"
              class="rounded-full transition-all duration-300 hover:scale-105 filter hover:brightness-110 shadow-lg hover:shadow-neutral-content/50 hover:shadow-xl"
              src="/src/assets/profile.jpg"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
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

    <!-- Skill Section -->
    <div data-aos="fade-up" class="my-2 p-5 flex items-center cursor-default">
      <div class="h-1 w-20 pr-2">
        <div class="h-1 bg-primary-content animate-line"></div>
      </div>
      <h1 class="font-Poppins text-xl font-medium text-white">Skills</h1>
    </div>

    <div class="flex font-Poppins flex-wrap justify-center ">
      <div data-aos="fade-up" class="group z-10 mx-2 my-2">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <i class="fa-brands fa-html5 text-[3rem] px-5 text-[#ff0000]"></i>
        </div>
      </div>
      <div data-aos="fade-up" class="group z-10 mx-2 my-2">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <i class="fa-brands fa-css3-alt text-[3rem] px-5 text-[#3700ff]"></i>
        </div>
      </div>
      <div data-aos="fade-up" class="group z-10 mx-2 my-2">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <i
            class="fa-brands fa-js text-[3rem] px-5"
            style="color: #ffd43b"
          ></i>
        </div>
      </div>
      <div data-aos="fade-up" class="group z-10 mx-2 my-2">
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
      <div data-aos="fade-up" class="group z-10 mx-2 my-2">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <i
            class="fa-brands fa-vuejs text-[3rem] px-5"
            style="color: #42b883"
          ></i>
        </div>
      </div>
      <div data-aos="fade-up" class="group z-10 mx-2 my-2">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <i
            class="fa-brands fa-bootstrap text-[3rem] px-5"
            style="color: #005eff"
          ></i>
        </div>
      </div>
      <div data-aos="fade-up" class="group z-10 mx-2 my-2">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <i
            class="fa-brands fa-sass text-[3rem] px-5"
            style="color: #bf4080"
          ></i>
        </div>
      </div>
      <div data-aos="fade-up" class="group z-10 mx-2 my-2">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <img
            src="/src/assets/python-svgrepo-com.svg"
            class="w-[87px] px-5"
            alt="Python"
          />
        </div>
      </div>
      <div data-aos="fade-up" class="group z-10 mx-2 my-2">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <i
            class="fa-brands fa-github text-[3rem] px-5"
            style="color: #ffff"
          ></i>
        </div>
      </div>
      <div data-aos="fade-up" class="group z-10 mx-2 my-2">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <i
            class="fa-brands fa-npm text-[3rem] px-5"
            style="color: #ff0000"
          ></i>
        </div>
      </div>
      <div data-aos="fade-up" class="group z-10 mx-2 my-2">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <img
            src="/src/assets/vscode.png"
            class="w-[87px] px-5"
            alt="Vscode"
          />
        </div>
      </div>
      
      <div data-aos="fade-up" class="group z-10 mx-2 my-2">
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
      <div data-aos="fade-up" class="group z-10 mx-2 my-2">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <img
            src="/src/assets/Figma-logo.svg.png"
            class="w-[72px] px-5"
            alt="Figma"
          />
        </div>
      </div>
      <div data-aos="fade-up" class="group z-10 mx-2 my-2">
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
      <div data-aos="fade-up" class="group z-10 mx-2 my-2">
        <div
          class="flex items-center py-1 outline outline-2 rounded group-hover:bg-neutral-content group-hover:ease-in duration-200"
        >
          <img
            src="/src/assets/corel.png"
            class="w-[87px] px-5"
            alt="Corel Draw"
          />
        </div>
      </div>
    </div>

    <!-- Sertifikat Section -->
    <div data-aos="fade-up" class="my-10 p-5 flex items-center cursor-default">
      <div class="h-1 w-20 pr-2">
        <div class="h-1 bg-primary-content animate-line"></div>
      </div>
      <h1 class="font-Poppins text-xl font-medium text-white">Certificate</h1>
    </div>

   
    <div class="flex items-center flex-wrap justify-center font-Poppins">
       <!-- Sertifikat 1 -->
    <div
    data-aos="fade-up" class="group relative z-10 mx-2 my-4 bg-base-200 rounded-xl p-4 shadow-md hover:shadow-neutral-content/50 transition-all duration-300 hover:scale-105">
   <a
    href="https://storage.googleapis.com/myskill-v2-certificates/topic-ZIWNpsfNZkE1B2rWr69H/fZpJp5JC9WWsmeybN4pNHO1bOQf2-dQ5VGAYi73bfAmIQLd4a.pdf"
    target="_blank"
    rel="noopener noreferrer"
    class="block relative"
  >
    <div class="overflow-hidden rounded-lg relative">
      <img
        src="/src/assets/Sertifikat1.png"
        alt="Sertifikat 2"
        class="rounded-lg w-[400px] h-[238px] object-cover transition-transform duration-300 group-hover:scale-110"
      />

      <div
        class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span class="text-white text-base font-semibold tracking-wide">
          Show Credential
        </span>
      </div>
    </div>

    <h2 class="text-white text-center mt-3 font-semibold text-lg">
      MySkill - VueJs
    </h2>
   </a>
   </div>

   <!-- Sertifikat 2 -->
<div
  data-aos="fade-up"
  class="group relative z-10 mx-2 my-4 bg-base-200 rounded-xl p-4 shadow-md hover:shadow-neutral-content/50 transition-all duration-300 hover:scale-105"
>
  <a
    href="https://storage.googleapis.com/myskill-v2-certificates/topic-pTLX6J38RGSQ4dfEO6yQ/fZpJp5JC9WWsmeybN4pNHO1bOQf2-87s8vOHDPQbIr4JjiD7Q.pdf"
    target="_blank"
    rel="noopener noreferrer"
    class="block relative"
  >
    <div class="overflow-hidden rounded-lg relative">
      <img
        src="/src/assets/Sertifikat2.png"
        alt="Sertifikat 2"
        class="rounded-lg w-[400px] h-[238px] object-cover transition-transform duration-300 group-hover:scale-110"
      />

  
      <div
        class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span class="text-white text-base font-semibold tracking-wide">
          Show Credential
        </span>
      </div>
    </div>

    <h2 class="text-white text-center mt-3 font-semibold text-lg">
      MySkill - JavaScript
    </h2>
  </a>
</div>

<!-- Sertifikat 3 -->
<div
  data-aos="fade-up"
  class="group relative z-10 mx-2 my-4 bg-base-200 rounded-xl p-4 shadow-md hover:shadow-neutral-content/50 transition-all duration-300 hover:scale-105"
>
  <a
    href="https://storage.googleapis.com/myskill-v2-certificates/course-GeueYoOAoIi58XZ0MWA9/fZpJp5JC9WWsmeybN4pNHO1bOQf2-W2IiY0dRHD3zkJCgX85X.pdf"
    target="_blank"
    rel="noopener noreferrer"
    class="block relative"
  >
    <div class="overflow-hidden rounded-lg relative">
      <img
        src="/src/assets/Sertifikat5.png"
        alt="Sertifikat 2"
        class="rounded-lg w-[400px] h-[238px] object-cover transition-transform duration-300 group-hover:scale-110"
      />

  
      <div
        class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span class="text-white text-base font-semibold tracking-wide">
          Show Credential
        </span>
      </div>
    </div>

    <h2 class="text-white text-center mt-3 font-semibold text-lg">
      MySkill - CSS
    </h2>
  </a>
</div>

<!-- Sertifikat 4 -->
<div
  data-aos="fade-up"
  class="group relative z-10 mx-2 my-4 bg-base-200 rounded-xl p-4 shadow-md hover:shadow-neutral-content/50 transition-all duration-300 hover:scale-105"
>
  <a
    href="https://www.codepolitan.com/c/KV9LAKW/"
    target="_blank"
    rel="noopener noreferrer"
    class="block relative"
  >
    <div class="overflow-hidden rounded-lg relative">
      <img
        src="/src/assets/Sertifkat4.png"
        alt="Sertifikat 2"
        class="rounded-lg w-[400px] h-[238px] object-cover transition-transform duration-300 group-hover:scale-110"
      />

  
      <div
        class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span class="text-white text-base font-semibold tracking-wide">
          Show Credential
        </span>
      </div>
    </div>

    <h2 class="text-white text-center mt-3 font-semibold text-lg">
      Codepolitan - HTML and CSS
    </h2>
  </a>
</div>

<!-- Sertifikat 5 -->
<div
  data-aos="fade-up"
  class="group relative z-10 mx-2 my-4 bg-base-200 rounded-xl p-4 shadow-md hover:shadow-neutral-content/50 transition-all duration-300 hover:scale-105"
>
  <a
    href="https://www.codepolitan.com/c/C5ZBULI/"
    target="_blank"
    rel="noopener noreferrer"
    class="block relative"
  >
    <div class="overflow-hidden rounded-lg relative">
      <img
        src="/src/assets/Sertifikat3.png"
        alt="Sertifikat 2"
        class="rounded-lg w-[400px] h-[238px] object-cover transition-transform duration-300 group-hover:scale-110"
      />

  
      <div
        class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span class="text-white text-base font-semibold tracking-wide">
          Show Credential
        </span>
      </div>
    </div>

    <h2 class="text-white text-center mt-3 font-semibold text-lg">
      Codepolitan - JavaScript
    </h2>
  </a>
</div>

    </div>
  </div>
</template>
