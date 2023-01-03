import React from "react";
import styles from './HomeCard.module.css';


const LeftImage = props =>{
    const arr = props.text.split(" ");
    return(
        <div className={styles["left-img-container"]}>
            <div className={styles["left-img"]}>
                <img id="imgSvg" src={props.img} alt="X" height="500" width="500" />
            </div>
            <div className={styles["left-text"]}>
                {arr.map(data =>{ return <p>{data}</p>})}
            </div>
        </div>
    );
}
const RightImage = props =>{
    const arr = props.text.split(" ");
    return(
        <div className={styles["right-img-container"]}>
            <div className={styles["left-img"]}>
                <img id="imgSvg" src={props.img} alt="X" height="500" width="500" />
            </div>
            <div className={styles["left-text"]}>
                {arr.map(data =>{ return <p>{data}</p>})}
            </div>
        </div>
    );
}

export const HomeCard = props => {

    const {isImageLeftAligned, img, text} = props;



   return(
       <React.Fragment>
            {isImageLeftAligned ? <LeftImage img={img} text={text}/> : <RightImage img={img} text={text}/>}
       </React.Fragment>
   );
}