import React from "react";
import eventImage from "../assets/event.png";
import eventImage2 from "../assets/event2.png";
import eventImage3 from "../assets/event3.png";

export const Home = () => {
  return (
    <>
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Making Event Tickets Available Everywhere
                </h1>
                <p className="text_para">
                  Meet TickNet, your hassle-free ticketing solution. No more
                  queues – just the joy of securing event tickets from your home
                  with a few clicks. Discover a diverse range of events, from
                  concerts to sports, all on a user-friendly platform. TickNet
                  ensures a secure and efficient process, with personalized
                  recommendations based on your interests. Say goodbye to the
                  ordinary ticket-buying experience; TickNet transforms it into
                  an exciting journey, where anticipation begins the moment you
                  click 'purchase.' Welcome to the future of ticketing – welcome
                  to TickNet.
                </p>
                <button className="btn">Explore More !</button>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={eventImage} alt="" className=""/>
              </div>
              <div className="mt-[30px]">
                {/* <img src={eventImage2} alt="" className="w-full mb-[30px]" /> */}
                {/* <img src={eventImage3} alt="" className="w-full" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
