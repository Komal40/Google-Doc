import React from 'react'
import style from './Text.module.css'

export default function Text() {

  const fontFamily = [
    "arial",
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "ui-serif",
    "ui-sans-serif",
    "ui-monospace",
    "ui-rounded",
    "emoji",
    "math",
    "fangsong",
    "Georgia",
    "Times New Roman",
    "Impact",
  ];

  
function handleFonts(value){
    console.log(value)
    document.execCommand('fontName'," ",value)
}


  return (
    
    <div >
        {/* <span className={style.text}>
        <select>
            <option>Normal Text</option>
        </select>
        </span> */}
        <span className={style.text}>
        {/* <div> */}
            <select name="Text"onChange={(e)=>handleFonts(e.target.value)} >
             {fontFamily.map(ele=><option value={ele}>{ele}</option>)}
            </select>
        {/* </div> */}
        </span>
    </div>
  )
}
