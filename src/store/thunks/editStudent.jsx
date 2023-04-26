import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const editStudent = createAsyncThunk('students/edit', async (editData)=>{
    try{
        const response= await axios.put(`http://localhost:3001/students/${editData.id}`, editData)
        return response.data
    }catch(err){
        console.log(err)
    }
})

export {editStudent};