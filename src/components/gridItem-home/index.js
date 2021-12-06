import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

//rgb(230 27 32)

const useStyles = makeStyles(() => ({
    container: {
        display: 'grid',
        placeItems: 'center',
        marginBottom: '2rem',
    },
    img: {
        maxWidth: '135px'
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    title: {
        color: 'black',
        fontSize: '2em',
        marginTop: '10px',
        fontWeight: '500',
        lineHeight: '120%'
    },
    p: {
        fontSize: '.9rem',
        fontWeight: '500',
        marginTop: '10px'
    },
}))

function GridItem({ img, alt, title, paragraph }) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.imgWrapper}>
                <img className={classes.img} src={img} alt={alt} />
            </div>
            <div className={classes.info}>
                <h5 className={classes.title}>{title}</h5>
                <p className={classes.p}>{paragraph}</p>
            </div>

        </div>
    )
}

export default GridItem;
