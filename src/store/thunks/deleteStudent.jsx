import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteStudent= createAsyncThunk('students/delete', async (student)=>{
    await axios.delete(`http://localhost:3001/students/${student.id}`)
    return student;
})

export {deleteStudent};