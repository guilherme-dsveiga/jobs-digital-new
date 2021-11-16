import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
        container:{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
        },
        iconWrapper:{
                maxWidth: '130px'
        },
        icon: {
                width: '100%'
        },
        title: {
                color: 'rgb(230 27 32)',
                fontSize: '1.2rem',
                marginBlock: '10px',
                textAlign: 'center'
        },
        p:{
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: '500'
        }
}))

function GridItem({icon, alt, title, paragraph}) {
        const classes = useStyles();

        return (
                <div className={classes.container}>
                        <div className={classes.iconWrapper}>
                                <img className={classes.icon} src={icon} alt={alt} />
                        </div>
                        <h5 className={classes.title}>{title}</h5>
                        <p className={classes.p}>{paragraph}</p>
                </div>
        )
}

export default GridItem
