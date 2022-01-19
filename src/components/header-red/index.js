import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import ScrollToTop from '../scrollToTop';

const useStyles = makeStyles((theme) => ({
        appbar: {
                background: 'rgb(175 50 50)',
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
                [theme.breakpoints.down('sm')]: {
                        paddingBlock: '10px'
                }

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

function HeaderRed() {
        const classes = useStyles();

        return (
                <header>
                        <ScrollToTop />
                        <AppBar position="fixed" className={classes.appbar}>
                                <Toolbar className={classes.toolbar}>
                                        <Link className={classes.centerLogo} to="/">
                                                <IconButton className={classes.jobsLogoButton}>
                                                        <Icon className={classes.labelJobs}>
                                                                <img className={classes.logoJobs} src="./assets/logo-jobs.png" alt="Logo Jobs Digital" />
                                                        </Icon>
                                                </IconButton>
                                        </Link>
                                        <div className={classes.showDiv}>
                                                <Link className={classes.linkItem} to="/services">
                                                        <Button
                                                                className={classes.button}
                                                                id="demo-customized-button"
                                                                aria-controls="demo-customized-menu"
                                                                aria-haspopup="true"
                                                                aria-expanded={window.open ? 'true' : undefined}
                                                                disableElevation
                                                        >
                                                                Serviços
                                                        </Button>
                                                </Link>
                                                <Link className={classes.linkItem} to="/portfolio">
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

export default HeaderRed