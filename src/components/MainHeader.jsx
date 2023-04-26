import React from "react";
import "../App.css";
import {Segment, Header} from "semantic-ui-react";

const MainHeader=()=>{
    return(
        <Segment padded basic>
            <Header
                as='h2' 
                color='blue'
                content='FREEDOM - STUDENTS PORTAL'
                style={{
                    fontSize:'1.5em',
                    fontWeight:'bolder',
                    marginBottom: 0,
                    marginTop: '.7rem',
                }}
            />
        </Segment>
    )
}

export default MainHeader;