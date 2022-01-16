import React, { useContext } from 'react';

import { uploadImage } from '../api/images';
import { signOut } from "../api/auth"

import { makeStyles } from '@material-ui/core';
import Button from './Button';
import { AuthContext } from '../context/AuthProvider';

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

    menuContainer: {
        display: 'flex',
        rowGap: '16px',
        width: '20%',
        justifyContent: 'space-around',
    },

    inputContainer: {
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

    avatar: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        objectFit: 'cover',
        cursor: 'pointer',
        '&:hover': {
            border: '5px solid #eaeaea',
        }
    }
})

export default function NavBar() {

    const classes = useStyles();

    const { userDetails } = useContext(AuthContext);
    console.log("userDetails");
    console.log(userDetails);

    return (
        <nav className={classes.navbar}>
            <div className={classes.navContainer}>
                <div>
                    <h1>Image repository</h1>
                </div>
                <div className={classes.menuContainer}>
                    <div className={classes.inputContainer}>
                            <label htmlFor='upload-image' className={classes.label}> Upload </label>
                            <input type='file' 
                                id='upload-image'
                                multiple
                                className={classes.fileInput}
                                onChange={ (e) => { uploadImage(e, userDetails.uid) } } />
                    </div>
                    <div>
                        {/* <Button text='Sign out' onClick={signOut} /> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}
