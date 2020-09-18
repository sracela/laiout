import { useRouter } from 'next/router';
import styles from '../components/ImageUploader.module.css'

import { useState, useRef } from 'react';
// import axios from "axios";
import { toDataURL } from '../lib/sendImagesServer';


export function FileUploadContent(props) {
  return (
    <div className={styles.fileUploadContent} >
      <img className={styles.fileUploadImage} src={props.content} />
    </div>
  )
}

export default function ImageUploader() {
  const router = useRouter();
  const [image, setImage] = useState(''); 
  const [file, setFile] = useState(null); 
  const inputFileRef = useRef(null);

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img));
      toDataURL(
        URL.createObjectURL(img),
        function(dataUrl) {
          setFile(dataUrl);
          localStorage.setItem('myData', dataUrl);
        }
      )
    }
  };

  function getCode() {

      nextPage();
  }

  function nextPage() {
    router.push({
      pathname: '/show_code'
    })
  }

  return (

          <div className={styles.fileUpload}>
            {/* <button className={styles.fileUploadBtn} type="button" onClick={() => { inputFileRef.current.click(); }}>Add Image</button> */}

            <div className={styles.imageUploadWrap}>
              <input className={styles.fileUploadInput} type='file' onChange={onImageChange} ref={inputFileRef} />
              {image ? <FileUploadContent content={image} /> :
                <div className={styles.dragText}>
                  <h3>Drag and drop a file </h3>
                </div>}
            </div>
            {image &&
              <div className={styles.card} onClick={getCode}>
                Get your code!
            </div>}
            </div>
  )
}
