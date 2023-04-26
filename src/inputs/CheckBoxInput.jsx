import React from "react";
import { Form, Input } from "semantic-ui-react";

const CheckBoxInput=(props)=>{

    const {name, label, onChange,errormsg}=props

    return(
        <>
            <Form.Group inline >
                <label>{label} </label>
                <Form.Field>
                    <Input 
                        type='checkbox' 
                        name={name}
                        value="React" 
                        onChange={onChange}
                    />
                    <label>React</label>
                </Form.Field>

                <Form.Field>
                    <Input 
                        type='checkbox' 
                        name={name}
                        value="Javascript" 
                        onChange={onChange}
                        />
                        <label>Javascript</label>
                </Form.Field>

                <Form.Field>
                    <Input 
                        type='checkbox' 
                        name={name}
                        value="MongoDB" 
                        onChange={onChange}
                        />
                        <label>MongoDB</label>
                </Form.Field>

                <Form.Field>
                    <Input 
                        type='checkbox' 
                        name={name}
                        value="NodeJS" 
                        onChange={onChange}
                        />
                        <label>NodeJS</label>
                </Form.Field>

                <Form.Field>
                    <Input 
                        type='checkbox' 
                        name={name}
                        value="GraphQL" 
                        onChange={onChange}
                        />
                        <label>GraphQL</label>
                </Form.Field>
                <br />
            </Form.Group>
            {errormsg && <p className="err-msg">{errormsg}</p>}
        </>
    )
}

export default CheckBoxInput;