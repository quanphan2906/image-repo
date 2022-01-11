import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({

    imgContainer: {
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        width: '300px',
        height: '200px',
    },

    img: {
        borderRadius: "4px",
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    }
    
})

export default function ImageContainer({ imageUrl }) {

    const classes = useStyles()

    return (
        <div className={classes.imgContainer}>
            <img className={classes.img} src={imageUrl} />
        </div>
    )
}
