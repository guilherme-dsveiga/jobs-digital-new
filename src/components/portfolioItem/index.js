import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    portItem: {
        borderRadius: '15px',
        marginBottom: '20px',
        paddingInline: '10px'
    },
    wfull:{
        width: '100%'
    }
})

const PortfolioItem = ({ picture, alt }) => {
    const classes = useStyles();

    return (
        <li className={classes.portItem}>
            <img className={classes.wfull} src={picture} alt={alt} />
        </li>
    );
}

export default PortfolioItem;
