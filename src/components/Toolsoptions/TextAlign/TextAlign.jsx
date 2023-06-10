import React from 'react'
import style from './TextAlign.module.css'
import {CiTextAlignLeft} from 'react-icons/ci'
import {CiTextAlignRight} from 'react-icons/ci'
import {BsJustify} from 'react-icons/bs'
import {BsTextCenter} from 'react-icons/bs'
import {useState} from 'react'

const TextAlign = () => {
    const [btn,setBtn]=useState(true)
   function handleAddEvent(command){
        document.execCommand(command)
        setBtn(!btn)
    }
    function handleBtn(){
        setBtn(!btn)
    }
  return (
    <div>{btn?<div><button onClick={handleBtn}><CiTextAlignLeft className={style.part}/></button></div>:<div className={style.dropdown}>

    <div className={style.btn}>
    <button onClick={()=>handleAddEvent("justifyleft")}><CiTextAlignLeft className={style.part}/></button>
    <button onClick={()=>handleAddEvent("justifyRight")}><CiTextAlignRight className={style.part}/></button>
    <button onClick={()=>handleAddEvent("justifyCenter")}><BsTextCenter className={style.part}/></button>
    <button onClick={()=>handleAddEvent("justifyFull")}><BsJustify className={style.part}/></button>
    </div>
</div>}</div>
    
  )
}

export default TextAlign











// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setTextAlign } from '../../../slice';

// function TextAlign() {
// //   const dispatch = useDispatch();
// //   const textAlign = useSelector((state) => state.editor.textAlign);

// //   const handleTextAlignChange = (event) => {
// //     const align = event.target.value;
// //     dispatch(setTextAlign({ align }));
// //   };

//   function handleAlignation(command){
//     document.execCommand(command)
//   }

//   return (
//     <div>
//       <select 
//     //   value={textAlign} onChange={handleTextAlignChange}
//       >
//         <button onClick={()=>handleAlignation('justifyleft')}><option >Left</option></button>
//         <button onClick={()=>handleAlignation('justifyCenter')}><option >Center</option></button>
//         <button onClick={()=>handleAlignation('justifyRight')}><option>Right</option></button>
//       </select>
//     </div>
//   );
// }

// export default TextAlign;
