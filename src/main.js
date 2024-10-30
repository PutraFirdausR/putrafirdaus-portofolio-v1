import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);
AOS.init({
  duration: 800,
  easing: "ease",
  once: false,
  offset: 120,
  delay: 0,
  anchorPlacement: "top-bottom",
});

app.mount("#app");
