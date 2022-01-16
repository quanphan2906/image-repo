import { makeStyles } from '@material-ui/core'
import React from 'react'
import Button from './Button'
import { signInWithGoogle } from '../api/auth'

const useStyles = makeStyles({

    authFormContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },

    authForm: {
        width: '30%',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    },

    formTitleContainer: {
        textAlign: 'center',
    },

    oauthBtnContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: '2rem 0 1rem',
    },
})

export default function Auth() {

    const classes = useStyles();

    return (
        <div className={classes.authFormContainer}>
            <div className={classes.authForm}>
                <div className={classes.formTitleContainer}>
                    <h2> Login </h2>
                </div>
                <div className={classes.oauthBtnContainer}>
                    <Button text="Login with Google" onClick={signInWithGoogle} />
                </div>
            </div>
        </div>
    )
}
