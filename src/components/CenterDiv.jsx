import React from "react";
import { Segment } from "semantic-ui-react";
import DivHeader from "./DivHeader";
import TableMain from "./table/TableMain";

const CenterDiv=()=>{
    return(
        <Segment 
            color="white" 
            secondary
            style={{
                padding:0,
                marginTop:'1%',
                marginLeft:'2%',
                marginRight:'2%',
                height:'80%'
            }}
        >
            <DivHeader/>
            <TableMain/>
        </Segment>
    )
}

export default CenterDiv;