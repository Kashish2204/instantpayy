import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Slider from "@/Component/Slider";
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="bg-[url('/images/header.svg')] w-full bg-cover bg-center">
      <section className="w-full relative overflow-hidden text-center text-white py-24 px-6 ">
        <div className="relative max-w-4xl mx-auto">
          <span className="px-6 py-2 text-sm border rounded-full border-gray-500 font-normal bg-black/20 backdrop-blur-sm">
            MODERN BUSINESS BANKING
          </span>

          <h1
            className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl mx-auto 
               bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
          >
            Welcome to the World of
            <span className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">
              {" "}
              New Age Banking
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            Modern digital banking and identity verification platform for
            businesses, a unified dashboard for managing accounts, payments, and
            more, along with secure APIs to automate workflows.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 font-medium shadow-lg transition">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 rounded-2xl bg-white text-black font-medium hover:bg-gray-200 shadow-lg transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden text-center py-24 px-6">
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug max-w-3xl mx-auto bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Empowering Businesses of All Sizes with Our Banking Solutions
          </h1>
        </div>

        {/* Image */}
        <div>
          <Image
            src="/images/one.jpg"
            width={900}
            height={600}
            alt="Empowering Businesses"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="h-full bg-white flex flex-col items-center justify-center gap-12  text-white py-24 px-6 relative overflow-hidden">
        {/* First */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div>
            <Image
              src="/images/connected_banking.svg"
              width={500}
              height={300}
              alt="Picture of the author"
              className="mx-auto rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-2xl text-gray-600 font-normal mb-2">
            <h2 className="text-2xl text-gray-600 font-normal mb-2">
              CONNECTED BANKING
            </h2>
            <h2 className="text-5xl text-black font-bold mb-4 leading-[60px]">
              All Your Current Accounts at One Place
            </h2>
            <p className="text-black text-xl mb-6">
              Connect & manage existing bank accounts, consolidate banking,
              payments, accounting and expense management in a single interface.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
            </div>
          </div>
        </div>
        {/* Second */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div>
            <Image
              src="/images/payouts.svg"
              width={500}
              height={300}
              alt="Picture of the author"
              className="mx-auto rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-2xl text-gray-600 font-normal mb-2">Payouts</h2>
            <h2 className="text-5xl text-black font-bold mb-4 leading-[60px]">
              Payments Made
              <br /> Simple
            </h2>
            <p className="text-black text-xl mb-6">
              Pay vendors, customers, and employees instantly through all the
              payment methods - bank accounts, UPI, cards & wallets
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
            </div>
          </div>
        </div>
        {/* Third */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div>
            <Image
              src="/images/collections.svg"
              width={500}
              height={300}
              alt="Picture of the author"
              className="mx-auto rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-2xl text-gray-600 font-normal mb-2">
              Collections
            </h2>
            <h2 className="text-5xl text-black font-bold mb-4 leading-[60px]">
              Collect Payments On Time
            </h2>
            <p className="text-black text-xl mb-6">
              Provide multiple payment options with our streamlined collection
              solutions, simplify your invoicing process, and set automated
              reminders
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
            </div>
          </div>
        </div>
        {/* Fourth */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div>
            <Image
              src="/images/cards.svg"
              width={500}
              height={300}
              alt="Picture of the author"
              className="mx-auto rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-2xl text-gray-600 font-normal mb-2">CARDS</h2>
            <h2 className="text-5xl text-black font-bold mb-4 leading-[60px]">
              Take Complete Control of Business Spending
            </h2>
            <p className="text-black text-xl mb-6">
              Powerful corporate cards that give you real-time control, track
              card expenses, set limits for spend control, approve expenses and
              visibility into business spending
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
            </div>
          </div>
        </div>
        {/* Five */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div>
            <Image
              src="/images/working_capital.svg"
              width={500}
              height={300}
              alt="Picture of the author"
              className="mx-auto rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-2xl text-gray-600 font-normal mb-2">
              Working Capital
            </h2>
            <h2 className="text-5xl text-black font-bold mb-4 leading-[60px]">
              Affordable Loans for Your Growing Business
            </h2>
            <p className="text-black text-xl mb-6">
              Designed to meet your unique needs, our flexible financing
              solutions offer competitive rates, easy repayment terms, and quick
              approval processes.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
            </div>
          </div>
        </div>
        {/* Six */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div>
            <Image
              src="/images/utility.svg"
              width={500}
              height={300}
              alt="Picture of the author"
              className="mx-auto rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 text-left">
            {/*<h2 className="text-5xl text-black font-bold mb-4 leading-[60px]">
              CONNECTED BANKING
            </h2> */}
            <h2 className="text-5xl text-black font-bold mb-4 leading-[60px]">
              Centralise Enterprise Utility Bill Payments
            </h2>
            <p className="text-black text-xl mb-6">
              Manage and pay all corporate utility bills from one dashboard,
              with easy reconciliation, multiple payment options, and regional
              locations.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
            </div>
          </div>
        </div>
        {/* Seven */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div>
            <Image
              src="/images/verification.svg"
              width={500}
              height={300}
              alt="Picture of the author"
              className="mx-auto rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 text-left">
            {/*<h2 className="text-5xl text-black font-bold mb-4 leading-[60px]">
              CONNECTED BANKING
            </h2> */}
            <h2 className="text-5xl text-black font-bold mb-4 leading-[60px]">
              Secure and Compliant KYC & KYB Solutions
            </h2>
            <p className="text-black text-xl mb-6">
              Streamline the process of customer verification while adhering to
              regulatory standards, providing a secure experience for your
              business and customers
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
            </div>
          </div>
        </div>
        {/* Eight */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div>
            <Image
              src="/images/insurance.svg"
              width={500}
              height={300}
              alt="Picture of the author"
              className="mx-auto rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-2xl text-gray-600 font-normal mb-2">
              Insurance
            </h2>
            <h2 className="text-5xl text-black font-bold mb-4 leading-[60px]">
              Secure Future, Assured Protection
            </h2>
            <p className="text-black text-xl mb-6">
              Protect your business and secure your future with our
              comprehensive insurance solutions, offering extensive coverage,
              competitive premiums, and dedicated support
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
            </div>
          </div>
        </div>
        {/* Nine */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div>
            <Image
              src="/images/idk.svg"
              width={500}
              height={300}
              alt="Picture of the author"
              className="mx-auto rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 text-left">
            {/*<h2 className="text-5xl text-black font-bold mb-4 leading-[60px]">
              CONNECTED BANKING
            </h2> */}
            <h2 className="text-5xl text-black font-bold mb-4 leading-[60px]">
              Agent Banking Solutions
            </h2>
            <p className="text-black text-xl mb-6">
              Retail businesses can deliver banking services through India’s
              largest agent banking network via one centralised app, and small
              businesses can earn more with zero working capital.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium  cursor-pointer duration-300 ease-in-out hover:bg-gray-400">
                <PiLinkSimpleBold className="text-xl" /> Know More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="h-full  flex flex-row flex-col items-center justify-center gap-12 text-white py-24 px-6 relative overflow-hidden">
        <div>
          <Image
            src="/images/api.svg"
            width={600}
            height={500}
            alt="Picture of the author"
            className="mx-auto rounded-lg"
          />
        </div>
        <div className="text-left py-20">
          <div className="max-w-3xl mx-auto px-6">
            {/* Heading */}
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto 
               bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent 
               leading-[80px]"
            >
              API Suite <br /> Made for Developers <br /> By Developers
            </h1>

            {/* Buttons */}
            <div className="flex justify-start gap-6 mt-8">
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md 
                   hover:bg-blue-700 transition flex items-center gap-x-2"
              >
                Get Started <FaArrowRight />
              </button>

              <button className="px-6 py-3 bg-white text-black border border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">
                Read API Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="h-full  flex flex-row flex-col items-center justify-center gap-12 text-white py-24 px-6 relative overflow-hidden">
        <div className="w-150">
          <div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto text-left
               bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent 
               leading-[80px]"
            >
              Don’t Lose Sleep Over Security
            </h1>

            <p
              className="text-lg md:text-xl font-medium mb-6 max-w-3xl mx-auto text-white 
              leading-relaxed"
            >
              Harness cutting-edge security features to shield your enterprise
              from sophisticated threats, allowing you to confidently scale your
              business and protect your assets and data.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-12 px-12 text-left">
            <div className="flex flex-col items-left">
              <Image
                src="/images/icon/security1.svg"
                width={80}
                height={80}
                alt="Compliant"
              />
              <p className="mt-4 text-md font-medium text-white">
                100% <br /> Compliant
              </p>
            </div>

            <div className="flex flex-col items-left">
              <Image
                src="/images/icon/security2.svg"
                width={80}
                height={80}
                alt="SSL & 2FA"
              />
              <p className="mt-4 text-md font-medium text-white">
                SSL & 2FA <br /> Secured
              </p>
            </div>

            <div className="flex flex-col items-left">
              <Image
                src="/images/icon/security3.svg"
                width={80}
                height={80}
                alt="Security Audits"
              />
              <p className="mt-4 text-md font-medium text-white">
                Regular Security <br /> Audits
              </p>
            </div>

            <div className="flex flex-col items-left">
              <Image
                src="/images/icon/security4.svg"
                width={80}
                height={80}
                alt="Fraud Monitoring"
              />
              <p className="mt-4 text-md font-medium text-white">
                Fraud <br /> Monitoring
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/icon/banner.svg"
            width={700}
            height={600}
            alt="Picture of the author"
            className="mx-auto rounded-lg"
          />
        </div>
      </section>

      <section className="h-[800px] bg-white flex flex-col items-center justify-center gap-24 text-black py-24 px-6">
  <div className="flex flex-col lg:flex-row gap-16 items-center w-full max-w-7xl mx-auto">
    <div className="lg:w-1/2 text-center lg:text-left">
      <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800">
        Companies at all stages use Instantpay
      </h1>
    </div>
    <div className="lg:w-1/2">
      {/* <Slider /> */}
    </div>
  </div>
</section>

    </div>
  );
}
