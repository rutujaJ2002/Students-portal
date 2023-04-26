import React from "react";
import {Form,Dropdown } from "semantic-ui-react";
import { useForm } from "../hooks/useForm";

const DropDownInput=(props)=>{

    const {name, label,onChange,width,errormsg}=props
    const {options}= useForm()

    return (
        <Form.Field width={width} required>
            <label>{label}</label>
            <Dropdown 
                placeholder='Select Friend'
                fluid
                selection
                options={options}
                name={name}
                onChange={onChange}
            />
            {errormsg && <p className="err-msg">{errormsg}</p>}
        </Form.Field>
    )
}

export default DropDownInput;