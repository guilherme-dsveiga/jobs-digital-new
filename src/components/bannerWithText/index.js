import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
        img100: {
                width: '100%',
                position: 'relative',
                maxHeight: '100vh',
                objectFit: 'cover',
                objectPosition: 'center center'
        },
        backgroundWrapper: {
                position: 'relative',
        },
        insideText: {
                position: 'absolute',
                bottom: '10%',
                left: '65px',
                color: '#fff',
        },
        title: {
                marginBottom: '10px',
                '& h1': {
                        fontSize: '2.5rem',
                        lineHeight: '100%'
                },
        },
        paragraph: {
                '& p': {
                        fontSize: '1.125rem',
                        fontWeight: 'bold'
                }
        },
}))

function BannerWithText({bgImage}) {
        const classes = useStyles();

        return (
                <div className={classes.backgroundWrapper}>
                        <img className={classes.img100} src={bgImage} alt="Placeholder" />
                        <div className={classes.insideText}>
                                <div className={classes.title}>
                                        <h1>LOREM IPSUM DOLOR SIT </h1>
                                        <h1>AMET, CONSECTETUR</h1>
                                </div>
                                <div className={classes.paragraph}>
                                        <p>SED DO EIUSMOD TEMPOR INCIDIDUNT UT</p>
                                        <p>LABORE ET DOLORE MAGNA</p>
                                </div>
                        </div>
                </div>
        )
}

export default BannerWithText
