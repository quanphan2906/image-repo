import React, { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'

import { getImages } from "../api/images"

import { AuthContext } from "../context/AuthProvider"


const useStyles = makeStyles({

    imageContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 4rem 0',
        rowGap: '16px',
        columnGap: '8px',
        flex: '0 1 33%',
    },
    
    imgContainer: {
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        width: '32.33%',
        maxHeight: '16rem',
    },

    img: {
        borderRadius: "4px",
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    },

})

export default function ImageList() {

    const classes = useStyles();

    const [imagesURL, setImagesURL] = useState([]);
    const { userDetails } = useContext(AuthContext);

    useEffect(() => {

        let unsubscribe = () => {};
        
        if ( userDetails ) {
            const { uid } = userDetails;
            unsubscribe = getImages(uid, setImagesURL);
        }

        return unsubscribe;
    }, [userDetails]);

    return (
        <div className={classes.imageContainer}>
            {imagesURL.map((imageURL) => {

                return (
                    <div className={classes.imgContainer}>
                        <img className={classes.img} src={imageURL} />
                    </div>
                )

            })}
        </div>
    )
}
