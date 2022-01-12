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
    },

    inputContainer: {
        border: '1px solid #eaeaea',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    label: {
        cursor: 'pointer',
        border: '1px solid black',
        padding: '8px',
        color: 'black',
        transition: 'all .4s ease',
        '&:hover': {
            border: '1px solid #ffffff',
            color: 'white',
            backgroundColor: 'black',
        }
    },

    fileInput: {
        display: 'none',
    },
})

export default function NavBar({ uploadImageToFirebase }) {

    const classes = useStyles()

    return (
        <nav className={classes.navbar}>
            <div className={classes.navContainer}>
                <div>
                    <h1>Image repository</h1>
                </div>
                <div className={classes.inputContainer}>
                        <label for='single' className={classes.label}>Choose a photo</label>
                        <input type='file' 
                            id='single'
                            multiple 
                            className={classes.fileInput}
                            onChange={ (e) => { uploadImageToFirebase(e) } } />
                </div>
            </div>
        </nav>
    )
}
