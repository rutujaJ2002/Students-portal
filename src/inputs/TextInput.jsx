import React from "react";
import {Form, Input } from "semantic-ui-react";

const TextInput=(props)=>{

    const {name, label, value, onChange,type,width,errormsg}=props

    return (
        <>
            <Form.Field required width={width} id='form-input-control-error-email'>
                    <label>{label} </label>
                    <Input fluid
                            type={type}
                            name={name}
                            value={value}
                            onChange={onChange} 
                    />
                    {errormsg && <p className="err-msg">{errormsg}</p>}
            </Form.Field>
        </>
    )
}

export default TextInput;