import React from 'react'
import style from './Zoom.module.css'

export default function Zoom() {
  return (
    <div className={style.zoom}>
        <select>
            <option>100%</option>
            <option>50%</option>
        </select>
    </div>
  )
}
