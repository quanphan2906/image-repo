import React, { useEffect, useState } from 'react'
import ImageContainer from './ImageContainer'
import { makeStyles } from '@material-ui/core'

import { collection, onSnapshot, orderBy, query } from "firebase/firestore"; 
import { database } from '../firebase';


const useStyles = makeStyles({
    imageContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 4rem 0',
        rowGap: '16px',
        columnGap: '8px',
        flex: '0 1 33%',
    }
})

export default function ImageList() {

    const [imagesUrl, setImagesUrl] = useState([]);

    const classes = useStyles()

    useEffect( () => {
        
        const q = query(collection(database, "/images"), orderBy("created"))
        const unsubscribe = onSnapshot( q, snapshot =>  {

            const _imagesUrl = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                _imagesUrl.push(data.imageUrl);
            });

            setImagesUrl(_imagesUrl);

        } )

        return () => unsubscribe();
    }, []);

    console.log("imagesUrl", imagesUrl);

    return (
        <div className={classes.imageContainer}>
            {imagesUrl.map((imageUrl) => {

                return (
                    <ImageContainer imageUrl={imageUrl} />
                )

            })}
        </div>
    )
}
