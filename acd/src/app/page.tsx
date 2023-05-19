"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import logo from "./images/logo.png";
import desktopLogo from "./images/desktop-logo.png";
import menuIcon from "./images/menu-icon.svg";
import closeIcon from "../app/images/close-icon.svg";
import aboutImg from "../app/images/about-img.jpg";
import instaIcon from "../app/images/instagram.svg";
import twitterIcon from "../app/images/twitter.svg";
import checkIcon from "../app/images/check-circle.png";
import chooseImg from "../app/images/choose-img.png";
import contactImg from "../app/images/contact-image.png";
import callIcon from "../app/images/icon-phone.svg";
import emailIcon from "../app/images/icon-email.svg";
import locationIcon from "../app/images/location-icon.svg";
import serviceImg from "../app/images/service-1.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Home() {
  // const [nav, setNav] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  

  // const handleNav = () => {
  //   setNav(!nav);
  // };
  return (
    <>
      <section className="h-[100vh] relative text-center flex">
        <nav className="lg:flex lg:justify-between w-[100%] absolute top-0 z-40  ">
          <div className="hidden lg:block  lg:pl-[60px] pt-3 ">
            <Image
              src={desktopLogo}
              alt="Advanced Construction Design Logo"
              className="w-[50px]"
            />
          </div>

          <header className="lg:w-1/2 lg:justify-end lg:pr-4 lg:py-4  transition-all ease-in-out px-2 lg:px-0">
            <div className="flex justify-between items-center lg:items-end lg:justify-end ">
              <div className="lg:hidden">
                <Image src={logo} alt="Advanced Construction Design Logo" />
              </div>

              <div className="py-4 px-2 lg:py-0 lg:px-0 lg:hidden">
                
                   <Image src={isOpen? closeIcon : menuIcon} alt="Menu Icon" onClick={() => { console.log('Clicked'); setIsOpen(!isOpen)}} />
              
               
              </div>
            </div>
            
            <div style={{ display: isOpen ? 'block' : 'none'}} className="px-[30px] pb-[50px] mt-4 lg:mt-0 lg:pb-0 lg:px-0 lg:pr-6 lg:h-[100%]  lg:block mobile-nav">
              <ul className="flex flex-col justify-center lg:justify-end items-center text-white space-y-10 children:max-w-[120px] lg:flex-row lg:space-y-0 lg:space-x-8 lg:h-[100%] text-[18px]">
                <li>
                    <a href="">About Us</a>
                </li>
                <li>
                    <a href="">Services</a>
                </li>
                <li>
                    <a href="">Testimonials</a>
                </li>
                <li className="px-6 py-2 text-[#AB825D] bg-white">
                    <a href="">Call Us</a>
                </li>
              </ul>
            </div>

            {/* Mobile Nav */}
          </header>
        </nav>

        <div className="bg-black opacity-40 absolute top-0 bottom-0 left-0 right-0 lg:hidden z-10"></div>
        <div className="absolute top-[55%] left-[50%] w-[100%] md:w-[80%] px-4 text-white translate-y-[-50%] translate-x-[-50%] lg:static lg:translate-x-0 lg:translate-y-0 lg:w-1/2 lg:text-black lg:bg-[#FFF8F2] lg:flex lg:flex-col lg:justify-center lg:text-left z-20 lg:px-[50px]">
          <h1 className="text-[36px] font-medium leading-[45px] mb-4 sm:text-[42px] lg:text-[56px] lg:leading-[68px] lg:font-medium text-[#fff] lg:text-[#404040]">
            The home of your dreams, built to last a lifetime
          </h1>
          <p className="text-[14px] sm:text-[16px] mb-8 px-[12px] lg:px-0 lg:text-[18px] lg:text-[#6F6F6F]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className=" font-medium sm:flex justify-center lg:justify-start sm:space-x-4 sm:text-[18px]">
            <a
              href="https://wa.me/+917895718187 "
              target="_blank"
              className="inline-block bg-[#AB825D] text-white px-10 py-[12px] w-[180px] mb-[10px] sm:mb-0 hover:scale-105 transition-all ease-in-out"
            >
              Get in touch
            </a>
            <br />
            <a
              href="#projects"
              className="inline-block bg-none border border-white lg:border-[#AB825D]  text-white lg:text-[#AB825D] px-10 py-[12px] w-[180px] mb-4 sm:mb-0 hover:scale-105 transition-all ease-in-out"
            >
              See our work
            </a>
          </div>
        </div>
        <div className="h-[100vh] w-[100%] absolute top-0 bottom-0 left-0 right-0 bg-cover bg-[url('./images/hero-bg.jpg')] z-0 lg:static lg:w-1/2 "></div>
      </section>

      {/* About SECTION */}

      <section className="text-center common-section">
        <div className="container p-[16px] text-left md:flex">
          <div className="md:w-1/2">
            <Image
              src={aboutImg}
              alt="aboutimage"
              className="w-[100%] md:h-[700px] object-cover"
            />
          </div>
          <div className="md:w-1/2 md:flex md:justify-center md:flex-col md:px-12">
            <h1 className="section-heading mt-[16px] mb-[4px]">
              A little about us
            </h1>
            <p className="leading-[28px] text-justify md:text-[18px] md:leading-[28px] lg:text-left text-[#6F6F6F]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              tempore sit voluptates, harum labore aliquid nemo quam alias
              distinctio? Aspernatur maxime rerum porro nemo? Nam labore a
              dignissimos aliquid repudiandae!
            </p>

            <div className="mt-[9px]">
              <a
                href="https://wa.me/+918650000612?text=Hello,%20This%20side%20Amir%20Azam%20from%20Advance%20Construction%20Design%20How%20may%20I%20help%20you%20?%20Thanks"
                className="inline-block bg-[#fff] text-[#AB825D] px-8 py-[10px] mt-[19px] sm:mb-0 hover:scale-105 transition-all ease-in-out border border-[#AB825D] text-[14px] lg:text-[16px]"
              >
                Learn More
              </a>
              <a href="#">
                <Image
                  src={instaIcon}
                  alt="icon"
                  className="inline-block mx-[16px]
                h-[24px]"
                />
              </a>

              <a href="#">
                {" "}
                <Image
                  src={twitterIcon}
                  alt="icon"
                  className="inline-block 
                h-[24px]"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE SECTION */}

      <section className=" bg-[#FFF8F2] common-section">
        <div className="container p-[10px]">
          <div className="">
            <h1 className="section-heading lg:text-center text-center text-[36px] pt-[25px] font-medium ">
              Services we offer
            </h1>
            <p className="text-[16px] leading-[30px] mb-9 text-[#6F6F6F] lg:text-[18px] text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, in!
            </p>
          </div>

          <div className="flex flex-col justify-center h-[20%] space-y-3  children:h-[300px] children:flex children:flex-col children:justify-end children:text-[#fff] children:p-[25px] md:flex-row md:children:h-[350px] md:children:w-1/3 md:space-y-0 md:space-x-[45px]">
            <div className=" service-common serviceimg-1 w-[100%] flex flex-col justify-end text-[#fff]">
              <h1 className="text-[24px] font-semibold lg:font-thin leading-[29px] text-white">
                Interior Design
              </h1>
              <p className="text-[#CECECE] text-[14px] mt-2 lg:text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>

            <div className="service-common serviceimg-2">
              <h1 className="text-[24px] font-thin leading-[29px] text-white">
                Construction
              </h1>
              <p className="text-[#CECECE] text-[14px] mt-2 lg:text-[16px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>

            <div className="service-common serviceimg-3">
              <h1 className="text-[24px] text-white font-thin leading-[29px]">
                3d Modeling
              </h1>
              <p className="text-[#CECECE] text-[14px] mt-2 lg:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam, debitis!
              </p>
            </div>
          </div>
          <div className="text-center mt-[11px] mb-[53px] ">
            <a
              href="https://wa.me/+918650000612?text=Hello,%20This%20side%20Amir%20Azam%20from%20Advance%20Construction%20Design%20How%20may%20I%20help%20you%20?%20Thanks"
              className="inline-block bg-[#AB825D] text-white px-9 py-[12px] w-[180px] mb-[10px] sm:mb-0 hover:scale-105 transition-all ease-in-out md:mt-9 mt-5 "
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}

      <section className="text-center common-section">
        <div className="container p-[16px] text-left md:flex md:flex-row-reverse flex  flex-col justify-center">
          <div className="md:w-1/2 ">
            <Image
              src={chooseImg}
              alt="chooseimage"
              className="w-[100%] object-cover h-[432px]
              md:h-[700px] "
            />
          </div>
          <div className="md:w-1/2 md:flex md:justify-center md:flex-col">
            <h1 className="section-heading  mb-[6px] md:mb-0 mt-3">
              Why Choose Us
            </h1>

            <div className="flex flex-col justify-center mr-[40px]">
              <div className="my-4">
                <Image
                  src={checkIcon}
                  alt="icon"
                  className="inline-block 
            h-[24px]
            w-[24px]
            lg:h-[29px]
            lg:w-[29px]"
                />
                <h1 className="inline-block text-[#AB825D] ml-4 lg:text-[25px]">
                  Daily Consultant
                </h1>
                <p className="pl-10 leadind-[30px] lg:text-[18px] lg:ml-1 text-[#6F6F6F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt, dicta!
                </p>
              </div>
              <div className="mb-4">
                <Image
                  src={checkIcon}
                  alt="icon"
                  className="inline-block 
            h-[24px]
            w-[24px]
            lg:h-[29px]
            lg:w-[29px]"
                />
                <h1 className="inline-block lg:text-[25px] text-[#AB825D] ml-4">
                  Bespoke Design
                </h1>
                <p className="pl-10 leadind-[30px] lg:ml-1 lg:text-[18px] text-[#6F6F6F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, totam.
                </p>
              </div>
              <div>
                <Image
                  src={checkIcon}
                  alt="icon"
                  className="inline-block 
            h-[24px]
            w-[24px]
            lg:h-[29px]
            lg:w-[29px]"
                />
                <h1 className="inline-block text-[#AB825D] lg:text-[25px] ml-4">
                  Premium Quality Material
                </h1>
                <p className="pl-10 leadind-[30px] lg:ml-1 lg:text-[18px] text-[#6F6F6F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  unde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER */}

      <section className="bg-[#AB825D] py-14 w-[100%]">
        <div className="container text-center">
          <h1 className=" text-center text-[40px] text-[#fff] mx-auto">
            Want to get your dream home built?
          </h1>
          <a
            href="#"
            className="inline-block bg-[#fff] text-[#AB825D] px-8 py-[10px] mt-[19px] sm:mb-0 hover:scale-105 transition-all ease-in-out border border-[#AB825D] text-[14px] "
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Project Section */}

      {/* <section>
        <div>
          <h1>Our Projects</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ipsum.
          </p>
        </div>

        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </section> */}

      {/* PROJECTSECTION */}

      <section className="common-section" id="projects">
        <div className="container p-[10px]">
          <div className="text-center ">
            <h1 className=" section-heading font-medium ">Our Projects</h1>
            <p className="text-[16px] leading-[30px] mb-9 text-start ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, in!
            </p>
          </div>

          <div className="flex flex-col justify-center h-[20%] space-y-3  children:flex children:flex-col children:justify-end children:text-[#fff]  md:flex-row md:space-y-0 md:space-x-[45px]">
            <div className=" service-common projectimg-1 w-[100%] flex flex-col justify-end text-[#fff] h-[600px] md:h-[550px] md:w-1/2 p-[25px]">
              <h1 className="text-[24px] font-bold leading-[29px] text-white lg:font-thin">
                Mannat
              </h1>
              <p className="text-[#CECECE] text-[14px] mt-2 lg:text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>

              <div className="flex space-x-4 children:text-[9px] mt-6 children:border children:border-[#CECECE]  children:py-1 children:px-2 text-[#CECECE]">
                <p className="lg:text-[13px]">3d Modelling</p>
                <p className="lg:text-[13px]">Interior Designing</p>
                <p className="lg:text-[13px]">Contruction</p>
              </div>
            </div>
            <div className="md:w-1/2 md:flex md:flex-col   children:flex children:flex-col children:justify-end children:text-[#fff]">
              <div className="service-common projectimg-2 h-[370px] md:w-[100%] md:h-1/2 md:p-5 p-[25px]">
                <h1 className="text-[24px] font-bold leading-[29px] text-white lg:font-thin">
                  Qazi Lawns
                </h1>
                <p className="text-[#CECECE] text-[14px] mt-2 lg:text-[16px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>

                <div className="flex space-x-4 children:text-[9px] mt-6 children:border children:border-[#CECECE]  children:py-1 children:px-2 text-[#CECECE]">
                  <p className="lg:text-[13px]">3d Modelling</p>

                  <p className="lg:text-[13px]">Contruction</p>
                </div>
              </div>

              <div className="service-common projectimg-3 h-[370px] md:w-full md:h-1/2 p-[25px] mt-5">
                <h1 className="text-[24px] text-white font-bold leading-[29px] lg:font-thin ">
                  Multani Manzil
                </h1>
                <p className="text-[#CECECE] text-[14px] mt-2 lg:text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam, debitis!
                </p>

                <div className="flex space-x-4 children:text-[9px] mt-6 children:border children:border-[#CECECE]  children:py-1 children:px-2 text-[#CECECE]">
                  <p className="lg:text-[13px]">3d Modelling</p>
                  <p className="lg:text-[13px]">Interior Designing</p>
                  <p className="lg:text-[13px]">Contruction</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-[30px]">
            <a
              href="#"
              className="inline-block bg-[#AB825D] text-white px-10 py-[12px] w-[180px] mb-[10px] sm:mb-0 hover:scale-105 transition-all ease-in-out"
            >
              See all projects
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}

      <section className="bg-[#FFF8F2] py-5 w-[100%]">
        <div className="container">
          <div className="w-[100%] mx-auto ml-3">
            <h1 className="leading-[44px] text-[36px] font-semibold text-justify">
              Testimonial
            </h1>
            <p className="leading-[25px] text-[#6F6F6F] text-justify ml-2 mb-10">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
              adipisicing .
            </p>
          </div>

          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            // mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper "
          >
            <SwiperSlide>
              <section className=" my-7">
                <div className="flex flex-col p-[40px] mx-auto md:flex md:flex-row border md:border-[#FDE1C7] md:w-[90%] w-[100%]">
                  <div className="mx-auto">
                    <Image
                      src={serviceImg}
                      alt="djcbjx w-[200px] h-[200px] "
                    ></Image>
                  </div>
                  <div className="p-[10px] md:px-9">
                    <p className=" mt-4 text-justify text-[#6F6F6F] text-[14px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid amet nihil rem nemo, ab odio? Autem voluptas
                      distinctio incidunt totam architecto, inventore, qui
                      eveniet doloremque impedit quasi consectetur?
                    </p>
                    <h1 className="text-justify mt-6">Imran Ahmed</h1>
                    <p className="text-[16px] leading-[19px] text-[#AB825D] italic text-justify">
                      Software Developer
                    </p>
                  </div>
                </div>
              </section>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <section className="bg-[#FFF8F2]">
                <div className="flex flex-col p-[40px] mx-auto md:flex md:flex-row border md:border-[#FDE1C7] md:w-[90%]">
                  <div className="mx-auto">
                    <Image
                      src={serviceImg}
                      alt="djcbjx w-[200px] h-[200px] "
                    ></Image>
                  </div>
                  <div className="p-[10px] md:px-9">
                    <p className=" mt-4 text-justify text-[#6F6F6F]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid amet nihil rem nemo, ab odio? Autem voluptas
                      distinctio incidunt totam architecto, inventore, qui
                      eveniet doloremque impedit quasi consectetur?
                    </p>
                    <h1 className="text-justify mt-6">Imran Ahmed</h1>
                    <p className="text-[16px] leading-[19px] text-[#AB825D] italic text-justify">
                      Software Developer
                    </p>
                  </div>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <section className="bg-[#FFF8F2]">
                <div className="flex flex-col p-[40px] mx-auto md:flex md:flex-row border md:border-[#FDE1C7] md:w-[90%]">
                  <div className="mx-auto">
                    <Image
                      src={serviceImg}
                      alt="djcbjx w-[200px] h-[200px] "
                    ></Image>
                  </div>
                  <div className="p-[10px] md:px-9">
                    <p className=" mt-4 text-justify text-[#6F6F6F]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid amet nihil rem nemo, ab odio? Autem voluptas
                      distinctio incidunt totam architecto, inventore, qui
                      eveniet doloremque impedit quasi consectetur?
                    </p>
                    <h1 className="text-justify mt-6">Imran Ahmed</h1>
                    <p className="text-[16px] leading-[19px] text-[#AB825D] italic text-justify">
                      Software Developer
                    </p>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* CONTACT DETAIL */}

      <section className="text-center common-section">
        <div className="container p-[16px] text-left md:flex">
          <div className="md:w-1/2">
            <Image
              src={contactImg}
              alt="aboutimage"
              className="w-[100%]
             md:h-[700px] object-cover"
            />
          </div>
          <div className="md:w-1/2 md:flex md:justify-center md:flex-col md:px-12 text-[#6F6F6F] lg:text-[18px]">
            <h1 className="section-heading mt-[16px] mb-[4px]">Get in touch</h1>
            <div className="flex flex-col children:flex children:space-x-2 space-y-3">
              <div className="space-x-2">
                <Image src={callIcon} alt="contactimg" />
                <p>+918650000612</p>
              </div>
              <div className="space-x-2">
                <Image src={emailIcon} alt="contactimg " />
                <p className="pl-[4px]">Imranahmed795@gmail.com</p>
              </div>
              <div className="space-x-2">
                <Image src={locationIcon} alt="contactimg" />
                <p>Mohalla Sayyeswada Nagina Dist. BIJNOR</p>
              </div>
            </div>
            <div>
              <a
                href="#"
                className="inline-block bg-[#fff] text-[#AB825D] px-8 py-[10px] mt-[28px] sm:mb-0 hover:scale-105 transition-all ease-in-out border border-[#AB825D] text-[14px]"
              >
                Chat Now
              </a>
              <Image
                src={instaIcon}
                alt="icon"
                className="inline-block mx-[16px]
                h-[24px]"
              />
              <Image
                src={twitterIcon}
                alt="icon"
                className="inline-block 
                h-[24px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer  */}

      <section className="mt-6">
        <div className="flex flex-col bg-[#AB825D] text-center text-[#ffffff] ">
          <div className="mx-auto w-[88px]h-[88px] mt-9">
            <Image src={logo} alt="footer logo" className="h-[55px] w-[55px]" />
          </div>
          <div>
            <h1 className="text-[#ffffff] font-thin text-[24px] w-[300px] mx-auto lg:w-[100%] lg:mx-auto">
              Advance Contsruction Design
            </h1>
          </div>
          <hr className="opacity-60"></hr>
          <div>
            <ul className="leading-[40px] lg:flex lg:justify-center lg:text-[20px]">
              <li className="lg:px-4">About Us</li>
              <li className="lg:px-4">Our Work</li>
              <li className="lg:px-4">Testimonials</li>
              <li className="lg:px-4">Contact Us</li>
            </ul>
          </div>
          <div>
            <p className="leading-[27px] w-[200px] mx-auto mb-4  lg:text-[16px] lg:mt-8 lg:w-[100%] lg:mx-auto opacity-60 ">
              © Copyright 2023 Advanced Constructions Design
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
