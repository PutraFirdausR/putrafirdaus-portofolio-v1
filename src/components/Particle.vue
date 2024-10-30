<template>
  <div class="absolute min-h-screen">
    <!-- Particle Background -->
    <div class="fixed inset-0 z-10">
      <canvas
        ref="canvasRef"
        class="absolute inset-0 w-full h-full"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
      ></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const canvasRef = ref(null);
let ctx = null;
let animationFrame = null;
let particles = [];
let mouse = { x: null, y: null };

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 1;
    this.baseX = x;
    this.baseY = y;
    this.density = Math.random() * 30 + 1;
    this.color = "rgba(255, 255, 255, 0.5)"; // Semi-transparent white
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = 100;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < maxDistance) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}

function init() {
  const canvas = canvasRef.value;
  ctx = canvas.getContext("2d");

  // Set canvas size to window size
  const updateSize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  updateSize();

  // Create particles
  particles = [];
  const numberOfParticles = (canvas.width * canvas.height) / 15000; // Reduced density
  for (let i = 0; i < numberOfParticles; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    particles.push(new Particle(x, y));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  animationFrame = requestAnimationFrame(animate);
}

function handleMouseMove(event) {
  const rect = canvasRef.value.getBoundingClientRect();
  mouse.x = event.clientX - rect.left;
  mouse.y = event.clientY - rect.top;
}

function handleMouseLeave() {
  mouse.x = undefined;
  mouse.y = undefined;
}

function handleResize() {
  init();
}

onMounted(() => {
  init();
  animate();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
  window.removeEventListener("resize", handleResize);
});
</script>

<style>
.particle-background {
  pointer-events: none;
}
</style>
