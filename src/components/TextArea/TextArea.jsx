import React, { useRef, useState } from 'react';
import style from './TextArea.module.css';
import { useDispatch } from 'react-redux';
import { addText } from '../../slice';

export default function TextArea() {
  const [userText, setUserText] = useState('');
  const dispatch = useDispatch();
  let divRef = useRef(null);

  function handleInput() {
    const updatedText = divRef.current.innerText;
    setUserText(updatedText);
    dispatch(addText({ text: updatedText }));
  }

  return (
    <div
      className={style.editor}
      contentEditable="true"
      ref={divRef}
      onChange={handleInput}
      style={{ direction: 'ltr' }}
      id="myDiv"
    >
      {userText}
    </div>
  );
}









// import React, { useRef, useState } from 'react'
// import style from './TextArea.module.css'
// import { useDispatch } from 'react-redux'
// import { addText } from '../../slice'

// export default function TextArea() {

//     const [userText, setUserText] = useState()
//     const dispatch = useDispatch()
//     const divRef=useRef(null)

//     // function handleInput(e) {
//     //     setUserText(e.target.textContent)
//     //     dispatch(addText(userText))
//     // }

//     function handleInput(e) {
//         const updatedText = e.target.textContent;
//         setUserText(updatedText);
//         dispatch(addText(updatedText));
//       }
      

//     return (
//         <div className={style.editor} contentEditable={true}
//         ref={divRef}
//         onChange={handleInput}
//         id='myDiv'

//         >
//             {userText}
//         </div>
//     )
// }


