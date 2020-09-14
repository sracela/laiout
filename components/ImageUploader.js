import { useRouter } from 'next/router';
import styles from '../components/ImageUploader.module.css'

import { useState, useRef } from 'react';
import axios from "axios";


export function FileUploadContent(props) {
  return (
    <div className={styles.fileUploadContent} >
      <img className={styles.fileUploadImage} src={props.content} />
    </div>
  )
}

export function Loader() {
  return (<object type="image/svg+xml" data="/images/loading.svg">svg-animation</object>)
}

export default function ImageUploader() {
  const router = useRouter();
  const [image, setImage] = useState(''); 
  const [file, setFile] = useState(null); 
  const [filename, setFilename] = useState(''); 
  const [loading, setLoading] = useState(false);
  const inputFileRef = useRef(null);

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setFile(img);
      setImage(URL.createObjectURL(img));
      setFilename(img.name)
    }
  };


  const selectImage = (event) => {
    console.log(event.target.src)
    let img = event.target.src;
    setFile(event.target);
    setImage(img);
    setFilename(event.target.id)
    console.log(event.target.id)
  };

  const fetchData = async () => {

    const formData = new FormData();
    formData.append('file', file);

    const result = await axios
      .post("/api/hello", formData, {
        headers: {
      "Content-Type": "multipart/form-data"
    }

      })
      .then(function (response) {
        console.log(response);
        nextPage();
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  function getCode() {
    // var FileSaver = require('file-saver');
    // FileSaver.saveAs(image, "LAIOUTimage.png");

    fetchData();
    setLoading(true);
  }

  function nextPage() {
    router.push({
      pathname: '/compute_layout',
      query: {filename}
    })
  }

  return (
    <>

      {
        !loading ?
          (<div className={styles.fileUpload}>
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

          </div>) : <Loader />

      }

    </>

  )
}
