import React from "react";
import { CSVLink } from "react-csv";
import { Button, Icon } from "semantic-ui-react";

const Export=(props)=>{
    return(
        <div className="export-div">
            <CSVLink data={props.loadedData} onClick={()=>{}}>
                <Button color='linkedin' floated="right" style={{marginRight:'5rem'}}>
                    <Icon name='share' /> 
                    Export
                </Button>
            </CSVLink>
        </div>
    )
}
export default Export;