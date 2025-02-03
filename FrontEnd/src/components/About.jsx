import React, { useState } from "react";
import img1 from "../assets/officelogoabout.png";
import img2 from "../assets/officelogoabout1.png";

const Contact = () => {
  return (
    <section className="mx-20 py-14">
      <div className="bg-white shadow-sm rounded gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg">
          <h2
            className="mb-4 text-4xl text-gray-900 font-thin first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
          first-letter:mr-3 first-letter:float-left"
          >
            <span className="font-bold">Revolutionizing</span> Healthcare with AI-Powered Assistance
          </h2>
          <p className="mb-4">
            MediAssist is an AI-driven platform designed to provide primary medical consultations through text-based interactions. Our goal is to connect patients with doctors instantly, offering reliable advice and referrals when needed.
          </p>
          <p>
            With a focus on improving healthcare access, MediAssist uses cutting-edge Natural Language Processing (NLP) technology to deliver seamless communication and accurate diagnoses, helping people take the first step toward better health.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src={img1}
            alt="doctor consultation"
          />
          <img
            className="mt-4 w-full rounded-lg lg:mt-10"
            src={img2}
            alt="healthcare assistance"
          />
        </div>
      </div>
    </section>

  );
};

export default Contact;
