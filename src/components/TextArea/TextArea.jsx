import React, { useState } from 'react'
import style from './TextArea.module.css'

export default function TextArea() {

    const [userText, setUserText] = useState()

    function handleInput(e) {
        setUserText(e.target.textContent)
    }

    return (
        <div className={style.editor} contentEditable="true" onInput={handleInput}>
            {userText}
        </div>
    )
}
