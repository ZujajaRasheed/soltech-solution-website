import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function PrivacyPolicy() {
  return (
<>
    <Navbar/>
    <div className="max-w-4xl mx-auto p-8 md:text-[20px] text-[16px]">
      <h1 className="md:text-7xl text-4xl mt-6 text-center mb-8">Privacy <span className="text-[#F7921E]">Policy</span></h1>
      <p className="mb-4">
      At <strong>SolTech</strong>, we value your privacy. This Privacy Policy
      explains how we collect, use, and protect your personal information when
      you interact with our website and services.
      </p>

      <h1 className=" mt-6 mb-2">1. Information We Collect</h1>
      <p className="mb-4">
      We may collect personal details such as your name, email address, phone
      number, and message when you use our contact form or services.
     </p>

      <h1 className=" mt-6 mb-2">2. How We Use Your Information</h1>
      <ul className="list-disc pl-6 mb-4">
        <li>To respond to your queries and requests.</li>
        <li>To improve our website and services.</li>
        <li>To send important updates or notifications.</li>
      </ul>

      <h1 className=" mt-6 mb-2">3. Data Protection</h1>
      <p className="mb-4">
        We use secure methods to protect your personal information. However, no
        method of transmission over the internet is 100% secure.
      </p>

      <h1 className=" mt-6 ">4. Contact Us</h1>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at <strong>support@soltech.com</strong>.
      </p>
    </div>
    <Footer/>
    </>
  );
}
