import React, { useState } from 'react';
import style from './Zoom.module.css';

export default function Zoom() {

  const ar_screen = ['50%', '75%', "90%", "100%", "125%", "150%", "200%"]

  function handleFitSreen(myDiv, size) {
    console.log(size)
    if (size === '100%') {
      document.getElementById(myDiv).style.transform = "scale(1,1)";
    }
    else if (size === "50%") {
      document.getElementById(myDiv).style.transform = "scale(0.5,1)";
    }
    else if (size === "75%") {
      document.getElementById(myDiv).style.transform = "scale(0.75,1)";
    }
    else if (size === "125%") {
      document.getElementById(myDiv).style.transform = "scale(1.25,1)";
    }
    else if (size === "150%") {
      document.getElementById(myDiv).style.transform = "scale(1.5,1)";
    }

    else if (size === "200%") {
      document.getElementById(myDiv).style.transform = "scale(2,1)";
    }
  }


  return (
    <div className={style.zoom}>
      <div >
        <select onChange={(e) => handleFitSreen("myDiv", e.target.value)} defaultValue={"100%"}>
          <option value="fit">fit</option>
          {
            ar_screen.map(ele => <option value={ele}>{ele}
            </option>)
          }

        </select>
      </div>
    </div>
  );
}

