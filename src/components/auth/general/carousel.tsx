"use client";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./carousel.css";

const Item = ({ image, text }: any) => (
  <div className="relative h-full w-full">
    <img
      src={image}
      alt="Workout"
      className="h-full w-full object-cover rounded-2xl p-2"
    />
    <div className="absolute tracking-widest bottom-10 left-0 right-0 text-center text-white text-xl font-mono opacity-85 select-none font-light py-2 px-4">
      {text}
    </div>
  </div>
);

const LogoAndBack = () => (
  <div className="relative">
    <p className="absolute top-6 left-6 z-50 text-white font-mono opacity-65 tracking-wider select-none">
      CARDIOSENSE
    </p>

    <Link
      href={"/"}
      className="z-50 absolute top-4 right-4 bg-white bg-opacity-25 text-white py-2 px-4 rounded-full text-sm hover:bg-gray-500 hover:bg-opacity-75 transition-all"
    >
      Back to website →
    </Link>
  </div>
);

export default function Carousel() {
  return (
    <div className="relative h-full w-full">
      <LogoAndBack />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="h-full w-full"
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide>
          <Item
            image="https://img.freepik.com/premium-photo/dark-gym-with-red-light-wall-bar-with-weights-floor_911201-3364.jpg"
            text="Train hard, get results"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Item
            image="https://images.unsplash.com/photo-1528720208104-3d9bd03cc9d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            text="Stay healthy, stay strong"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Item
            image="https://images.unsplash.com/photo-1646656130630-07af3a262a9b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            text="Workout with friends"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
