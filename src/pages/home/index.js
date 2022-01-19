import React from 'react';
import Header from '../../components/header';
import BannerWithText from '../../components/bannerWithText';
import Info from '../../components/info';
import ServicesHome from '../../components/services-home';
import Footer from '../../components/footer';

function Home() {
        return (
                <>
                        <Header />
                        <BannerWithText bgImage="./assets/placeholder-bg.jpg"/>
                        <Info />
                        <ServicesHome />
                        <Footer />
                </>
        )
}

export default Home;