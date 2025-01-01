import Contactoo from "@/components/Contactoo";
import { Josefin_Sans } from "next/font/google";
import Script from "next/script";
import React from "react";
const secondFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400"],
});
const Contact = () => {
  return (
    <div className="pt-24 px-3 bg-orange-300 min-h-screen">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7088214308316238"
        crossOrigin="anonymous"
      />
      <h1
        className={`${secondFont.className} text-5xl text-center bg-blue-700 text-white w-fit mx-auto p-6 rounded-full`}
      >
        Contact us
      </h1>
      <div>
        <Contactoo />
      </div>
    </div>
  );
};

export default Contact;
