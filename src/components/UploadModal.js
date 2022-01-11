import React from 'react'
import { makeStyles } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
    modal: {
        display: (props) => {
            if (props.isModalDisplay) return 'block'
            else return 'none'
        },
        position: "fixed",
        zIndex: 1,
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "auto",
        backgroundColor: "rgba(0,0,0,0.4)",
    },

    modalContainer: {
        backgroundColor: "#fefefe",
        margin: "5% 15%",
        padding: "24px",    
        border: "1px solid #888",
        borderRadius: "4px",
    },

    inputContainer: {
        width: '100%',
        minHeight: '25em',
        border: '1px solid #eaeaea',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem',
        // backgroundImage: 'url("https://picsum.photos/200/300")',
    },

    label: {
        cursor: 'pointer',
        border: '1px solid #747474',
        padding: '8px',
        color: '#747474',
        transition: 'all .4s ease',
        '&:hover': {
            color: 'black',
            borderColor: 'black',
        }
    },

    fileInput: {
        display: 'none',
    },

    btnContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },

    closeBtnContainer: {
        display: 'flex',
        justifyContent: 'end',
    },

    closeBtn: {
        backgroundColor: 'white',
        border: '0',
        color: '#747474',
        cursor: 'pointer',
    },

    submitBtn: {
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

export default function UploadModal(props) {

    const classes = useStyles(props)

    const { toggleModalDisplay, handleImageUpload, uploadImageToFirebase } = props;

    return (
        <div className={classes.modal}>
            <div className={classes.modalContainer}>
                <div className={classes.closeBtnContainer}>
                    <button 
                        className={classes.closeBtn}
                        onClick={ () => { toggleModalDisplay(false) } } >
                            <CloseIcon />
                    </button>
                </div>
                
                <form onSubmit={ (e) => { uploadImageToFirebase(e) } }>
                    <div className={classes.inputContainer}>
                        <label for='single' className={classes.label}>Choose a photo</label>
                        <input type='file' 
                            id='single' 
                            className={classes.fileInput}
                            onChange={ (e) => { handleImageUpload(e) } } />
                    </div>
                    <div className={classes.btnContainer}>
                        <button className={classes.submitBtn}>Submit</button> 
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
