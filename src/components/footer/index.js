import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FooterBg from '../../assets/Footer.png'
import JobsLogo from '../../assets/logo-jobs-red.png'
import Linkedin from '../../assets/icons8-linkedin.svg'
import Instagram from '../../assets/icons8-instagram.svg'
import Facebook from '../../assets/icons8-facebook.svg'
import Behance from '../../assets/icons8-behance.svg'

const useStyles = makeStyles(() => ({
    footerWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    mapWrapper: {
        backgroundImage: `url(${FooterBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgb(238,238,238)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh'
    },
    logoWrapper: {
        maxWidth: '450px'
    },
    w100: {
        width: '100%'
    },
    socialsWrapper:{
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: '2rem'
    },
    socialItem:{
        width: '50px',
        paddingBlock: '2rem'
    }
}))

function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footerWrapper}>
            <div className={classes.mapWrapper} >
                <div>
                    <div className={classes.logoWrapper}>
                        <img className={classes.w100} src={JobsLogo} alt="Logo da empresa Jobs Digital"></img>
                    </div>
                    <div>
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
                    <img className={classes.w100} src={Linkedin} alt="Logo do Linkedin"></img>
                </div>
                <div className={classes.socialItem}>
                    <img className={classes.w100} src={Instagram} alt="Logo do Instagram"></img>
                </div>
                <div className={classes.socialItem}>
                    <img className={classes.w100} src={Facebook} alt="Logo do Facebook"></img>
                </div>
                <div className={classes.socialItem}>
                    <img className={classes.w100} src={Behance} alt="Logo do Behance"></img>
                </div>
            </div>
        </div>
    )
}

export default Footer
