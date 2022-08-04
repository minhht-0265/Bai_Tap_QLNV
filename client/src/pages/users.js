import axios from "axios";
import React, { Component,useEffect, useState } from "react";
import {Table, Popconfirm, Button, Space, Form, Input} from "antd";
import Searchuser from "../components/Search/index";
import {} from "lodash";
import { isEmpty } from "lodash";
import Navbar from '../../src/layouts/frontend/Navbar';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';


function Users ()  {
    
    const [loading,setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])
    
    const[data,setData]=useState([])
    
    useEffect(()=>{
        fetchRecords()
    },[])
    
    async function search(key)
    {
       console.log(key)
       let result = await fetch("http://localhost:8000/api/search/"+key);
       result=await result.json();
       console.log(result);
       setData(result);
       fetchRecords();
    }
    const deleteUser = (e,id) =>{
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.delete(`/api/delete-user/${id}`).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                thisClicked.closest("tr").remove();
            }
            else if(res.data.status === 404)
            {
                swal("Success",res.data.message,"success");
                thisClicked.innerText = "Delete";
            }
        });
    }
    const columns = [
            {
            key:"1",
            title: "ID",
            dataIndex: "id",
            render: (value,item) => (
                //{console.log(value,item)}
                <>{item.id}</>
            )
            },
            {
            key:"2",
            title: "Name",
            dataIndex: "name",
            align: "center",
            key: 'name', 
            render: (value,item) => (
                <div>{item.name}</div>
            )
            },
            {
            key:"3",
            title:"Email",
            dataIndex: "email",
            align: "center",
            render: (value,item) => (
                <div>{item.email}</div>
            )
            },
            {
                key:"4",
                title:"Phone_number",
                dataIndex: "phone_number",
                align: "center",
                render: (value,item) => (
                    <div>{item.phone_number}</div>
                )
            },
            {
                key:"5",
                title:"Address",
                dataIndex: "address",
                align: "center",
                render: (value,item) => (
                    <div>{item.address}</div>
                )
            },
            
            {
                key:"6",
                title:"Role",
                dataIndex: "role",
                align: "center",
                render: (value,item) => (
                    <div>{item.role}</div>
                )
            
            },
            {
                key:"7",
                title:"Action ",
                dataIndex: "action",
                align: "center",
                render: (_,item) => (
                    <>
                    <Button>
                    <Link to={`edit-user/${item.id}`} className="btn btn-success btn-sm "> Edit</Link>
                    </Button>
                    <Button type="button" onClick={(e)=> deleteUser(e,item.id)} className="btn btn-danger btn-sm float-end">Delete</Button>
                    </>
                ),
            },
    ];   
    const fetchRecords=()=>{
        fetch("http://localhost:8000/api/users ").then(
            (res) => {
            res.json().then((response) => {
                setDataSource(response.users)
                //console.log(response.users);  
            });
          }
        );
    };

        return(
            <div>
            <Navbar></Navbar>
            <h1>Search User</h1>
                <br/>
                <input type="text" onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Search User" />
             <div className="User">
                <header className="User-header">
                <h4>
                   <Link to={'/add-user'} className="btn btn-primary btn-sm float-end"> Add User</Link>
                </h4>
                   <Table
                  dataSource={dataSource}
                   columns={columns}
                   bordened
                   loading={loading}
                   >
                   </Table> 
                </header>
             
            </div>
            </div>
        );
    
}

export default Users