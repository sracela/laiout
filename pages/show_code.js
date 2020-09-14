import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/ComputeLayout.module.css'
import { FileUploadContent } from '../components/ImageUploader'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react';

import axios from "axios";

export function Loader() {
  return (<object type="image/svg+xml" data="/images/loading.svg">svg-animation</object>)
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

  
  const file = localStorage.getItem('myData');
  const image = JSON.stringify({image: file});
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);


useEffect(() => {
  async function fetchData(){

     const result = await axios
       .post("/api/first", image, {
         headers: {
       "Content-Type": 'application/json'
        }    
       })
       .then(function (response) {
         console.log(response);
         setLoading(false);
         setData(response)
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
                <FileUploadContent content={file}/> 
            </div>
            <div className={styles.resultCard}>
              DSL
              {/* <pre><p className={styles.code} ref={guiRef}>{data.gui} </p></pre> */}
            </div>
            <div className={styles.resultCard}  onClick={copyToClipboard}>
             Code {!copySuccess ? <div className={styles.vibrate}>Click to copy!</div> : <span> - Copied!</span>}
              {/* <pre className={styles.code} ref={textAreaRef}>{data.xml}</pre> */}
            </div>
        </div></>) :  <Loader /> }

      </section>
    </Layout>
  )
}