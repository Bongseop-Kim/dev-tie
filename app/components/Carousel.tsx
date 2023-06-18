"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";

interface Image {
  id: number;
  imageUrl: string;
  routerUrl: string;
}

interface CarouselProps {
  images: Image[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const router = useRouter();
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {images.map((image) => {
          return (
            <SwiperSlide key={image.id}>
              <div className="w-full h-[50vh] cursor-pointer" onClick={() => router.push(image.routerUrl)}>
                <Image src={image.imageUrl} alt="image" fill style={{ objectFit: "cover" }} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
