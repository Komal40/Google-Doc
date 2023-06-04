import React from 'react'
import style from './Text.module.css'

export default function Text() {
  return (
    
    <div >
        <span className={style.text}>
        <select>
            <option>Normal Text</option>
        </select>
        </span>
        <span className={style.text}>
        <select>
            <option>Arial</option>
        </select>
        </span>
    </div>
  )
}
