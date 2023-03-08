 
 import MainSlider from "./modules/slider/slider-main";
import videoPlayer from "./modules/playVideo";
 
 window.addEventListener("DOMContentLoaded", () => {
  const slider = new MainSlider({page:".page", btns:".next"});
  slider.render();
  const player = new videoPlayer(".showup .play", ".overlay");
  player.init();
});