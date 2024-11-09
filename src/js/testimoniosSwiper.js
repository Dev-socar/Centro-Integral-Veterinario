import Swiper from "swiper";
import "swiper/css";

export const testimoniosSwiper = () => {
  const swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
};

