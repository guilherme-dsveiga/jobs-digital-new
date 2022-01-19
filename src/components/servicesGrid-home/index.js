import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridItemHome from '../gridItem-home';

const useStyles = makeStyles(() => ({
    gridContainer: {
        display: 'grid',
        placeItems: 'center',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        paddingInline: '2rem',
    }
}))

function ServicesGrid() {
    const classes = useStyles();

    return (
        <div className={classes.gridContainer}>
            <GridItemHome img="./assets/webdesign-icon.png" alt="Foto de um notebook em cima de uma mesa" title="Websites and e-commerce" paragraph="You need more than a beautiful website. You need a complete online strategy, designed to conver. Build you new website with us today." />
            <GridItemHome img="./assets/search-icon.png" alt="Icone de Lupa" title="Search Engine Optimization | SEO" paragraph="Improve your local ranking on Google. Show up on results appear for people who search for businesses and places near their location" />
            <GridItemHome img="./assets/ppc-icon.png" alt="Icone de Ferramentas" title="PPC | Google Advertising" paragraph="Get more calls to your business or visits to your website. Onlines ads on Google can help you reach more customers today!" />
            <GridItemHome img="./assets/social-icon.png" alt="Icone de Pássaro do Twitter" title="Social Media" paragraph="Improve you onlines presence with social media." />
            <GridItemHome img="./assets/conversion-icon.png" alt="Icone de Pessoas com engrenagem na frente" title="Conversion Optimization | CRO" paragraph="Increase the percentage of users who perform a desired action on a website." />
            <GridItemHome img="./assets/video-icon.png" alt="Icone de Video" title="Video Production" paragraph="Produce your unique Video Content with us." />
        </div>
    )
}

export default ServicesGrid
