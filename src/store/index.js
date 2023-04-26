import { configureStore } from "@reduxjs/toolkit";
import { studentReducer } from "./studentSlice";

export const store= configureStore({
    reducer:{
        students:studentReducer
    }
})

export * from "./thunks/fetchStudents";
export * from "./thunks/deleteStudent";
export * from "./thunks/addStudent";
export * from "./thunks/editStudent";