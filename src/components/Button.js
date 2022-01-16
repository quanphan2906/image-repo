import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({

    btn: {
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

})

export default function Button( { text, onClick } ) {

    const classes = useStyles();

    return (
        <button className={classes.btn} onClick={onClick}>
            { text }
        </button>
    )
}
