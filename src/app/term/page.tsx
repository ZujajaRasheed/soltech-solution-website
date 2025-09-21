import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function TermsAndConditions() {
  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto p-8 md:text-[20px] text-[16px]">
      <h1 className="md:text-7xl text-4xl mb-6 mt-6  text-center">Terms <span className="text-[#F7921E]">& Conditions</span></h1>
      <p className="mb-4">
        These Terms & Conditions govern your use of the <strong>SolTech</strong>
        website and services. By using our website, you agree to comply with
        these terms.
      </p>

      <h1 className=" mt-6 mb-2">1. Use of Services</h1>
      <p className="mb-4">
        You agree to use our website and services only for lawful purposes and
        not to engage in any activities that may harm SolTech or other users.
      </p>

      <h1 className="mt-6 mb-2">2. Intellectual Property</h1>
      <p className="mb-4">
        All content on this website, including logos, text, images, and
        graphics, are the property of SolTech. Unauthorized use is prohibited.
      </p>

      <h1 className="mt-6 mb-2">3. Limitation of Liability</h1>
      <p className="mb-4">
        SolTech is not responsible for any damages or losses resulting from the
        use of our website or services.
      </p>

      <h1 className="mt-6 mb-2">4. Changes to Terms</h1>
      <p className="mb-4">
        We reserve the right to update these Terms & Conditions at any time. It
        is your responsibility to review them regularly.
      </p>

      <h1 className=" mt-6 ">5. Contact Us</h1>
      <p>
        For any questions about these Terms & Conditions, please contact us at{" "}
        <strong>support@soltech.com</strong>.
      </p>
    </div>
    <Footer/>
    </>
  );
}
