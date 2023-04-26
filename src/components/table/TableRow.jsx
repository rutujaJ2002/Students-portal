import React from "react";
import { useDispatch } from "react-redux";
import { TableCell, Button, Table} from "semantic-ui-react";
import {deleteStudent} from "../../store/thunks/deleteStudent"
import EditForm from "../forms/EditForm";
import { useModal } from "../../hooks/useModal";

const TableRow=({student})=>{

    const dispatch=useDispatch()

    const {modal, setModal, button,handleEditClick}=useModal()

    if(modal){
        return <EditForm open={modal} setOpen={setModal} button={button} student={student}/>
    }

    const handleDeleteClick=()=>{
        if(window.confirm("Are you sure you want to delete the student?")){
            dispatch(deleteStudent(student))
        }
    }

    return(
        <Table.Row>
            <Table.Cell>{student.id}</Table.Cell>
            <Table.Cell>{student.fullname}</Table.Cell>
            <Table.Cell>{student.address}</Table.Cell>
            <Table.Cell>{student.email}</Table.Cell>
            <Table.Cell>{student.nationality}</Table.Cell>
            <Table.Cell>{student.branch}</Table.Cell>
            <Table.Cell>{student.birthdate}</Table.Cell>
            <Table.Cell>
                {
                    student.skills.map((skill,i)=>(<p key={i} style={{fontSize:'.9em'}}>{skill}</p>))
                }
            </Table.Cell>
            <TableCell style={{marginRight:'2em'}}>
                <Button icon="edit" onClick={handleEditClick}/>
                <Button icon="trash" onClick={handleDeleteClick}/>
            </TableCell>
       </Table.Row> 
    )
}

export default TableRow;