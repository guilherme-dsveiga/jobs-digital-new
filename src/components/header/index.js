import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import JobsDigitalLogo from '../../assets/logo-jobs.png';
import ScrollToTop from '../scrollToTop';

const useStyles = makeStyles((theme) => ({
        appbar: {
                background: 'linear-gradient(0deg, rgba(11,12,94,0) 0%, rgba(0,0,0,0.4864320728291317) 33%, rgba(0,0,0,0.665703781512605) 53%, rgba(0,0,0,0.7805497198879552) 78%)',
                boxShadow: 'none',
                color: 'white',
                paddingInline: '5rem',
                [theme.breakpoints.down('md')]: {
                        paddingInline: '2rem'
                },
                [theme.breakpoints.down('sm')]: {
                        paddingInline: '0',
                }
        },
        appbarBlack: {
                background: '#000',
                boxShadow: 'none',
                color: 'white',
                paddingInline: '5rem',
                [theme.breakpoints.down('md')]: {
                        paddingInline: '2rem'
                },
                [theme.breakpoints.down('sm')]: {
                        paddingInline: '0',
                }
        },
        showDiv: {
                display: 'block',
                [theme.breakpoints.down('sm')]: {
                        display: 'none'
                }
        },
        logoJobs: {
                width: '175px',
        },
        jobsLogoButton: {
                width: '100%',
        },
        labelJobs: {
                height: '100%',
                width: 'auto',
                display: 'block'
        },
        toolbar: {
                justifyContent: 'space-between',
                paddingBlock: theme.spacing(3),

        },
        button: {
                color: 'white',
                textTransform: 'none',
                textDecoration: 'none',
                fontSize: '1.125rem'
        },
        linkItem: {
                textDecoration: 'none',
                paddingBottom: '10px',
                transition: 'all 0.1s 0s ease',
                "&:hover": {
                        borderBottom: 'solid 4px #fff'
                }
        }
}));

function Header() {
        const classes = useStyles();
        const [blackHeader, setBlackHeader] = useState(false);

        useEffect(() => {
                const scrollListener = () => {
                        if (window.scrollY > 400) {
                                setBlackHeader(true);
                        } else {
                                setBlackHeader(false);
                        }
                }

                window.addEventListener('scroll', scrollListener);

                return () => {
                        window.removeEventListener('scroll', scrollListener);
                }
        }, []);

        return (
                <header>
                        <ScrollToTop />
                        <AppBar position="fixed" className={blackHeader ? classes.appbarBlack : classes.appbar}>
                                <Toolbar className={classes.toolbar}>
                                        <Link className={classes.centerLogo} to="/">
                                                <IconButton className={classes.jobsLogoButton}>
                                                        <Icon className={classes.labelJobs}>
                                                                <img className={classes.logoJobs} src={JobsDigitalLogo} alt="Logo Jobs Digital" />
                                                        </Icon>
                                                </IconButton>
                                        </Link>
                                        <div className={classes.showDiv}>
                                                <Link className={classes.linkItem} to="/">
                                                        <Button
                                                                className={classes.button}
                                                                id="demo-customized-button"
                                                                aria-controls="demo-customized-menu"
                                                                aria-haspopup="true"
                                                                aria-expanded={window.open ? 'true' : undefined}
                                                                disableElevation
                                                        >
                                                                Digital Marketing
                                                        </Button>
                                                </Link>
                                                <Link className={classes.linkItem} to="/">
                                                        <Button
                                                                className={classes.button}
                                                                id="demo-customized-button"
                                                                aria-controls="demo-customized-menu"
                                                                aria-haspopup="true"
                                                                aria-expanded={window.open ? 'true' : undefined}
                                                                disableElevation
                                                        >
                                                                Clientes
                                                        </Button>
                                                </Link>
                                                <Link className={classes.linkItem} to="/">
                                                        <Button
                                                                className={classes.button}
                                                                id="demo-customized-button"
                                                                aria-controls="demo-customized-menu"
                                                                aria-haspopup="true"
                                                                aria-expanded={window.open ? 'true' : undefined}
                                                                disableElevation
                                                        >
                                                                Sobre
                                                        </Button>
                                                </Link>
                                                <Link className={classes.linkItem} to="/"><Button className={classes.button}>Blog</Button></Link>
                                                <Link className={classes.linkItem} to="/"><Button className={classes.button}>Contato</Button></Link>

                                        </div >
                                </Toolbar>
                        </AppBar>
                </header>
        )
}

export default Header