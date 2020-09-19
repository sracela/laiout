import styles from '../components/ImageSelectorCarrousel.module.css'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router';
// import { classNames } from 'classnames';

// import axios from "axios";
import { toDataURL } from '../lib/sendImagesServer'

const image_path = "/selector"

// export function Loader() {
//     return (<object type="image/svg+xml" data="/images/loading.svg">svg-animation</object>)
// }


export default function ImageSelectorCarrousel() {
    const router = useRouter();
    const [file, setFile] = useState(null); 
    const [imageSelected, setImageSelected] = useState('');
    const [slideIndex, setSlideIndex] = useState(1); 


    const selectImage = (event) => {
        // if (event.target.tagName === "H1"){
        //     console.log(event.target.parentNode.nextElementSibling.src)
        // }else{
        //     console.log(event.target.tagName)
        // }
        
        toDataURL(
            event.target.parentNode.nextElementSibling.src,
            function(dataUrl) {
              setFile(dataUrl);
              localStorage.setItem('myData', dataUrl);
            }
          )
        setImageSelected(event.target.parentNode.nextElementSibling.alt);
    };

    // , styles.fade

    const array = ["imageA", "imageB", "imageC", "imageD", "imageE", "imageF"];
    const images = array.map((image, index) => {
        return (
            <div className={`${styles.fade} ${(slideIndex - 1) === index ? styles.displayCards : styles.mySlides}`} key={index}>
                { file ? <div className={styles.card}><h1 className={styles.title} onClick={getCode}>Let's go for code!</h1></div> :
                <div className={styles.card}><h1 className={styles.title} onClick={selectImage}>Select this image!</h1></div>}
                
                <img className={styles.fileUploadImage} src={`${image_path}/${image}.png`} alt={image} />
            </div>
        )

     });
    
     const dots = array.map((dot, index) => {
        return (
            <span className={`${styles.dot} ${(slideIndex - 1) === index && styles.active}`} onClick={() => setSlideIndex(index+1)} key={index}></span>
        )

     });


    useEffect(() => {
        // var slides = document.getElementsByClassName("mySlides");
        // var dots = document.getElementsByClassName("dot");
        // console.log(slideIndex)
        setFile(null)
        if (slideIndex > images.length) {setSlideIndex(1)}
        if (slideIndex < 1) {setSlideIndex(images.length)}
    },[slideIndex]);



    function nextPage() {
        router.push({
          pathname: '/show_code'
        })
    }


    function getCode() {
        nextPage();
    }

    return (

        // <>
        // { !loading ? ( 
            // <div className={styles.fileUpload}>
            <div>

                <div className={styles.slideshowContainer}>
                    { images }
                    <a className={styles.prev} onClick={ () => setSlideIndex(slideIndex - 1)}>&#10094;</a>
                    <a className={styles.next} onClick={() => setSlideIndex(slideIndex + 1)}>&#10095;</a>
                </div>
                <div className={styles.anotherDiv}>
                    { dots }
                </div>

            </div>    
            // ) : <Loader />}
        //</>
    );
}
