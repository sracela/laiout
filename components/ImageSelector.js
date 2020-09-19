import styles from '../components/ImageSelector.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router';

// import axios from "axios";
import { toDataURL } from '../lib/sendImagesServer'

const image_path = "/selector"

// export function Loader() {
//     return (<object type="image/svg+xml" data="/images/loading.svg">svg-animation</object>)
// }


export default function ImageSelector() {
  const router = useRouter();
  const [file, setFile] = useState(null); 
  const [imageSelected, setImageSelected] = useState('');
//   const [loading, setLoading] = useState(false);

    const selectImage = (event) => {
        // console.log(event.currentTarget)
        toDataURL(
            event.target.src,
            function(dataUrl) {
              setFile(dataUrl);
              localStorage.setItem('myData', dataUrl);
            }
          )
        setImageSelected(event.target.alt);
    };

    function nextPage() {
        router.push({
          pathname: '/show_code'
        })
    }


    function getCode() {
        // fetchData();
        // setLoading(true);
        nextPage();
    }

    const array = ["imageA", "imageB", "imageC", "imageD", "imageE"];
    
    const images = array.map(image => {
        return (
            <div className={styles.resultCard} key={image} >
                {/* <img className={styles.fileUploadImage} onClick={selectImage} src={"../tmp/input/" + image0} id={image0} /> */}
                <strong> {image} </strong>
                <img className={styles.fileUploadImage}  src={`${image_path}/${image}.png`} alt={image}  onClick={selectImage} />
            </div>
        )

     });

    return (

        // <>
        // { !loading ? ( 
            <div className={styles.fileUpload}>
                <div className={styles.resultsContainer}>{ images }</div>
                { file && <div className={styles.card} onClick={getCode}> Get the code of <strong>{imageSelected}</strong>! </div> }
            </div>    
            // ) : <Loader />}
        //</>
    );
}