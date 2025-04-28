import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import teamMembers from "../data/teamMember";
import ConnectSection from "../components/ConnectSection"; // 👈 import the new section

const Nerds = () => {
  return (
    <div>
      <section className="w-full py-20">
        <h2 className="text-4xl font-bold text-center text-white-800 mb-10">
          Meet Our Nerds
        </h2>
        <div className="relative max-w-6xl mx-auto">
          <Swiper
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            modules={[Autoplay]}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-white bg-opacity-10 rounded-xl shadow-xl p-4 w-60 h-70 flex flex-col items-center justify-between text-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-32 h-32 object-contain rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-semibold pb-20 text-white mt-4">
                      {member.name}
                    </h3>
                  </div>
                  <div className="absolute bottom-4 left-4 text-sm font-medium text-white">
                    {member.designation}
                  </div>
                  <img
                    src={member.qr}
                    alt="QR"
                    className="absolute bottom-4 right-4 w-10 h-10"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 👇 Add the ConnectSection below the team slider */}
      <ConnectSection />
    </div>
  );
};

export default Nerds;
