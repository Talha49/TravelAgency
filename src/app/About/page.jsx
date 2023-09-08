import React from 'react';
import Image from 'next/image';
import AA from '../img/a1.jpg'
import BB from '../img/a2.jpg'
import CC from '../img/a3.jpg'

const AboutUsPage = () => {
  return (
    <div className="mt-7 py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold mb-6 ">
        About Our Travel Agency
      </h1>
      <div className="flex gap-9 flex-col md:flex-row items-center">
        <div className="md:w-1/2 pr-8 mb-6">
          <p className="text-lg leading-7">
            Welcome to our world of adventure and exploration! At XYZ Travel Agency, we are passionate about crafting unforgettable travel experiences for our clients. Whether you're seeking a relaxing beach getaway, an exciting city adventure, or a remote wilderness expedition, we have you covered.
          </p>
          <p className="text-lg leading-7 mt-4">
            Our dedicated team of travel experts has years of experience and extensive knowledge of the most exotic destinations worldwide. We take pride in customizing every journey to meet your unique interests and preferences, ensuring you have the trip of a lifetime.
          </p>
          <p className="text-lg leading-7 mt-4">
            With a commitment to sustainable travel practices, we aim to preserve the beauty of the destinations we explore. Our partnerships with local communities and eco-friendly initiatives allow us to contribute positively to the places we visit.
          </p>
          <blockquote className="text-xl italic mt-6">
            "Travel is the only thing you can buy that makes you richer." - Unknown
          </blockquote>
        </div>
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4  place-items-center place-content-center">
          <Image
            src={AA}
            alt="Adventure Travel"
            className="w-full rounded-lg shadow-lg"
          />
          <Image
            src={BB}
            alt="Cultural Exploration"
            className="w-full rounded-lg shadow-lg"
          />
          <Image
            src={CC}
            alt="Luxury Retreats"
            className="w-[60%] rounded-lg shadow-lg col-span-2"
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default AboutUsPage;
