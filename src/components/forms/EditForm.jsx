import React, { useEffect, useState } from "react";
import { Form, Button, Icon, Modal } from "semantic-ui-react";
import TextInput from "../../inputs/TextInput";
import DateInput from "../../inputs/DateInput";
import AddressInput from "../../inputs/AddressInput";
import DropDownInput from "../../inputs/DropDownInput";
import CheckBoxInput from "../../inputs/CheckBoxInput";
import RadioInput from "../../inputs/RadioInput";
import {useForm} from "../../hooks/useForm"
import { useDispatch } from "react-redux";
import {editStudent} from "../../store/thunks/editStudent";

let temperr={
    fullname: '',
    address: '',
    email:'',
    id: '',
    branch: '',
    birthdate: '',
    nationality: '',
    skills: ''
}

const EditForm=(props)=>{

    const {student, open ,setOpen, button}=props

    const dispatch= useDispatch()

    const [editData,setEditData]=useState(student)
    const [editErrors, setEditErrors]=useState(temperr)
    const [submit, setSubmit]=useState(false)

    useEffect(()=>{
        setEditData(student)
    },[student])

    const {
        initialData,
        options
    } = useForm()

    const handleInputChange=(e)=>{
        const {name, value}=e.target;
        setEditData({...editData, [name]:value})
    }

    const handleSkillsInput=(e)=>{
        const {name, value, checked}= e.target
        let temp=[]
        if(checked){
            temp= [...temp, value]
        }
        else{
            temp = temp.filter((skill)=> skill !==value)
        }
        setEditData({...editData, [name]:temp})
    }

    const handleBranchChange=(e)=>{
        let batch=e.target.textContent
        setEditData({...editData, branch:batch})
    }

    const validateData=(editData)=>{
        editErrors.fullname=editData.fullname?"":"This field is required"
        editErrors.address= editData.address?"":"This field is required"
        editErrors.id= editData.id?"":"Roll number is mandatory"
        editErrors.nationality= editData.nationality? "":"Select nationality first"
        editErrors.branch= editData.branch?"":"Select students branch"
        editErrors.skills= editData.skills.length!==0?"":"Select atleast one skill"
        editErrors.birthdate=  (/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/).test(editData.birthdate)?"":"Enter a valid date"
    
        if(editData.email ===""){
            editErrors.email= "This field is required"
        }else if(!(/$^|.+@.+../).test(editData.email)){
            editErrors.email="This is not the valid email"
        }else{
            editErrors.email=""
        }

        setEditErrors({...editErrors})
    }

    const handleResetClick=(e)=>{
        e.preventDefault()
        setSubmit(true)
        setEditData(student)
        setEditErrors(temperr)
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault()
        setEditData(student)
        setEditErrors(temperr)
    }

    const handleEditSaveClick=(e)=>{
        e.preventDefault()
        validateData(editData)
        if(editErrors.fullname ==="" &&
        editErrors.address ==="" &&
        editErrors.id ==="" &&
        editErrors.branch ==="" &&
        editErrors.nationality ==="" &&
        editErrors.birthdate ==="" 
        ){
            setSubmit(true)
            console.log(editData)
            dispatch(editStudent(editData))
            setTimeout(()=>{
                setOpen(false)
            },500)
        }
        else{
            setSubmit(false)
        }
        setEditData(initialData)
    }

    return(
            <Modal
                open={open}
                onClose={()=>setOpen(false)}
                onOpen={() => setOpen(true)}
                trigger={button}
                size='large'
                >
                <Modal.Header>
                    EditStudent Information
                    {props.button}
                </Modal.Header>
                <Modal.Content  scrolling>
                <Form onSubmit={handleFormSubmit}>
                <pre className="up-msg">Do not update Roll number</pre>
                        <Form.Group>
                            <TextInput 
                                name="fullname"
                                label="Name: "
                                value={editData.fullname}
                                onChange={handleInputChange}
                                type="text"
                                width={6}
                                errormsg={editErrors.fullname}
                            />

                            <TextInput
                                name="id"
                                label="Roll Number: "
                                value={editData.id}
                                onChange={handleInputChange}
                                type="number"
                                width={4}
                                errormsg={editErrors.id}
                            />

                            <TextInput
                                name="email"
                                label="Email: "
                                value={editData.email}
                                onChange={handleInputChange}
                                type="email"
                                width={6}
                                errormsg={editErrors.email}
                            />
                        </Form.Group>

                        <Form.Group>
                            <DateInput
                                name="birthdate"
                                label="Birth date: "
                                value={editData.birthdate}
                                onChange={handleInputChange}
                                type="date"
                                width={8}
                                errormsg={editErrors.birthdate}
                            />

                            <DropDownInput
                                name="branch"
                                label="Branch: "
                                onChange={(e)=>handleBranchChange(e)}
                                width={8}
                                value={editData.branch}
                                options={options}
                                errormsg={editErrors.branch}
                            />
                        </Form.Group>

                        <CheckBoxInput
                            label="Skills: "
                            name="skills"
                            onChange={handleSkillsInput}
                            errormsg={editErrors.skills}
                        />

                        <Form.Group>
                            <AddressInput
                                name="address"
                                label="Address: "
                                value={editData.address}
                                onChange={handleInputChange}
                                errormsg={editErrors.address}
                            />
                        </Form.Group>
                        <br/>
                        <RadioInput
                            name="nationality"
                            onChange={handleInputChange}
                            errormsg={editErrors.nationality}
                        />
                    </Form>

                    <div className="form-actions">
                        <Button onClick={handleResetClick} >
                            Reset <Icon name='redo' style={{marginLeft:'.5em'}}/>
                        </Button>
                        <Button onClick={handleEditSaveClick} primary>
                            Edit <Icon name='chevron right'/>
                        </Button>
                    </div>
                </Modal.Content>
            </Modal>
    )
}

export default EditForm;