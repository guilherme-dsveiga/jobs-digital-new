import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footerWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    mapWrapper: {
        backgroundImage: `url(./assets/Footer.png')`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgb(238,238,238)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
        [theme.breakpoints.down('sm')]: {
            paddingInline: '2rem'
        }
    },
    logoWrapper: {
        maxWidth: '450px',
    },
    w100: {
        width: '100%',
    },
    hoverScale: {
        width: '100%',
        transform: "scale(0.9)",
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
        '&:hover': {
            transform: "scale(1)"
        }
    },
    socialsWrapper: {
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: '2rem'
    },
    socialItem: {
        width: '50px',
        paddingBlock: '2rem'
    },
    align:{
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    }
}))

function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footerWrapper}>
            <div className={classes.mapWrapper} >
                <div>
                    <div className={classes.logoWrapper}>
                        <img className={classes.w100} src="./assets/logo-jobs-red.png" alt="Logo da empresa Jobs Digital"></img>
                    </div>
                    <div className={classes.align}>
                        <h1>Contact Us</h1>
                        <p>
                            JOBSDigital<br />
                            Lorem Ipsum, 0000 - 00 - Lorem Ipsum<br />
                            Lorem Ipsum 00000000<br />
                            +00 00 000000000
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.socialsWrapper}>
                <div className={classes.socialItem}>
                    <img className={classes.hoverScale} src="./assets/icons8-linkedin.svg" alt="Logo do Linkedin"></img>
                </div>
                <div className={classes.socialItem}>
                    <img className={classes.hoverScale} src="./assets/icons8-instagram.svg" alt="Logo do Instagram"></img>
                </div>
                <div className={classes.socialItem}>
                    <img className={classes.hoverScale} src="./assets/icons8-facebook.svg" alt="Logo do Facebook"></img>
                </div>
                <div className={classes.socialItem}>
                    <img className={classes.hoverScale} src="./assets/icons8-behance.svg" alt="Logo do Behance"></img>
                </div>
            </div>
        </div>
    )
}

export default Footer
