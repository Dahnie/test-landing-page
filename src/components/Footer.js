import React from 'react'
import { Link } from "react-router-dom";
import facebook from "../assets/img/facebook.png"
import instagram from "../assets/img/instagram.png"
import twitter from "../assets/img/twitter.png"
import linkedin from "../assets/img/linkedin.png"

function Footer() {
    return (
        <div className="footer bg-footerBgGray py-12 mt-4">
            <div className="footer-inner">

                {/* Footer Upper */}
                <div className="footer-inner-upper grid grid-cols-12">
                    {/* Upper Column 1 */}
                    <div className="footer-upper footer-upper-row-1 text-footerTextGray col-span-3 pl-28">
                        {/* logo */}
                        <div className="logo flex text-footerTextGray">
                            <p className='font-cat-semibold text-3xl text-opacity-100'>SNOW</p><p className='relative font-cat-bold text-xl top-2 -left-1'>AFRICA</p>
                        </div>
                        {/* Social */}
                        <div className="left social-section flex justify-between mt-40">
                            <Link to="#" className="facebook w-8 h-8" >
                                <img src={facebook} alt="facebook" />
                            </Link>
                            <Link to="#" className="twitter w-8 h-8">
                                <img src={twitter} alt="twitter" />
                            </Link>
                            <Link to="#" className="instagram w-8 h-8">
                                <img src={instagram} alt="instagram" />
                            </Link>
                            <Link to="#" className="linkedin w-8 h-8">
                                <img src={linkedin} alt="linkedin" />
                            </Link>
                        </div>
                        {/* Links */}

                    </div>
                    {/* Upper Column 2 */}
                    <div className='footer-upper footer-upper-row-2 text-footerTextGray col-span-9 pl-20'>
                        <div className='flex'>
                            {/* Column 2 */}
                            <div className="column-2 font-cat-medium text-lg">
                                <div className="title font-cat-semibold pb-1">FOR ARTISTS</div>
                                <div className="links text-base">
                                    <div className='link'>
                                        <Link className='footer-link' to="#">Join the Community</Link>
                                    </div>
                                    <div className="link">
                                        <Link className='footer-link' to="#">FAQ</Link>
                                    </div>
                                    <div className="link">
                                        <Link className='footer-link' to="#">Download Seller's Guide</Link>
                                    </div>

                                </div>

                            </div>
                            {/* Column 3 */}
                            <div className="column-3 font-cat-medium text-lg px-10">
                                <div className="title font-cat-semibold pb-1">FOR ART BUYERS</div>
                                <div className="links text-base">
                                    <div className='link'>
                                        <Link className='footer-link' to="#">Buyer FAQ</Link>
                                    </div>
                                    <div className="link">
                                        <Link className='footer-link' to="#">Register</Link>
                                    </div>
                                    <div className="link">
                                        <Link className='footer-link' to="#">Login</Link>
                                    </div>

                                </div>

                            </div>
                            {/* Column 4 */}
                            <div className="column-3 font-cat-medium text-lg pr-10">
                                <div className="title font-cat-semibold pb-1">OUR COMPANY</div>
                                <div className="links text-base">
                                    <div className='link'>
                                        <Link className='footer-link' to="#">About us</Link>
                                    </div>
                                    <div className="link">
                                        <Link className='footer-link' to="#">Contact us</Link>
                                    </div>
                                    <div className="link">
                                        <Link className='footer-link' to="#">Blog</Link>
                                    </div>

                                </div>
                            </div>
                            {/* Column 5 */}
                            <div className="column-3 font-cat-medium text-lg pr-10">
                                <div className="title font-cat-semibold pb-1">LEGALS</div>
                                <div className="links text-base">
                                    <div className='link'>
                                        <Link className='footer-link' to="#">Terms of Service</Link>
                                    </div>
                                    <div className="link">
                                        <Link className='footer-link' to="#">Privacy Policy</Link>
                                    </div>
                                    <div className="link">
                                        <Link className='footer-link' to="#">Copyright Policy</Link>
                                    </div>

                                </div>

                            </div>
                        </div>
                        {/* Newsletter */}
                        <div className="newsletter-subscribe pt-6">
                            <div className="title text-base font-cat-bold">SUBSCRIBE TO OUR NEWSLETTER</div>
                            <div className="subscribe-form flex">
                                <input type="text" className='w-1/2 px-6 py-2 outline-none border border-footerTextGray border-opacity-80 bg-footerBgGray' />
                                <div className="submit-btn text-white px-16 py-4 bg-footerBlue ml-5 font-cat-medium">
                                    <button>SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider line */}
                <div className='h-0.5 w-4/5 ml-28 my-5 bg-footerTextGray opacity-60'></div>


                {/* Footer lower */}
                <div className="footer-inner-lower pl-28 text-footerTextGray flex justify-between pt-2">
                    <div className="copyright"> &copy; 2016 Copyright Snowafrica </div>
                    <div className='h-7 w-7 bg-black opacity-90 mr-40 rounded-full'></div>
                </div>
            </div>
        </div>
    )
}

export default Footer