import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridItem from '../gridItem';
import ConversionIcon from '../../assets/conversion-icon.png'
import PpcIcon from '../../assets/ppc-icon.png'
import SearchIcon from '../../assets/search-icon.png'
import SocialIcon from '../../assets/social-icon.png'
import VideoIcon from '../../assets/video-icon.png'
import WebdesignIcon from '../../assets/webdesign-icon.png'

const useStyles = makeStyles(() => ({
        gridContainer: {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                placeItems: 'center',
                paddingInline: '2rem',
                gap: '20px'
        }
}))

function ServicesGrid() {
        const classes = useStyles();

        return (
                <div className={classes.gridContainer}>
                        <GridItem icon={WebdesignIcon} alt="Icone de Web Design" title="Web Design" paragraph="You need more than a beautiful website. You need a complete online strategy, designed to conver. Build your new website with us today." />
                        <GridItem icon={SearchIcon} alt="Icone de Lupa" title="Search Engine Optimization | SEO" paragraph="Improve your local ranking on Google. Show up on results, appear for people who search for businesses and places near their location." />
                        <GridItem icon={PpcIcon} alt="Icone de Ferramentas" title="PPC | Google Advertising" paragraph="Get more calls to your business or visits to your website. Online ads on Google can help you reach more customers today!" />
                        <GridItem icon={SocialIcon} alt="Icone de Pássaro do Twitter" title="Social Media" paragraph="Improve your online presence with social media." />
                        <GridItem icon={ConversionIcon} alt="Icone de Pessoas com engrenagem na frente" title="Conversion Optimization | CRO" paragraph="Increase the percentage of users who perform a desired action on a website" />
                        <GridItem icon={VideoIcon} alt="Icone de Video" title="Video Production" paragraph="Produce your unique video content with us" />
                </div>
        )
}

export default ServicesGrid
