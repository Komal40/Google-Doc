import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Title from './components/Title/Title'
import Tools from './components/Toolsoptions/Tools'
import Menu from './components/Menu/Menu'
// import './App.css'
import ReactQuill from 'react-quill'
import TextArea from './components/TextArea/TextArea'
import { Provider } from 'react-redux'
import store from './store'

function App() {


  return (
    <Provider store={store}>
      <Title/>
      <Menu/>
      <Tools/>
      <TextArea/>
    </Provider>
  )
}

export default App
