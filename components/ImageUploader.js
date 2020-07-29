import { useRouter } from 'next/router';
import styles from '../components/ImageUploader.module.css'
import { useState, useRef } from 'react'


export function FileUploadContent( props ){
    return(
        <div className={styles.fileUploadContent} >
            <img className={styles.fileUploadImage} src={props.content} />
         </div> 
    )
}

export default function ImageUploader() {
    const router = useRouter();
    const [image, setImage] = useState('');
    const inputFileRef = useRef(null);
    
    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          setImage(URL.createObjectURL(img))
        }
      };
    
    const getCode = () => {
        router.push({
            pathname: '/compute_layout',
            query: { image: image }
          })
    }

 return (
     <div className={styles.fileUpload}>
        <button className={styles.fileUploadBtn} type="button" onClick={() => {inputFileRef.current.click();}}>Add Image</button>
        <div className={styles.imageUploadWrap}>
            <input className={styles.fileUploadInput} type='file' onChange={onImageChange} ref={inputFileRef} />
            {image ? <FileUploadContent content={image}/> :
         <div className={styles.dragText}>
                <h3>Drag and drop a file </h3>
                <h3>or</h3> 
                <h3>select add Image</h3>
            </div>}

         </div>
         {image && 
            <div className={styles.card} onClick={getCode}>
                Get your code!
            </div>}
        
     </div>
 )
}
