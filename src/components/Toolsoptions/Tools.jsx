import React, { useRef, useState } from 'react'
import style from './Tools.module.css'
import { BiUndo } from 'react-icons/bi';
import { GrRedo } from 'react-icons/gr';
import { AiOutlinePrinter } from 'react-icons/ai';
import { MdSpellcheck } from 'react-icons/md';
import { AiOutlineFormatPainter } from 'react-icons/ai';
import Zoom from './Zoom/Zoom';
import Text from './Text/Text';
import { VscBold } from 'react-icons/vsc';
import { AiOutlineItalic } from 'react-icons/ai';
import { AiOutlineUnderline } from 'react-icons/ai';
import { AiOutlineFontColors } from 'react-icons/ai';
import { BiHighlight } from 'react-icons/bi';
import { IoMdLink } from 'react-icons/io';
import { BiCommentAdd } from 'react-icons/bi';
import { MdOutlineInsertPhoto } from 'react-icons/md';
import {BiAlignLeft} from 'react-icons/bi';
import {AiOutlineOrderedList} from 'react-icons/ai';
import {MdOutlineChecklist} from 'react-icons/md';
import {MdOutlineFormatListBulleted} from 'react-icons/md';
import {BiLeftIndent} from 'react-icons/bi';
import {BiRightIndent} from 'react-icons/bi';
import {RiFormatClear} from 'react-icons/ri';
import {RiEdit2Fill} from 'react-icons/ri';
import {IoIosArrowUp} from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { redoActions, undoActions } from '../../slice';
import TextAlign from './TextAlign/TextAlign';

export default function Tools() {

  const {text, history, future} = useSelector((state)=>state.editor)
  const dispatch = useDispatch()
  const [color,setColor] = useState()

  const colorRef = useRef()
  const bgRef = useRef(null)
  const imgRef=useRef(null)
  const linkRef=useRef(null)

  function handleUndo(){
    dispatch(undoActions())
  }

  function handleRedo(){
    dispatch(redoActions())
  }

  function handleButton(value){
    document.execCommand(value)
  }

  function handleColorClick(){
    colorRef.current.click()
  }
  function handleColorChange(e){
    document.execCommand('foreColor',"",e.target.value)
    setColor(e.target.value)
  }


  function handleBackgroundClick(){
    bgRef.current.click()
  }

  function handleBackgroundChange(e){
    document.execCommand("backColor","",e.target.value)

  }

  function handleLink(){
    linkRef.current.click()
  }
  function handleInserLink(e){
   document.execCommand('createLink',{ text: 'Links', url: e.target.value, title : 'Link' });
  }

  function handleImage(){
    imgRef.current.click()
     }
     
  function handleImageChange(event){
    if((event.target.files[0])) {
        let imgUrl = URL.createObjectURL(event.target.files[0]);
      let img = document.createElement("img");

      img.style.maxWidth = "50%"; 
      img.style.maxHeight = "50%"; 

      img.src = imgUrl;
      document.execCommand("insertHTML", false, img.outerHTML);
    
    }
  }

  function handlePrintEvent(myDiv){
    let mywindow = window.open("","PRINT","height=650,width=900,top=100,left=100")
    mywindow.document.write(`<html><head><title>${myDiv}</title>`);
    mywindow.document.write(document.getElementById(myDiv).innerHTML)
    mywindow.document.write('</body></html>')
    mywindow.document.close()
    mywindow.focus()
    mywindow.print()
    // mywindow.close()
    }
    

  return (
    <div className={style.alloptions}>
  
        <div className={style.part}><BiUndo onClick={()=>handleButton('undo')}/></div>
        <div className={style.part}> <GrRedo onClick={()=>handleButton('redo')}/></div>
        <div className={style.part}><AiOutlinePrinter onClick={()=>handlePrintEvent('myDiv')}/></div>
        {/* <div className={style.part}><MdSpellcheck/></div> */}
        <div className={style.part}><AiOutlineFormatPainter/></div>
        <Zoom className={style.part}/>
        <button><Text/> </button>    
        <button onClick={()=>handleButton('bold')}><VscBold className={style.part} /></button>
        <button onClick={()=>handleButton('italic')}><AiOutlineItalic className={style.part}/></button>
        <button onClick={()=>handleButton('underline')}><AiOutlineUnderline className={style.part}/></button>
        <button onClick={handleColorClick}><AiOutlineFontColors className={style.part}/></button>
       <input type="color" ref={colorRef} onChange={handleColorChange} style={{visibility:"hidden"}}/>

        <button onClick={handleBackgroundClick}><BiHighlight className={style.part}/></button>
   <input type="color" ref={bgRef}  onChange={handleBackgroundChange} style={{visibility:"hidden"}} /> 

        <button onClick={handleLink} ><IoMdLink className={style.part}/></button>
       <input onChange={handleInserLink} type="url" ref={linkRef} hidden/>

        <button><BiCommentAdd className={style.part}/></button>
       <button onClick={handleImage}> <MdOutlineInsertPhoto className={style.part}/></button>
       <input type="file" ref={imgRef} onChange={handleImageChange} hidden/>

        
        {/* <BiAlignLeft className={style.part}/> */}
        <TextAlign className={style.part}/>
       <button> <MdOutlineChecklist className={style.part}/></button>
        <button onClick={()=>handleButton('insertUnorderedList')}><MdOutlineFormatListBulleted className={style.part}/></button>
        <button onClick={()=>handleButton('insertOrderedList')}><AiOutlineOrderedList className={style.part}/></button>
        <button onClick={()=>handleButton('outdent')}><BiLeftIndent className={style.part}/></button>
        <button onClick={()=>handleButton('indent')}><BiRightIndent className={style.part}/></button>
        <button><RiFormatClear className={style.part}/></button>
        <button><RiEdit2Fill className={style.edit}/></button>
        <button><IoIosArrowUp className={style.edit}/></button>
  
    </div>
  )
  }


