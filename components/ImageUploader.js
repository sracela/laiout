import Link from 'next/link'
import styles from '../components/ImageUploader.module.css'
import { useState, useRef } from 'react'

export default function ImageUploader() {
    const [image, setImage] = useState('');
    const inputFileRef = useRef(null);
    
    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          setImage(URL.createObjectURL(img))
        }
      };

 return (
     <div className={styles.fileUpload}>
        <button className={styles.fileUploadBtn} type="button" onClick={() => {inputFileRef.current.click();}}>Add Image</button>
        <div className={styles.imageUploadWrap}>
            <input className={styles.fileUploadInput} type='file' onChange={onImageChange} ref={inputFileRef} />
            {image ? <div className={styles.fileUploadContent} >
            <img className={styles.fileUploadImage} src={image} />
         </div> :
         <div className={styles.dragText}>
                <h3>Drag and drop a file </h3>
                <h3>or</h3> 
                <h3>select add Image</h3>
            </div>}

         </div>
         {image && <Link href="/compute_layout" >
                <div className={styles.card}>
                    Get your code!
                </div>
            </Link>}
     </div>
 )
}
