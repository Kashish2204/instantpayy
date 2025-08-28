import { FaLinkedin, FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
// import CursorGlow from "./cursoreffect";


export default function footer () {
    return (
        <>
            
            
            
            <section className="bg-[#0f0f12] text-gray-300 py-15">

                <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-5 lg:gap-20">
                    <div className="w-full  md:w-1/3  space-y-4">
                    {/* Logo (replace /instantpay-logo.svg with your logo) */}
                        <div className="flex items-start gap-2">
                            <Image
                            src="/images/footer_logo.svg"
                            alt="Instantpay Logo"
                            width={30}
                            height={30}
                            />
                            <span className="text-white font-semibold text-xl">instantpay</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Instantpay is a modern digital banking and identity verification
                            platform for businesses. It offers a unified dashboard for managing
                            accounts, payments, and more, along with secure APIs to automate
                            workflows.
                        </p>
                    </div>

                    <div className="w-full lg:w-2/3 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
                        {/* Products */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Products</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="#" className="flex items-center gap-1">Payouts <span className="block md:hidden text-2xl">+</span></Link></li>
                                <li><Link href="#" className="flex items-center gap-1">Collections <span className="block md:hidden text-2xl">+</span></Link></li>
                                <li><Link href="#" className="flex items-center gap-1">Card <span className="block md:hidden text-2xl">+</span></Link></li>
                                <li><Link href="#" className="flex items-center gap-1">Insurance <span className="block md:hidden text-2xl">+</span></Link></li>
                                <li><Link href="#">Loans</Link></li>
                                <li><Link href="#">Utility Payments</Link></li>
                                <li><Link href="#">Digi Kendra</Link></li>
                                <li><Link href="#" className="flex items-center gap-1">Verification <span className="block md:hidden text-2xl">+</span></Link></li>
                            </ul>
                        </div>

                        {/* Solutions */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Solutions</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="#">E-commerce</Link></li>
                                <li><Link href="#">Logistics</Link></li>
                                <li><Link href="#">Insurance</Link></li>
                                <li><Link href="#">Lending</Link></li>
                                <li><Link href="#">Marketplace</Link></li>
                                <li><Link href="#">Education</Link></li>
                                <li><Link href="#">FMCG</Link></li>
                                <li><Link href="#">Healthcare</Link></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="#">About Us</Link></li>
                                <li><Link href="#">Our Blog</Link></li>
                                <li className="flex items-center gap-2">
                                <Link href="#">Careers</Link>
                                <span className="bg-blue-900 text-white text-xs px-2 py-1 rounded-full">Hiring!</span>
                                </li>
                                <li><Link href="#">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="#">Financial Calculators</Link></li>
                                <li><Link href="#">Disclosures</Link></li>
                                <li><Link href="#">Policy Center</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>


            <footer className="bg-[#0f0f12] text-gray-300 text-sm">
                <div className="max-w-7xl mx-auto px-6 py-10 border-t border-gray-800">
                    {/* Social Icons */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex items-center gap-5">
                            <span className=" text-[14px]">Follow us On</span>
                            <a href="#" className="p-2 rounded bg-gray-800 hover:bg-gray-600 transition">
                            <FaLinkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded bg-gray-800 hover:bg-gray-600 transition">
                            <FaFacebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded bg-gray-800 hover:bg-gray-600 transition">
                            <FaXTwitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded bg-gray-800 hover:bg-gray-600 transition">
                            <FaYoutube className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="text-white flex items-center gap-2">
                            Crafted in Bharat with <span className="text-pink-500">❤</span>
                        </div>
                    </div>

                    {/* Bottom Text */}
                    <div className="space-y-3 text-gray-400 text-xs mt-8">
                        <p className="text-2xl text-[14px] ">© 2025 Instantpay India Limited</p>
                        <div className="text-xl text-[12px]">
                            <p>
                                Instantpay is not a bank but a technology platform for digital financial services, 
                                advisory in partnership with RBI licensed Banks and IRDAI licensed Insurers. 
                                All funds in the customer&apos;s bank account are insured as per limits under the RBI&apos;s deposit insurance scheme.
                            </p>
                            <p>
                                Corporate Identity Number: U64200DL2010PLC206587 | IRDAI Corporate Agency Registration Number: CA0686
                            </p>
                            <p>
                                Never share your password, card number, expiry date, CVV, PIN, OTP or other confidential information 
                                with anyone even if the person claims to be from Instantpay.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </footer>
        </>
    )
}

