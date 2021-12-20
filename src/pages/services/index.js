import React from 'react';
import Header from '../../components/header';
import BannerWithText from '../../components/bannerWithText';
import PlaceholderBg from '../../assets/placeholder-bg.jpg'
import Info from '../../components/info';
import Services from '../../components/services';
import Footer from '../../components/footer';

function Home() {
        return (
                <>
                        <Header />
                        <BannerWithText bgImage={PlaceholderBg}/>
                        <Info />
                        <Services />
                        <Footer />
                </>
        )
}

export default Home;