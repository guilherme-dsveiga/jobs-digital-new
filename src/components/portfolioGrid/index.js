import { makeStyles } from '@material-ui/core';
import React from 'react';
import PortfolioItem from '../portfolioItem';

const useStyles = makeStyles({
    ul: {
        listStyleType: 'none',
        columns: '2',
        marginBlock: '35px'
    }
})

const PortfolioGrid = () => {
    const classes = useStyles();

    const items = {
        0: {
            picture: './assets/portfolio/websites.png',
            alt: 'Banner de websites',
        },
        1: {
            picture: './assets/portfolio/ratna.png',
            alt: 'Banner da empresa Ratna',
        },
        2: {
            picture: './assets/portfolio/silver.png',
            alt: 'Banner do produto Silver Clean 800',
        },
        3: {
            picture: './assets/portfolio/kaiky.png',
            alt: 'Banner do jogador de futebol Kaiky',
        },
        4: {
            picture: './assets/portfolio/sucafina.png',
            alt: 'Banner da empresa Sucafina'
        },
        5: {
            picture: './assets/portfolio/casa.png',
            alt: 'Banner da casa de massas Milão',
        },
        6: {
            picture: './assets/portfolio/maxx.png',
            alt: 'Banner da empresa Maxx Beer',
        },
        7: {
            picture: './assets/portfolio/baterias.png',
            alt: 'Banner da empresa Baterias Litoral',
        },
        8: {
            picture: './assets/portfolio/videos.png',
            alt: 'Banner de videos',
        },
        9: {
            picture: './assets/portfolio/stetic.png',
            alt: 'Banner da revista Stetic Center',
        },
        10: {
            picture: './assets/portfolio/filipe.png',
            alt: 'Banner do candidato Filipe Rezende',
        },
        11: {
            picture: './assets/portfolio/reel.png',
            alt: 'Banner sobre o Video Reel 2020',
        },
        12: {
            picture: './assets/portfolio/niix.png',
            alt: 'Banner da empresa Niix',
        },
        13: {
            picture: './assets/portfolio/sushi.png',
            alt: 'Banner do restaurante Sushi Garden',
        },
        14:
        {
            picture: './assets/portfolio/gtn.png',
            alt: 'Banner da empresa GT Nutrition',
        },
    };

    return (
        <ul className={classes.ul}>
            {Object.keys(items).map((obj, key) => (
                <div key={key}>
                    <PortfolioItem picture={items[obj].picture} alt={items[obj].alt} />
                </div>
            ))}
        </ul>
    );
}

export default PortfolioGrid;
