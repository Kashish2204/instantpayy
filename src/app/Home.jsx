import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Slider from "@/Component/Slider";
import { PiLinkSimpleBold } from "react-icons/pi";

export default function Home() {
  return (
    <div className="bg-[url('/images/header.svg')] w-full bg-cover bg-center">
      <section className="w-full relative overflow-hidden text-center text-white py-24 px-6 ">
        {/* ✅ Removed grid.svg overlay for a clean background */}

        <div className="relative max-w-4xl mx-auto">
          <span className="px-6 py-2 text-sm border rounded-full border-gray-500 font-normal bg-black/20 backdrop-blur-sm">
            MODERN BUSINESS BANKING
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to the World of <br />
            <span className="text-blue-200">New Age Banking</span>
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
            <p className="text-2xl text-gray-600 font-normal mb-2">Payouts</p>
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
           <h2 cclassName="text-2xl text-gray-600 font-normal mb-2">
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
           <h2 className="text-5xl text-black font-bold mb-4 leading-[60px]">CARDS</h2>
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
           <h2 className="text-5xl text-black font-bold mb-4 leading-[60px]">
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
           <h2 className="text-5xl text-black font-bold mb-4 leading-[60px]">
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

      <section className="h-full  flex flex-row flex-col items-center justify-center gap-22 text-white py-24 px-6 relative overflow-hidden">
        <div>
          <Image
            src="/images/api.svg"
            width={600}
            height={500}
            alt="Picture of the author"
            className="mx-auto rounded-lg"
          />
        </div>
        <div className="text-center py-20">
          <div className="max-w-3xl mx-auto px-6">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-white  mb-6 leading-tight">
              API Suite Made for Developers <br /> By Developers
            </h1>

            {/* Buttons */}
            <div className="flex justify-center gap-6 mt-8">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition">
                Get Started
              </button>
              <button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">
                Know More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="h-full  flex flex-row flex-col items-center justify-center gap-12 text-white py-24 px-6 relative overflow-hidden">
        <div>
          <div>
            <h1>Don’t Lose Sleep Over Security</h1>
            <p>
              Harness cutting-edge security features to shield your enterprise
              from sophisticated threats, allowing you to confidently scale your
              business and protect your assets and data.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-12 px-6 text-center">
            <div className="flex flex-col items-center">
              <Image
                src="/images/icon/security1.svg"
                width={80}
                height={80}
                alt="Compliant"
              />
              <p className="mt-4 text-lg font-medium text-gray-700">
                100% Compliant
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/icon/security2.svg"
                width={80}
                height={80}
                alt="SSL & 2FA"
              />
              <p className="mt-4 text-lg font-medium text-gray-700">
                SSL & 2FA Secured
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/icon/security3.svg"
                width={80}
                height={80}
                alt="Security Audits"
              />
              <p className="mt-4 text-lg font-medium text-gray-700">
                Regular Security Audits
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/icon/security4.svg"
                width={80}
                height={80}
                alt="Fraud Monitoring"
              />
              <p className="mt-4 text-lg font-medium text-gray-700">
                Fraud Monitoring
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

      <section className="h-full bg-white flex flex-col items-center justify-center gap-42 text-black py-24 px-6">
        <div className="flex flex-row gap-52 ">
          <div>
            <h1 className="text-5xl font-bold">
              Companies at all stage use Instantpay
            </h1>
          </div>
          <div>
            {/* <Image
              src="/images/slider/signzy.svg"
              width={600}
              height={400}
              alt="Picture of the author"
              className="mx-auto rounded-lg"
            /> */}
            <Slider />
          </div>
        </div>

        <div className="flex flex-row gap-52">
          <div>
            <Image
              src="/images/scan.svg"
              width={150}
              height={80}
              alt="Picture of the author"
              className="mx-auto rounded-lg"
            />
          </div>
          <div>
            <h1>Scan the QR to Download Our App</h1>
            <Image
              src="/images/image.png"
              width={150}
              height={80}
              alt="Picture of the author"
              className="mx-auto rounded-lg"
            />
            <Image
              src="/images/apple.png"
              width={150}
              height={80}
              alt="Picture of the author"
              className="mx-auto rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
// import { FaLinkedin, FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
// import Image from "next/image";
// import Link from "next/link";
// import CursorGlow from "./cursoreffect";


// export default function Homepage () {
//     return (
//         <>
            
//             <section className=" bg-[url('/images/SL-072622-51930-14.jpg')] bg-cover bg-center w-full relative  text-white  flex flex-col justify-center items-center overflow-hidden">
//             {/* <section className="relative bg-[#0b0f1a] text-white  flex flex-col justify-center items-center overflow-hidden"> */}
                
//                 <div className=" bg-cover bg-center bg-black/80 w-full">
//                     <CursorGlow>
//                     {/* Center content */}
//                     <div className="relative z-10 text-center px-6">
//                         {/* Logo in center (replace with your logo image if you want) */}
//                         <div className="pb-10 flex justify-center">
//                             <Image
//                                 src="/images/logo_hero.svg"
//                                 alt="Instantpay Logo"
//                                 width={250}
//                                 height={250}
//                             />
//                         </div>
//                         {/* Heading */}
//                         <h1
//                             className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto
//                                         bg-[linear-gradient(to_right,#77A1D3_0%,#79CBCA_51%,#77A1D3_100%)]
//                                         text-transparent bg-clip-text"
//                             >
//                             Experience Fast, Flexible &amp; Transparent Way to Bank
//                             </h1>


//                         {/* Buttons */}
//                         <div className="mt-8 flex justify-center gap-4 pb-40">
//                             <button className="px-7 py-2 bg-blue-700  text-white rounded-xl text-md font-bold transition">
//                                 Get Started
//                             </button>
//                             <button className="px-7 py-2 border border-gray-400 text-white rounded-xl text-md font-bold transition">
//                                 Contact Sales
//                             </button>
//                         </div>
//                     </div>
//                     </CursorGlow>
//                 </div>
                

                
//             </section>
            
//             <section className="bg-[#0f0f12] text-gray-300 py-15">

//                 <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-5 lg:gap-20">
//                     <div className="w-full  md:w-1/3  space-y-4">
//                     {/* Logo (replace /instantpay-logo.svg with your logo) */}
//                         <div className="flex items-start gap-2">
//                             <Image
//                             src="/images/footer_logo.svg"
//                             alt="Instantpay Logo"
//                             width={30}
//                             height={30}
//                             />
//                             <span className="text-white font-semibold text-xl">instantpay</span>
//                         </div>
//                         <p className="text-gray-400 text-sm leading-relaxed">
//                             Instantpay is a modern digital banking and identity verification
//                             platform for businesses. It offers a unified dashboard for managing
//                             accounts, payments, and more, along with secure APIs to automate
//                             workflows.
//                         </p>
//                     </div>

//                     <div className="w-full lg:w-2/3 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
//                         {/* Products */}
//                         <div>
//                             <h3 className="text-white font-semibold mb-4">Products</h3>
//                             <ul className="space-y-2 text-sm">
//                                 <li><Link href="#" className="flex items-center gap-1">Payouts <span className="block md:hidden text-2xl">+</span></Link></li>
//                                 <li><Link href="#" className="flex items-center gap-1">Collections <span className="block md:hidden text-2xl">+</span></Link></li>
//                                 <li><Link href="#" className="flex items-center gap-1">Card <span className="block md:hidden text-2xl">+</span></Link></li>
//                                 <li><Link href="#" className="flex items-center gap-1">Insurance <span className="block md:hidden text-2xl">+</span></Link></li>
//                                 <li><Link href="#">Loans</Link></li>
//                                 <li><Link href="#">Utility Payments</Link></li>
//                                 <li><Link href="#">Digi Kendra</Link></li>
//                                 <li><Link href="#" className="flex items-center gap-1">Verification <span className="block md:hidden text-2xl">+</span></Link></li>
//                             </ul>
//                         </div>

//                         {/* Solutions */}
//                         <div>
//                             <h3 className="text-white font-semibold mb-4">Solutions</h3>
//                             <ul className="space-y-2 text-sm">
//                                 <li><Link href="#">E-commerce</Link></li>
//                                 <li><Link href="#">Logistics</Link></li>
//                                 <li><Link href="#">Insurance</Link></li>
//                                 <li><Link href="#">Lending</Link></li>
//                                 <li><Link href="#">Marketplace</Link></li>
//                                 <li><Link href="#">Education</Link></li>
//                                 <li><Link href="#">FMCG</Link></li>
//                                 <li><Link href="#">Healthcare</Link></li>
//                             </ul>
//                         </div>

//                         {/* Company */}
//                         <div>
//                             <h3 className="text-white font-semibold mb-4">Company</h3>
//                             <ul className="space-y-2 text-sm">
//                                 <li><Link href="#">About Us</Link></li>
//                                 <li><Link href="#">Our Blog</Link></li>
//                                 <li className="flex items-center gap-2">
//                                 <Link href="#">Careers</Link>
//                                 <span className="bg-blue-900 text-white text-xs px-2 py-1 rounded-full">Hiring!</span>
//                                 </li>
//                                 <li><Link href="#">Contact Us</Link></li>
//                             </ul>
//                         </div>

//                         {/* Resources */}
//                         <div>
//                             <h3 className="text-white font-semibold mb-4">Resources</h3>
//                             <ul className="space-y-2 text-sm">
//                                 <li><Link href="#">Financial Calculators</Link></li>
//                                 <li><Link href="#">Disclosures</Link></li>
//                                 <li><Link href="#">Policy Center</Link></li>
//                             </ul>
//                         </div>

//                     </div>
//                 </div>
//             </section>


//             <footer className="bg-[#0f0f12] text-gray-300 text-sm">
//                 <div className="max-w-7xl mx-auto px-6 py-10 border-t border-gray-800">
//                     {/* Social Icons */}
//                     <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
//                         <div className="flex items-center gap-5">
//                             <span className=" text-[14px]">Follow us On</span>
//                             <a href="#" className="p-2 rounded bg-gray-800 hover:bg-gray-600 transition">
//                             <FaLinkedin className="w-5 h-5" />
//                             </a>
//                             <a href="#" className="p-2 rounded bg-gray-800 hover:bg-gray-600 transition">
//                             <FaFacebook className="w-5 h-5" />
//                             </a>
//                             <a href="#" className="p-2 rounded bg-gray-800 hover:bg-gray-600 transition">
//                             <FaXTwitter className="w-5 h-5" />
//                             </a>
//                             <a href="#" className="p-2 rounded bg-gray-800 hover:bg-gray-600 transition">
//                             <FaYoutube className="w-5 h-5" />
//                             </a>
//                         </div>

//                         <div className="text-white flex items-center gap-2">
//                             Crafted in Bharat with <span className="text-pink-500">❤</span>
//                         </div>
//                     </div>

//                     {/* Bottom Text */}
//                     <div className="space-y-3 text-gray-400 text-xs mt-8">
//                         <p className="text-2xl text-[14px] ">© 2025 Instantpay India Limited</p>
//                         <div className="text-xl text-[12px]">
//                             <p>
//                                 Instantpay is not a bank but a technology platform for digital financial services, 
//                                 advisory in partnership with RBI licensed Banks and IRDAI licensed Insurers. 
//                                 All funds in the customer&apos;s bank account are insured as per limits under the RBI&apos;s deposit insurance scheme.
//                             </p>
//                             <p>
//                                 Corporate Identity Number: U64200DL2010PLC206587 | IRDAI Corporate Agency Registration Number: CA0686
//                             </p>
//                             <p>
//                                 Never share your password, card number, expiry date, CVV, PIN, OTP or other confidential information 
//                                 with anyone even if the person claims to be from Instantpay.
//                             </p>
//                         </div>
                        
//                     </div>
//                 </div>
//             </footer>
//         </>
//     )
// }
