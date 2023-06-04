import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Title from './components/Title/Title'
import Tools from './components/Toolsoptions/Tools'
import Menu from './components/Menu/Menu'
// import './App.css'
import ReactQuill from 'react-quill'
import TextArea from './components/TextArea/TextArea'

function App() {


  return (
    <>
      <Title/>
      <Menu/>
      <Tools/>
      <TextArea/>
    </>
  )
}

export default App
