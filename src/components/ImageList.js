import React, { useEffect, useState } from 'react'
import ImageContainer from './ImageContainer'
import { makeStyles } from '@material-ui/core'

import { collection, getDocs } from "firebase/firestore"; 
import { database } from '../firebase';


const useStyles = makeStyles({
    imageContainer: {
        display: 'flex',
        justifyContent: 'space-around',
    }
})

export default function ImageList() {

    const [imagesUrl, setImagesUrl] = useState([]);

    const classes = useStyles()

    useEffect( () => {

        const fetchData = async () => {

            const querySnapshot = await getDocs(collection(database, "/images"));
            const _imagesUrl = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                _imagesUrl.push(data.imageUrl);
            });

            setImagesUrl(_imagesUrl);
        }

        fetchData();
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
