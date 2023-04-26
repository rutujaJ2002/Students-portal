import React from "react";
import {Table, Button, Input, Dimmer, Loader,Header} from 'semantic-ui-react';
import OutsideClickHandler from "react-outside-click-handler";
import Pagination from "../features/Pagination";
import Export from "../features/Export";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../store/thunks/fetchStudents";
import {useEffect, useState} from "react"
import TableRow from "./TableRow";

const TableMain=()=>{

   const dispatch= useDispatch();

    const {data, isLoading, error}= useSelector((state)=>{
      return state.students
    })

    useEffect(()=>{
      dispatch(fetchStudents())
    },[dispatch])

    const [searchTerm, setSearchTerm]=useState('')
    const [searchBar, setSearchBar]=useState(false)
    // const [sortedData, setSortedData]=useState(data)
    // const [sortOrder, setSortOrder]=useState("")

    const [currentPage, setCurrentPage]=useState(1)
    const recordsPerPage=7
    const lastIndex= currentPage* recordsPerPage
    const firstIndex= lastIndex- recordsPerPage
    const nPage = Math.ceil(data.length/recordsPerPage)

    const prevPage=()=>{
        if(currentPage !==1){
            setCurrentPage(currentPage-1)
        }
    }

    const nextPage=()=>{
        if(currentPage !== nPage){
            setCurrentPage(currentPage+1)
        }
    }

    const handleSearchClick=()=>{
        setSearchBar(true)
        if(searchBar){
            setSearchBar(false)
            setSearchTerm('')
        }
    }

    const handleOutisdeClick=()=>{
      setSearchBar(false)
      setSearchTerm('')
    }

    const handleSearchTerm=(e)=>{
      setSearchTerm(e.target.value)
    }

    // const handleSort = (columnName) => {
    //     if(sortOrder === ""){
    //         setSortedData(data)
    //         setSortOrder("asc")
    //     }
    //     else if (sortOrder === "asc") {
    //       setSortedData([...data].sort((a, b) => a[columnName] - b[columnName]));
    //       setSortOrder("desc");
    //     } else if(sortOrder==="desc"){
    //       setSortedData([...data].sort((a, b) => b[columnName] - a[columnName]));
    //       setSortOrder("");
    //     }
    //     // console.log(sortedData)
    //   };

    let filteredData= [];
    filteredData= data.filter((student)=> student.fullname.toLowerCase().includes(searchTerm.toLowerCase()))
    const records= filteredData.slice(firstIndex, lastIndex)
    
    let content=""
    if(isLoading){
        content= <Dimmer active inverted>
                    <Loader inverted content='Loading' inline='centered'/>
                </Dimmer>
    }
    else if(error){
        content= <Header as='h4' color="red" style={{padding:'2rem'}}>Error while loading student data!</Header>
    }
    else {
        content = records.map((student, index)=>{
          return <TableRow student={student} key={index}/>
        })
    }

    return(
        <>
            <Table 
                unstackable
                striped 
                padded
                compact
                size="large"
                color="blue" 
                style={{
                    margin:'auto',
                    marginTop:'1%',
                    marginBottom:'1%',
                    width:"95%",
                    overflowX:'scroll'
                }} 
            >
            <Table.Header
          color="blue" inverted
        >
          <Table.Row style={{height:'6.8vh'}}>
                <Table.HeaderCell >Roll Number</Table.HeaderCell>
                <Table.HeaderCell className="search-div">
                Name 
                <OutsideClickHandler onOutsideClick={()=>handleOutisdeClick()}>
                    <Button circular icon="search" color='blue'  style={{marginLeft:'1.1em'}} onClick={handleSearchClick}/>
                    {
                        searchBar && (
                        <Input icon='search' placeholder='Search by students name' name="searchTerm" value={searchTerm} onChange={handleSearchTerm}/>
                        )
                    }
                </OutsideClickHandler>
                    </Table.HeaderCell>
                    <Table.HeaderCell>Address</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Nationality</Table.HeaderCell>
                    <Table.HeaderCell>Branch</Table.HeaderCell>
                    <Table.HeaderCell>Date of Birth</Table.HeaderCell>
                    <Table.HeaderCell>Skills</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {content}
            </Table.Body>
        </Table>
        <Pagination prevPage={prevPage} nextPage={nextPage} total={data.length} cPage={currentPage} setCurrentPage={setCurrentPage} nPage={nPage} loadedData={data}/>
        <Export loadedData={data}/>
      </>
    )
}

export default TableMain;