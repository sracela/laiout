import styles from '../components/ImageSelector.module.css'

const image_path = "/selector"

export default function ImageSelector() {

    const array = ["imageA", "imageB", "imageC", "imageD", "imageE"];
    
    const images = array.map(image => {
        return (
            <div className={styles.resultCard} >
                {/* <img className={styles.fileUploadImage} onClick={selectImage} src={"../tmp/input/" + image0} id={image0} /> */}
                <img className={styles.fileUploadImage} key={image} src={`${image_path}/${image}.png`} alt={image}  />
            </div>
        )

     });

    return (
        
        <>
            <div className={styles.resultsContainer}>
                { images }
            </div>
        </>
    );
}