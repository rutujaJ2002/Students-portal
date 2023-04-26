import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//development only
const pause=(duration)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,duration)
    })
}

const fetchStudents= createAsyncThunk('students/fetch',async ()=>{
    const response = await axios.get('http://localhost:3001/students')
    await pause(500);
    return response.data;
})

export {fetchStudents};