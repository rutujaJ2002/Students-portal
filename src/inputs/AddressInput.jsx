import React from "react";
import { Form,  TextArea } from "semantic-ui-react";

const AddressInput=(props)=>{
    const {name, value, label, onChange,errormsg} = props
    return(
            <Form.Field required>
                <label>{label}</label>
                {errormsg && <p className="err-msg">{errormsg}</p>}
                <TextArea  
                    name={name}
                    placeholder='Enter your address...' 
                    value={value} 
                    onChange={onChange}
                    style={{
                        width:'40vw'
                    }}
                />
            </Form.Field>
    )
}

export default AddressInput;