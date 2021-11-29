import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

//rgb(230 27 32)

const useStyles = makeStyles(() => ({
        containerLTR: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBlock: '2rem',
        },
        containerRTL: {
                display: 'flex',
                flexDirection: 'row-reverse',
                justifyContent: 'center',
                alignItems: 'center',
                marginBlock: '2rem',
        },
        imgWrapper: {
                flexBasis: '100%'
        },
        imgLTR: {
                width: '100%',
                borderTopLeftRadius: ' 125px',
        },
        imgRTL: {
                width: '100%',
                borderTopRightRadius: ' 125px',
        },
        infoLTR: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexBasis: '100%',
                marginLeft: '2rem'
        },
        infoRTL:{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexBasis: '100%',
                marginRight: '2rem'
        },
        title: {
                color: 'black',
                fontSize: '2em',
                marginTop: '10px',
                fontWeight: '500',
                lineHeight: '120%'
        },
        bold: {
                color: 'black',
                fontSize: '2rem',
                marginBottom: '10px',
                fontWeight: '700',
                lineHeight: '120%'
        },
        p: {
                fontSize: '.9rem',
                fontWeight: '500',
                marginBottom: '20px'
        },
        button: {
                marginRight: 'auto',
                border: 'none',
                backgroundColor: 'rgb(230 27 32)',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '20px'
        },
}))

function GridItem({ img, alt, title, bold, paragraph, buttonText, direction }) {
        const classes = useStyles();

        return (
                <div className={direction === 'ltr' ? classes.containerLTR : classes.containerRTL}>
                        <div className={classes.imgWrapper}>
                                <img className={direction === 'ltr' ? classes.imgLTR : classes.imgRTL} src={img} alt={alt} />
                        </div>
                        <div className={direction === 'ltr' ? classes.infoLTR : classes.infoRTL}>
                                <div className={classes.titleWrapper}>
                                        <h5 className={classes.title}>{title}</h5>
                                        <h5 className={classes.bold}>{bold}</h5>
                                </div>
                                <p className={classes.p}>{paragraph}</p>
                                <button className={classes.button}>{buttonText}</button>
                        </div>

                </div>
        )
}

export default GridItem;
