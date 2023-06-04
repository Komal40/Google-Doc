import React from 'react'
import style from './Menu.module.css'

export default function Menu() {
    const options = [
        'File',
        'Edit',
        'View',
        'Insert',
        'Format',
        'Tools',
        'Extensions',
        'Help'
    ]

    return (
        <div className={style.option}>
            {
                options.map((ele, idx) => {
                    return <p key={idx} className={style.particular}>{ele}</p>
                })
            }
        </div>
    )
}
