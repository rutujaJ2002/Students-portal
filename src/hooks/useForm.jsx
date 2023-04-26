import  { useState} from "react";


export function useForm(){
    const options = [
        { key: 'c', text: 'Computer Engineering', value: 'cse' },
        { key: 'i', text: 'Information Technology', value: 'it' },
        { key: 'a', text: 'Automobile Engineering', value: 'ae' },
        { key: 'm', text: 'Mechanical Engineering', value: 'me' },
        { key: 'e', text: 'Electrical Engineering', value: 'ee' },
        { key: 'en', text: 'Electronics Engineering', value: 'entc' },
    ]

    const initialData= {
        fullname: '',
        address: '',
        email:'',
        id: '',
        branch: '',
        birthdate: '',
        nationality: '',
        skills: [],
    }

    let temp={
        fullname: '',
        address: '',
        email:'',
        id: '',
        branch: '',
        birthdate: '',
        nationality: '',
        skills: ''
    }

    const [formData, setFormData] = useState(initialData);
    const [formErrors, setFormErrors]=useState(temp)
    const [submit, setSubmit]=useState(false)
    const [reset, setReset]=useState(false)

    const handleInputChange=(e)=>{
        const {name, value}=e.target;
        setFormData({...formData, [name]:value})
        setFormErrors({...formErrors, [name]:""})
    }

    const handleSkillsInput=(e)=>{
        const {name, value, checked}= e.target
        let temp=formData.skills
        if(checked){
            temp= [...temp, value]
        }
        else{
            temp = temp.filter((skill)=> skill !==value)
        }
        setFormData({...formData, [name]:temp})
        setFormErrors({...formErrors, [name]:""})
    }

    const handleBranchChange=(e)=>{
        let batch=e.target.textContent
        setFormData({...formData, branch:batch})
        setFormErrors({...formErrors, branch:""})
    }


    const validateData=(formData)=>{
        formErrors.fullname=formData.fullname?"":"This field is required"
        formErrors.address= formData.address?"":"This field is required"
        formErrors.id= formData.id?"":"Roll number is mandatory"
        formErrors.nationality= formData.nationality? "":"Select nationality first"
        formErrors.branch= formData.branch?"":"Select students branch"
        formErrors.skills= formData.skills.length!==0?"":"Select atleast one skill"
        formErrors.birthdate=  (/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/).test(formData.birthdate)?"":"Enter a valid date"

        if(formData.email ===""){
            formErrors.email= "This field is required"
        }else if(!(/$^|.+@.+../).test(formData.email)){
            formErrors.email="This is not the valid email"
        }else{
            formErrors.email=""
        }

        setFormErrors({...formErrors})
    }

    const handleResetClick=(e)=>{
        e.preventDefault()
        setSubmit(false)
        setReset(true)
        setFormData(initialData)
        setFormErrors(temp)

    }

    const handleFormSubmit=(e)=>{
        e.preventDefault()
        setFormData(initialData)
        setFormErrors(temp)
    }

    return{
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
        initialData,
    }
}