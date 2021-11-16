import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import JobsDigital from '../../assets/jobsdigital.png';

const useStyles = makeStyles(() => ({
        container: {
                marginTop: '-7px',
                display: 'flex',
                background: 'rgb(230 27 32)',
                justifyContent: 'center',
                alignItems: 'center'
        },
        left: {
                display: 'flex',
                flexDirection: 'column',
                flexBasis: '60%',
                paddingBlock: '100px',
                justifyContent: 'center',
                color: '#fff',
                '& div > p': {
                        fontSize: '1.3rem'
                }
        },
        right: {
                display: 'flex',
                flexDirection: 'column',
                background: 'rgb(95 6 8)',
                padding: '100px 65px 100px 65px',
                marginLeft: '65px',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                '& div': {
                        paddingBlock: '20px',
                        paddingInline: '5px'
                },
                '& div:first-child': {
                        borderBottom: '4px solid #fff'
                },
                '& div > h2': {
                        textAlign: 'center',
                        fontSize: '2rem'
                },
                '& div > p': {
                        textAlign: 'center',
                        fontSize: '1.3rem'
                }
        },
        w100: {
                width: '275px',
                marginBottom: '20px'
        }

}))

function Info() {
        const classes = useStyles();

        return (
                <div className={classes.container}>
                        <div className={classes.left}>
                                <div>
                                        <img className={classes.w100} src={JobsDigital} alt="Logo Jobs Digital"></img>
                                </div>
                                <div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum quis urna vel varius. Nam suscipit convallis magna, in rhoncus ex ornare eu. Donec vitae nisi massa. Duis sed quam id odio bibendum euismod.</p>
                                </div>
                        </div>
                        <div className={classes.right}>
                                <div>
                                        <h2>Lorem Ipsum</h2>
                                        <p>dolor sit amet,<br />consec adipiscing</p>
                                </div>
                                <div>
                                        <h2>Lorem Ipsum</h2>
                                        <p>dolor sit amet,<br />consec adipiscing</p>
                                </div>
                        </div>
                </div>
        )
}

export default Info
