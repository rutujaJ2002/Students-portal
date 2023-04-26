import React from "react";
import { Button, Header, Grid} from "semantic-ui-react";
import {useModal} from "../hooks/useModal"
import FormPage from "./forms/FormPage";

const DivHeader=()=>{

    const {modal , handleModalOpenClick, button, setModal}= useModal()
    
    if(modal){
        return <FormPage open={modal} setOpen={setModal} button={button}/>
    }

    return(
        <Grid padded inverted columns={2} >
            <Grid.Column floated='left'color="blue" computer={8} mobile={8}>
                <Header as="h2" color="black" inverted style={{fontSize:'1.6em'}}>Students Information</Header>
            </Grid.Column>
            <Grid.Column floated='right' color="blue">
                <Button content='Add Student' icon='plus' labelPosition='left' floated="right" onClick={handleModalOpenClick}/>
            </Grid.Column>
        </Grid>
    )
}

export default DivHeader