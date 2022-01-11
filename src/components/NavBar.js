import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

    navbar: {
        height: '5rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',   
        borderBottom: '1px solid #eaeaea',
        margin: '0px 0px 4em',   
    },
    navContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50%',
        width: '100%',
        padding: '0 4rem 0',
    },
    uploadBtn: {
        height: '100%',
        fontFamily: "'Space Mono', monospace",
        padding: '6px 14px 6px',
        border: '1px solid',
        backgroundColor:'white',
        fontWeight: '500',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'all .4s ease',
        '&:hover': {
            border: '1px solid #ffffff',
            color: 'white',
            backgroundColor: 'black',
        }
    }
})

export default function NavBar({ toggleModalDisplay }) {

    const classes = useStyles()

    return (
        <nav className={classes.navbar}>
            <div className={classes.navContainer}>
                <h1>Image repository</h1>
                <button className={classes.uploadBtn} onClick={ () => { toggleModalDisplay(true) } }>
                    UPLOAD
                </button>
            </div>
        </nav>
    )
}
