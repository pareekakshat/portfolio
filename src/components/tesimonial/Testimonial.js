import React, { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../layouts/Title";
import {
  publicationOne,
  publicationTwo,
  publicationThree,
  publication,
} from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="My Research Work" des="Publications" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          {/* <div className="w-full"> 
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-auto md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={publicationThree}
                  alt="testimonialThree"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    CEEA-ACEG
                  </p>
                  <h3 className="text-2xl font-bold">Authors:</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Rohan Pradhan, Jeffrey Davis
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img
                  className="w-20 lgl:w-32"
                  src={publication}
                  alt="publication icon"
                />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Augmented Reality Applications For Curriculum In
                        Computer Science And Engineering
                      </h3>
                      <p
                        className="text-base text-gray-400 mt-3"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Conference Proceedings 2023 Canadian Engineering
                        Education Association-Association canadienne de
                        l’education en genie
                      </p>
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Analyzed various methodologies to integrate Augmented
                    Reality into educational content creation. While most
                    existing solutions used pointers and buttons to guide the
                    users, we aimed to develop pointerless applications by
                    depending solely on gestures to enhance the user experience
                    and make the applications immersive.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={publicationOne}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    IEEE
                  </p>
                  <h3 className="text-2xl font-bold">Authors:</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Rohan Pradhan, Shaswat Saxena, Akarsh Kumar Singh, Jabir Ali
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img
                  className="w-20 lgl:w-32"
                  src={publication}
                  alt="publication icon"
                />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Battery Swapping System for the Electric Vehicles
                      </h3>
                      <p
                        className="text-base text-gray-400 mt-3"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        2022 International Conference on Computing,
                        Communication, and Intelligent Systems (ICCCIS) (pp.
                        919-924). IEEE
                      </p>
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Our research aimed at developing a battery swapping system
                    for electric vehicles which will benefit the users in case
                    of emergencies as conventional battery charging is a
                    time-consuming process, and there is no streamlined system
                    to check the availability of batteries to swap.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          {/* ================ Slider Two ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={publicationTwo}
                  alt="testimonialTwo"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    AI BASED PARAPHRASING TOOL USING TRANSFORMERS 
                  </p>
                  <h3 className="text-2xl font-bold">Author:</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Akshat Pareek
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img
                  className="w-20 lgl:w-32"
                  src={publication}
                  alt="publication icon"
                />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                      AI BASED PARAPHRASING TOOL USING TRANSFORMERS 
                      </h3>
                      {/* <p
                        className="text-base text-gray-400 mt-3"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        ECS Transactions 107, no. 1 (2022): 45
                      </p> */}
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                  This project presents an AI-based paraphrasing tool using a Text-To-Text Transfer Transformer (T5) model. Paraphrasing is the process of rephrasing a sentence or a text in a way that it retains the original meaning but uses different words and structures. The proposed tool utilizes HuggingFace T5, a transformer model to generate paraphrased sentences. The transformer model is prepared on a expansive corpus of content information employing a self-attention instrument, which permits it to capture long-term dependencies within the input content. The text corpus we used is Quora’s Duplicate Question Pairs Dataset csv. The program takes a sentence as input and produces a number of paraphrased versions that retain the original statement's meaning and context. The tool's performance is measured using industry-standard metrics, and the findings show that it performs better than most of the state-of-the-art paraphrasing tools. This tool has been validated using BLEU metrics, which resulted in a very acceptable score of 0.43, indicating that the phrases it has paraphrased meets the requirements for needed similarity and uniqueness. This tool has the potential to assist writers, researchers, and language learners in generating high-quality paraphrased sentences
                  Keywords— Artificial Intelligence, Natural Language Processing, HuggingFace, Text-To-Text Transfer Transformer (T5), Paraphraser.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Three ================== */}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
