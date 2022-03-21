import React from 'react'
import searchImg from "../assets/img/search.png"

function Header() {
    return (
        <div className='header'>
            <div className="main-header bg-headerBlue text-white text-opacity-80 flex items-center justify-evenly py-4 relative">
                {/* main-left */}
                <div className="main-header--left">
                    <div className="left-inner flex justify-between">
                        <div className="galleries">Galleries</div>
                        <div className="divider-line px-3 text-xl font-cat-light">|</div>
                        <div className="curators">Curators</div>
                        <div className="divider-line px-3 text-xl font-cat-light">|</div>
                        <div className="blog">Blog</div>
                    </div>
                </div>
                {/* main-middle */}
                <div className="main-header--middle px-20 relative top-5">
                    <div className="logo flex">
                        <p className='font-cat-semibold text-3xl text-opacity-100'>SNOW</p><p className='relative font-cat-black text-xl top-2 -left-0.5 text-transparent bg-clip-text bg-gradient-to-br from-blue-800 to-red-900'>AFRICA</p>
                    </div>
                </div>
                {/* main-right */}
                <div className="main-header--right">
                    <div className="right-inner flex justify-between">
                        <div className="galleries">Register</div>
                        <div className="divider-line px-3 text-xl font-cat-light">|</div>
                        <div className="curators">Login</div>
                    </div>
                </div>
            </div>
            {/* Sub header */}
            <div className="sub-header bg-headerGray py-1 px-0.5 flex justify-around items-center">
                {/* sub-left */}
                <div className="sub-header--left flex justify-around text-black text-opacity-60 text-sm">
                    <div className='artists pr-1.5'>ARTISTS</div>
                    <div className='arworks px-3.5'>ARTWORKS</div>
                    <div className='category-a px-3.5'>CATEGORY A</div>
                    <div className='category-b px-3.5'>CATEGORY B</div>
                    <div className='category-c px-3.5'>CATEGORY C</div>
                    <div className='category-d px-3.5'>CATEGORY D</div>
                </div>
                {/* sub-right */}
                <div className="sub-header--right flex justify-between text-black text-opacity-60 text-sm">
                    {/* others */}
                    <div className="others-dropdown cursor-pointer">
                        <label for="others">OTHERS</label>
                        <select name='others' id='others' className='bg-headerGray px-2 outline-none'>
                            <option defaultValue=""></option>
                            <option value="nft">NFT</option>
                        </select>
                    </div>
                    {/* Search bar */}
                    <div className="search-bar pl-5 flex">
                        <div className="search-bar-inner border border-black border-opacity-30">
                            <input type="search" placeholder='Search...' name="search" id="search" className='outline-none bg-headerGray py-1 px-2 text-black text-opacity-60 text-sm placeholder:text-sm placeholder:text-black placeholder:text-opacity-60' />
                        </div>
                        <div className="search-dropdown border border-black border-l-0 border-opacity-30 cursor-pointer">
                            <select name='search-option' id='search-option' className='bg-headerGray px-2 text-sm outline-none'>
                                <option defaultValue="artists">Artists</option>
                                <option value="artworks">Artworks</option>
                            </select>
                        </div>
                        <div className="search-btn border border-black border-l-0 border-opacity-30 flex justify-center items-center px-2">
                            <button className="search"><img src={searchImg} alt="search" className='w-4 h-4 text-white' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header