import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/ComputeLayout.module.css'
import { FileUploadContent } from '../components/ImageUploader'
import { useState, useEffect, useRef } from 'react';

import axios from "axios";

export function Loader() {
  const [seconds, setSeconds] = useState(0);
  const [paragraph, setParagraph] = useState();

  useEffect(() => {
    if (seconds < 21) {
      setTimeout(() => setSeconds(seconds + 1), 1000);
      switch(true){
        case (seconds > 1 && seconds <= 3):
          setParagraph("Our AI is receiving the image");
          break;
        case (seconds > 3 && seconds <= 6):
          setParagraph("She seems to like it :)");
          break;
        case (seconds > 6 && seconds <= 9):
          setParagraph("Okey, it's taking longer than expected");
          break;
        case (seconds > 9 && seconds <= 12):
          setParagraph("Probably our AI is procrastinating.");
          break;
        case (seconds > 12 && seconds <= 15):
          setParagraph("She wasn't going to get paid anyway");
          break;
        case (seconds > 15 && seconds <= 20):
          setParagraph("Maybe if you go back and try again?");
          break;
        default:
          setParagraph("");
          break;
      }
    }
    else {
      setSeconds(0);
    }
},[seconds]);

  return (

    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <object type="image/svg+xml" data="/images/loading.svg">svg-animation</object></div>  
      <div>
        <p className={styles.description}>{paragraph}</p>
      </div>
    </div>
  )
}

export default function ComputeLayout() {
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);
  const guiRef = useRef(null);

  function copyToClipboard(e) {
    const el = document.createElement('textarea');
    el.value = textAreaRef.current.innerText;
    // console.log(textAreaRef.current)
    // console.log(guiRef.current)
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };

  
  const [data, setData] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);


useEffect(() => {
  const file = localStorage.getItem('myData');
  setImage(file);
  const payload = JSON.stringify({image: file});
  console.log(payload)
  const formData = new FormData();
  formData.append('image', file);

  async function fetchData(){
     const result = await axios
       .post("https://laiout.quarantini-game.com/convert", formData, {
         headers: {
          "Content-Type": "multipart/form-data"
        }    
       })
       .then(function (response) {
         console.log(response);
         setLoading(false);
         setData(response.data)
       })
       .catch(function (error) {
         console.log(error);
       })
   };
   
  fetchData();
  
}, []);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.grid}>
        { !loading ? (<>
        <h1 className={styles.title}>Here is your code !</h1>
        <div className={styles.resultsContainer}>
            <div className={styles.resultCard}>
                Image
                <FileUploadContent content={image}/> 
            </div>
            <div className={styles.resultCard}>
              DSL
              <pre><p className={styles.code} ref={guiRef}>{data.gui} </p></pre>
            </div>
            <div className={styles.resultCard}  onClick={copyToClipboard}>
             Code {!copySuccess ? <div className={styles.vibrate}>Click to copy!</div> : <span> - Copied!</span>}
              <pre className={styles.code} ref={textAreaRef}>{data.xml}</pre>
            </div>
        </div></>) :  <Loader /> }

      </section>
    </Layout>
  )
}