import React from 'react'
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





export default function Tools() {
  return (
    <div className={style.alloptions}>
  
        <div className={style.part}><BiUndo/></div>
        <div className={style.part}><GrRedo/></div>
        <div className={style.part}><AiOutlinePrinter/></div>
        <div className={style.part}><MdSpellcheck/></div>
        <div className={style.part}><AiOutlineFormatPainter/></div>
        <Zoom className={style.part}/>
        <Text/>     
        <VscBold className={style.part}/>
        <AiOutlineItalic className={style.part}/>
        <AiOutlineUnderline className={style.part}/>
        <AiOutlineFontColors className={style.part}/>
        <BiHighlight className={style.part}/>
        <IoMdLink className={style.part}/>
        <BiCommentAdd className={style.part}/>
        <MdOutlineInsertPhoto className={style.part}/>
        <BiAlignLeft className={style.part}/>
        <MdOutlineChecklist className={style.part}/>
        <MdOutlineFormatListBulleted className={style.part}/>
        <AiOutlineOrderedList className={style.part}/>
        <BiLeftIndent className={style.part}/>
        <BiRightIndent className={style.part}/>
        <RiFormatClear className={style.part}/>
        <RiEdit2Fill className={style.edit}/>
        <IoIosArrowUp className={style.edit}/>
  
    </div>
  )
}

