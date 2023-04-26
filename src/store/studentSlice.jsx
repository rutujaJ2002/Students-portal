import { createSlice } from "@reduxjs/toolkit";
import { fetchStudents } from "./thunks/fetchStudents";
import { deleteStudent } from "./thunks/deleteStudent";
import {addStudent} from "./thunks/addStudent";
import { editStudent } from "./thunks/editStudent";

const studentSlice=createSlice({
    name:'students',
    initialState:{
        isLoading:false,
        data:[],
        error:null
    },
    reducers:{

    },
    extraReducers(builder){
        //to fetch stydents data into table
        builder.addCase(fetchStudents.pending, (state,action)=>{
            state.isLoading=true
        })
        builder.addCase(fetchStudents.fulfilled, (state,action)=>{
            state.isLoading=false
            state.data=action.payload
        })
        builder.addCase(fetchStudents.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.error
        })

        //to add student
        builder.addCase(addStudent.pending, (state,action)=>{
            state.isLoading=true
        })
        builder.addCase(addStudent.fulfilled, (state,action)=>{
            state.isLoading=false
            state.data.push(action.payload)
        })
        builder.addCase(addStudent.rejected, (state,action)=>{
            state.isLoading=false
            state.error=action.error
        })

         //to delete student record from the table
         builder.addCase(deleteStudent.pending, (state,action)=>{
            state.isLoading=true
        })
        builder.addCase(deleteStudent.fulfilled, (state, action)=>{
            state.isLoading=false
            state.data= state.data.filter(student=>{
                return student.id !== action.payload.id
            })
        })
        builder.addCase(deleteStudent.rejected, (state,action)=>{
            state.isLoading=false
            state.error=action.error
        })

        //to edit student
        builder.addCase(editStudent.pending, (state,action)=>{
            state.isLoading=true
        })
        builder.addCase(editStudent.fulfilled, (state,action)=>{
            state.isLoading=false
            const updatedStudent = action.payload;
            const index = state.data.findIndex((stud) => stud.id === updatedStudent.id);
            state.data[index] = updatedStudent;
        })
        builder.addCase(editStudent.rejected, (state,action)=>{
            state.isLoading=false
            state.error=action.error
        })
    }
})

export const studentReducer = studentSlice.reducer;