import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

function Home() {
    return (
        <div className='home font-cat-regular'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Home