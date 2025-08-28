"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import necessary Swiper modules
// import { Autoplay } from "swiper/modules/autoplay";
// import { Pagination } from "swiper/modules/pagination";
// import { Navigation } from "swiper/modules/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="rounded-lg"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <Image
            src="/images/slider/signzy.svg"
            width={600}
            height={400}
            alt="Slide 1"
            className="mx-auto rounded-lg"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <Image
            src="/images/slider/signzy.svg"
            width={600}
            height={400}
            alt="Slide 2"
            className="mx-auto rounded-lg"
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <Image
            src="/images/slider/signzy.svg"
            width={600}
            height={400}
            alt="Slide 3"
            className="mx-auto rounded-lg"
          />
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <Image
            src="/images/slider/signzy.svg"
            width={600}
            height={400}
            alt="Slide 4"
            className="mx-auto rounded-lg"
          />
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <Image
            src="/images/slider/signzy.svg"
            width={600}
            height={400}
            alt="Slide 5"
            className="mx-auto rounded-lg"
          />
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide>
          <Image
            src="/images/slider/signzy.svg"
            width={600}
            height={400}
            alt="Slide 6"
            className="mx-auto rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
