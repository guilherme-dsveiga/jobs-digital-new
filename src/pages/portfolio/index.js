import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../../components/footer';
import HeaderRed from '../../components/header-red';
import PortfolioGrid from '../../components/portfolioGrid';

const useStyles = makeStyles({
    marginHeader: {
        paddingTop: '150px'
    },
    title: {
        textAlign: 'center',
        color: 'rgb(95 6 8)',
        fontSize: '3rem',
        marginBlock: '30px'
    },
    container:{
        width: '75%',
        margin: '0 auto'
    },
    p:{
        fontWeight: '500',
        textAlign: 'center'
    }
})

const Portfolio = () => {
    const classes = useStyles();

    return (
        <div>
            <HeaderRed />
            <div className={classes.marginHeader}>
                <h1 className={classes.title}>Our Portfolio</h1>
                <div className={classes.container}>
                    <p className={classes.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <PortfolioGrid />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Portfolio;
