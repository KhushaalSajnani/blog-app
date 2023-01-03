import React from "react";
import styles from './Home.module.css'

import imageOne from '../../Assets/svg-1.svg';
import imageTwo from '../../Assets/svg-2.svg';
import imageThree from '../../Assets/svg-3.svg';

import {HomeCard} from "../UI/HomeCard";

export const Home = props => {

    const dataOne = "POST YOUR OPINION";
    const dataTwo = "EARN";
    const dataThree = "SECURED";

  return(
      <React.Fragment>
          <div className={styles["home-container"]}>
            <HomeCard isImageLeftAligned={true} img={imageOne} text={dataOne} />
            <HomeCard isImageLeftAligned={false} img={imageTwo} text={dataTwo} />
            <HomeCard isImageLeftAligned={true} img={imageThree} text={dataThree} />
          </div>
      </React.Fragment>
  );
}