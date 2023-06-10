import {configureStore} from '@reduxjs/toolkit'
import editorReducer from './slice'

const store = configureStore({
    reducer:{
        editor:editorReducer
    }
})

export default store
