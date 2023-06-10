import {createSlice} from '@reduxjs/toolkit'

const editorSlice = createSlice({
    name:'editor',
    initialState:{
        text:'',
        history:[],
        future:[],
        zoom:100,
        textAlign: 'left',
    },
    reducers:{
        addText:(state, action)=>{
            state.text=action.payload.text
            state.history.push(action.payload.text)
            state.future=[]
        },
        undoActions:(state, action)=>{
            if(state.history.length > 0){
                const prev = state.history.pop()
                state.text = prev
                state.future.push(state.text)
            }
        },
        redoActions:(state, action)=>{
            if(state.future.length > 0){
                const next = state.future.pop()
                state.text = next
                state.history.push(state.text)
            }
        },
        setZoom:(state, action)=>{
            state.zoom=action.payload
        },
        setTextAlign: (state, action) => {
            const { align } = action.payload;
            state.textAlign = align;
          },
    }
})

export const {addText, undoActions, redoActions, setZoom, setTextAlign} = editorSlice.actions
export default editorSlice.reducer


