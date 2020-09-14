import styles from '../components/ImageSelector.module.css'
import { useState } from 'react'

const image_path = "/selector"


export default function ImageSelector() {


  const [file, setFile] = useState(null); 
  const [imageSelected, setImageSelected] = useState('');

    const selectImage = (event) => {
        console.log(event.target)
        let img = event.target;
        setFile(img);
        setImageSelected(event.target.alt)
    };

    function getCode() {
        console.log("getcode");
        // fetchData();
        // setLoading(true);
    }

    const array = ["imageA", "imageB", "imageC", "imageD", "imageE"];
    
    const images = array.map(image => {
        return (
            <div className={styles.resultCard} >
                {/* <img className={styles.fileUploadImage} onClick={selectImage} src={"../tmp/input/" + image0} id={image0} /> */}
                <p> {image} </p>
                <img className={styles.fileUploadImage} key={image} src={`${image_path}/${image}.png`} alt={image}  onClick={selectImage} />
            </div>
        )

     });

    return (
        
        <>
            <div className={styles.resultsContainer}>
                { images }
            </div>
            {file &&
              <div className={styles.card} onClick={getCode}>
                Get the code of <strong>{imageSelected}</strong>!
            </div>}
        </>
    );
}