import { Button } from "semantic-ui-react"
import  { useState } from "react"

export function useModal(){
    const [modal,setModal]=useState(false)
    const [ edit,setEdit]=useState(false)
    
    const handleModalOpenClick=()=>{
        setModal(true)
    }

    const handleModalCloseClick=()=>{
        setModal(false)
    }

    const handleEditClick=()=>{
        //edit form popup
        if(window.confirm("Are you sure you want to edit the student?")){
            setModal(true)
        }
        setEdit(true)
    }
    
    const button=<Button circular icon="close" style={{float:'right'}} onClick={handleModalCloseClick}/>
    
    return{
        modal,
        setModal,
        edit,
        setEdit,
        button,
        handleModalCloseClick,
        handleModalOpenClick,
        handleEditClick
    }
}