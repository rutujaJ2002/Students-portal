import React from "react";
import { Form ,Input} from "semantic-ui-react";

const RadioInput=(props)=>{

    const {name,errormsg,onChange}=props

    return(
        <Form.Group inline >
            <label>Nationality: </label>
            <Form.Field>
                <Input 
                    type='radio' 
                    name={name}
                    value="Indian"
                    onChange={onChange}
                />
                <label >Indian</label>
            </Form.Field>
            <Form.Field>
                <Input 
                    type='radio' 
                    name={name}
                    value="USA"
                    onChange={onChange}
                />
                <label >American</label>
            </Form.Field>
            <Form.Field>
                <Input 
                    type='radio' 
                    name={name}
                    value="Other"
                    onChange={onChange}
                />
                <label>Other</label>
            </Form.Field>
            {errormsg && <p className="err-msg">{errormsg}</p>}
        </Form.Group>
    )
}

export default RadioInput;