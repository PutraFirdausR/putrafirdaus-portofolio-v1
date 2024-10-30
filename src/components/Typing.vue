<template>
  <div class="flex items-center justify-center">
    <span class="lg:text-4xl text-2xl text-white">{{ displayedText }}</span>
    <span class="lg:text-4xl text-2xl text-white animate-pulse">|</span>
  </div>
</template>

<script>
export default {
  props: {
    texts: {
      type: Array,
      required: true,
    },
    speed: {
      type: Number,
      default: 150,
    },
    delay: {
      type: Number,
      default: 2000,
    },
  },
  data() {
    return {
      displayedText: "",
      textIndex: 0,
      charIndex: 0,
      typingInterval: null,
    };
  },
  mounted() {
    this.startTyping();
  },
  beforeUnmount() {
    clearInterval(this.typingInterval);
  },
  methods: {
    startTyping() {
      this.typingInterval = setInterval(() => {
        const currentText = this.texts[this.textIndex];

        if (this.charIndex < currentText.length) {
          this.displayedText += currentText[this.charIndex];
          this.charIndex++;
        } else {
          clearInterval(this.typingInterval);
          setTimeout(this.deleteText, this.delay);
        }
      }, this.speed);
    },
    deleteText() {
      this.typingInterval = setInterval(() => {
        if (this.charIndex > 0) {
          this.displayedText = this.displayedText.slice(0, -1);
          this.charIndex--;
        } else {
          clearInterval(this.typingInterval);
          this.textIndex = (this.textIndex + 1) % this.texts.length; // loop teks berikutnya
          setTimeout(this.startTyping, this.speed);
        }
      }, this.speed / 2);
    },
  },
};
</script>

<style scoped>
/* Efek blink untuk kursor */
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
