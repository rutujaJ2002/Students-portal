import React from "react";
import { Header, Label,  Button, Input } from "semantic-ui-react";


const Pagination=(props)=>{

    const {prevPage, nextPage, total, cPage, nPage, setCurrentPage}=props

    const handlePageChange=(e)=>{
        //change page on inputchange
        let temp=e.target.value
        if(temp===0 || temp>=nPage || temp===undefined){
            setCurrentPage(cPage)
        }
        setCurrentPage(temp)
    }
    setCurrentPage(cPage)

    return(
        <div className="pagination-div">
                <div>
                    <Header as='h4' color="blue">Total Results : {total}</Header>
                </div>
                <div className="pagination-div">
                    <Button icon="angle left" onClick={prevPage} style={{backgroundColor:'transparent', fontSize:'1.5em'}}/>
                        <Input 
                            type="number" 
                            min={1} 
                            max={nPage} 
                            value={cPage} 
                            onChange={handlePageChange}
                            style={{
                                height:'2.2em',
                                width:'3.8em',
                                backgroundColor:'grey',
                                fontSize:'1em'
                            }}
                        />
                        <Label>/{nPage}</Label>
                    <Button icon="angle right" onClick={nextPage} style={{backgroundColor:'transparent',fontSize:'1.5em'}}/>
                </div>
        </div>
    )
}

export default Pagination;