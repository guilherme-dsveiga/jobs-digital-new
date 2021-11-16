import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ServicesGrid from '../servicesGrid';

const useStyles = makeStyles(() => ({
        container:{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginBlock: '25px',
        },
        title:{
                fontSize: '3rem',
                color: 'rgb(95 6 8)',
                marginBlock: '20px'
        }
}))

function Services() {
        const classes = useStyles();

        return (
                <div className={classes.container}>
                        <h1 className={classes.title}>Our Services</h1>
                        <ServicesGrid />
                </div>
        )
}

export default Services
