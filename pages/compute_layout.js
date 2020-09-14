import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/ComputeLayout.module.css'
import { FileUploadContent } from '../components/ImageUploader'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react';

import axios from "axios";


export default function ComputeLayout() {
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);
  const guiRef = useRef(null);
  const dir = 'tmp/input/'

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

  const router = useRouter()
  // const { query } = router
  const filename = dir + router.query.filename


  const [data, setData] = useState('');


useEffect(() => {
  async function fetchData() {
    console.log(router.query.filename.split('.')[0])
    const response = await axios
   .post("/api/upload", {
    
     filename: router.query.filename.split('.')[0]
    
  }, {
        //      headers: {
        //    "Content-Type": "multipart/form-data"
        //  }
   })
   .then(function(response) {
     console.log(response.data);
     setData(response.data);
   })
   .catch(function(error) {
     console.log(error);
   });
   };
   
  fetchData();
  
}, []);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.grid}>
        <h1 className={styles.title}>Here is your code !</h1>
        <div className={styles.resultsContainer}>
            <div className={styles.resultCard}>
                Image
                <FileUploadContent content={filename}/> 
            </div>
            <div className={styles.resultCard}>
              DSL
              <pre><p className={styles.code} ref={guiRef}>{data.gui} </p></pre>
              {/* hey, if the code does not appear, reload page */}
            </div>
            <div className={styles.resultCard}  onClick={copyToClipboard}>
             Code {!copySuccess ? <div className={styles.vibrate}>Click to copy!</div> : <span> - Copied!</span>}
              <pre className={styles.code} ref={textAreaRef}>{data.xml}</pre>
            </div>
        </div>

      </section>
    </Layout>
  )
}