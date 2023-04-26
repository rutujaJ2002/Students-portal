import React from "react";
import { useForm } from "../../hooks/useForm";
import { Form , Button, Icon, Modal} from "semantic-ui-react";
import RadioInput from "../../inputs/RadioInput"
import TextInput from "../../inputs/TextInput"
import CheckBoxInput from "../../inputs/CheckBoxInput"
import AddressInput from "../../inputs/AddressInput"
import DateInput from "../../inputs/DateInput"
import DropDownInput from "../../inputs/DropDownInput"
import { useDispatch } from "react-redux";
import {addStudent} from "../../store/thunks/addStudent"


const FormPage = (props) => {

    const dispatch= useDispatch()

    const {open, setOpen,button}=props

    const {
        initialData,
        options,
        formData,
        formErrors,
        handleInputChange,
        handleSkillsInput,
        handleBranchChange,
        handleResetClick,
        handleFormSubmit,
        validateData,
        submit,
        setSubmit,
        setFormData, 
    } = useForm()


    const handleSaveClick=(e)=>{
        e.preventDefault()
        validateData(formData)
        // console.log(formData)
        if(formErrors.fullname ==="" &&
        formErrors.address ==="" &&
        formErrors.id ==="" &&
        formErrors.branch ==="" &&
        formErrors.nationality ==="" &&
        formErrors.birthdate ==="" 
        ){
            setSubmit(true)
            dispatch(addStudent(formData))
            setTimeout(()=>{
                setOpen(false)
            },500)
        }
        else{
            setSubmit(false)
        }
        setFormData(initialData)
    }

    return (
        <Modal
            open={open}
            onClose={()=>setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={button}
            size='large'
      >
        <Modal.Header>
            Create New Student
            {props.button}
        </Modal.Header>
        <Modal.Content  scrolling>
            {/* {edit? <EditForm student={student} edit={edit}/>:<FormPage/>} */}
            <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                    <TextInput 
                        name="fullname"
                        label="Name: "
                        value={formData.fullname}
                        onChange={handleInputChange}
                        type="text"
                        width={6}
                        errormsg={formErrors.fullname}
                    />

                    <TextInput
                        name="id"
                        label="Roll Number: "
                        value={formData.id}
                        onChange={handleInputChange}
                        type="number"
                        width={4}
                        errormsg={formErrors.id}
                    />

                    <TextInput
                        name="email"
                        label="Email: "
                        value={formData.email}
                        onChange={handleInputChange}
                        type="email"
                        width={6}
                        errormsg={formErrors.email}
                    />
                </Form.Group>

                <Form.Group>
                    <DateInput
                        name="birthdate"
                        label="Birth date: "
                        value={formData.birthdate}
                        onChange={handleInputChange}
                        type="date"
                        width={8}
                        errormsg={formErrors.birthdate}
                    />

                    <DropDownInput
                        name="branch"
                        label="Branch: "
                        onChange={(e)=>handleBranchChange(e)}
                        width={8}
                        value={formData.branch}
                        options={options}
                        errormsg={formErrors.branch}
                    />
                </Form.Group>

                <CheckBoxInput
                    label="Skills: "
                    name="skills"
                    onChange={handleSkillsInput}
                    errormsg={formErrors.skills}
                />

                <Form.Group>
                    <AddressInput
                        name="address"
                        label="Address: "
                        value={formData.address}
                        onChange={handleInputChange}
                        errormsg={formErrors.address}
                    />
                </Form.Group>
                <br/>
                <RadioInput
                    name="nationality"
                    onChange={handleInputChange}
                    errormsg={formErrors.nationality}
                />

            </Form>

            <div className="form-actions">
                <Button onClick={handleResetClick} >
                    Reset <Icon name='redo' style={{marginLeft:'.5em'}}/>
                </Button>
                <Button onClick={handleSaveClick} primary disabled={submit}>
                    Save <Icon name='chevron right'/>
                </Button>
            </div>
        </Modal.Content>
      </Modal>
    )
}

export default FormPage;