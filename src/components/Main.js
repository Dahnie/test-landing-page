import React, { useEffect } from 'react'
import { gsap } from "gsap";
import mainImgOne from "../assets/img/cabinets-wall.jpg"
import subImgTwo from "../assets/img/9936.jpg"
// import subImgThree from "../assets/img/19Z_2011.w020.n001.854B.p15.854.jpg"
import rightArrow from "../assets/img/right-arrow.png"


function Main() {
    useEffect(() => {
        gsap.from(".main", { duration: 0, opacity: 0, css: { visibility: "hidden" } })
    })
    return (
        <div className='main'>
            {/* ROW 1 / SECTION 1 */}
            <div className="main-row row-1 grid grid-cols-12 h-550px 2xl:h-1000px overflow-hidden">
                {/* Large frame */}
                <div className="row-1--left large-frame col-span-8 relative">
                    <img src={mainImgOne} alt="img-one" className='relative z-10 h-550px 2xl:h-1000px ' />
                    {/* Graybackgrround on frame */}
                    <div className="background-on-frame z-20 h-full absolute top-0 w-full bg-black opacity-40">
                    </div>
                    {/* Content on frame */}
                    <div className='content-on-frame z-20 h-full absolute top-0 text-white text-opacity-80 text-4xl font-cat-medium'>
                        {/* Picture navigator dots */}
                        <div className="picture-navigator-btn mt-44 pl-14 text-xs">

                            <div className="circle-1">
                                <input type="radio" name="circle-nav" id="circle-1" className="h-3 w-3 checked:bg-transparent checked:border-white" checked />
                                {/* <label htmlFor="circle-1"></label> */}
                            </div>
                            <div className="circle-2 py-1">
                                <input type="radio" name="circle-nav" id="circle-2" className="h-3 w-3" />
                                {/* <label htmlFor="circle-2"></label> */}
                            </div>
                            <div className="circle-3 pb-1">
                                <input type="radio" name="circle-nav" id="circle-3" className="h-3 w-3" />
                                {/* <label htmlFor="circle-3"></label> */}
                            </div>
                            <div className="circle-4 pb-1">
                                <input type="radio" name="circle-nav" id="circle-4" className="h-3 w-3" />
                                {/* <label htmlFor="circle-4"></label> */}
                            </div>
                            <div className="circle-5 pb-1">
                                <input type="radio" name="circle-nav" id="circle-5" className="h-3 w-3" />
                                {/* <label htmlFor="circle-4"></label> */}
                            </div>

                        </div>
                        {/* CONTENT TEXT */}
                        <div className="content-text mt-10 pl-28">
                            <div className="row py-1">LANDING PAGE</div>
                            <div className="row py-1">HEADING LOREM IPSUM TEXT</div>
                        </div>
                        {/* content btn */}
                        <div className="content-explore-btn mt-5 pl-28">
                            <button className='border-2 border-white border-opacity-80 px-3 py-2 flex'>EXPLORE <span><img src={rightArrow} alt="arrow" className="h-10 px-2" /></span></button>
                        </div>


                    </div>
                </div>

                {/* Small frame*/}
                <div className="row-2--right small-frame col-span-4">
                    {/* top */}
                    <div className="small-frame-top px-2 py-2 flex justify-center items-center relative">
                        <div className="img h-64 w-64 relative">
                            <img src={subImgTwo} alt="img-two" className='h-64 w-64' />
                            {/* Graybackgrround on frame */}
                            <div className="background-on-frame z-20 h-64 w-64 absolute top-0 bg-black opacity-40">
                            </div>
                            {/* Content on frame */}
                            <div className='content-on-frame z-20 h-full absolute top-0 text-white text-opacity-80 w-full font-cat-medium flex justify-center'>
                                <div className="content-text flex flex-col items-center justify-center">
                                    <div className="row text-2xl font-cat-regular">New Arrivals</div>
                                    <div className="content-browse-btn mt-4">
                                        <button className="border-2 border-white border-opacity-80 px-4 py-2 text-base">BROWSE</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* bottom */}
                    <div className="small-frame-top px-2 py-3 bg-headerGray flex justify-center items-center relative">
                        <div className="img h-64 w-64 relative">
                            <img src={subImgTwo} alt="img-two" className='h-64 w-64' />
                            {/* Graybackgrround on frame */}
                            <div className="background-on-frame z-20 h-64 w-64 absolute top-0 bg-black opacity-40">
                            </div>
                            {/* Content on frame */}
                            <div className='content-on-frame z-20 h-full absolute top-0 text-white text-opacity-80 w-full font-cat-medium flex justify-center'>
                                <div className="content-text flex flex-col items-center justify-center">
                                    <div className="row text-2xl font-cat-regular">Want to Sell Art?</div>
                                    <div className="content-browse-btn mt-4">
                                        <button className="border-2 border-white border-opacity-80 px-4 py-2 text-base">BECOME A MERCHANT</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ROW 2 / SECTION 2 */}
            <div className="main-row row-2 mt-10">
                <div className="featured py-8 pl-28">
                    <div className="title text-black text-opacity-90 text-2xl font-cat-semibold pb-4">Featured Galleries</div>
                    <div className="gallery py-5">
                        <div className="image-1 w-72 h-72 bg-black opacity-95"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main