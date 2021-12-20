import React from 'react';
import Header from '../../components/header';
import BannerWithText from '../../components/bannerWithText';
import PlaceholderBg from '../../assets/placeholder-bg.jpg'
import Info from '../../components/info';
import ServicesHome from '../../components/services-home';
import Footer from '../../components/footer';

function Home() {
        return (
                <>
                        <Header />
                        <BannerWithText bgImage={PlaceholderBg}/>
                        <Info />
                        <ServicesHome />
                        <Footer />
                </>
        )
}

export default Home;