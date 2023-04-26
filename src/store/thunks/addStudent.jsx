import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const addStudent = createAsyncThunk('students/add', async (formData)=>{
    const response= await axios.post('http://localhost:3001/students',formData)
    return response.data
})

export {addStudent};