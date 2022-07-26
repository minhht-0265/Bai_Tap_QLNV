import axios from "axios";
import React, { Compoent,Component,useEffect, useState } from "react";
import {Table, Popconfirm, Button, Space, Form, Input} from "antd";
import {} from "lodash";
import { isEmpty } from "lodash";
import Navbar from '../../src/layouts/frontend/Navbar';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';

import { getDefaultNormalizer } from "@testing-library/react";
const Users = () => {
    

    const [gridData, setGridData] =  useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        loadData();
    },[])

    const loadData = async()=>{
        setLoading(true);
        const response=await axios.get("http://localhost:8000/api/users");
        setGridData(response.data);
        setLoading(false);
    }
    const dataWithAge = gridData.map((item)=>({
         ...item,
         age: Math.floor(Math.random() * 6) +20,
    }));

    const modifiedData = dataWithAge.map(({body, ...item})=> ({
        ...item,
        key: item.id,
        message: isEmpty(body) ? item.message : body,
    }));
    
    const columns = [
            {
            title: "ID",
            dataIndex: "id",
            },
            {
            title: "Name",
            dataIndex: "name",
            align: "center",
            
            editTable: true
            },
            {
            title:"Email",
            dataIndex: "email",
            align: "center",
            
            editTable: true
            },
            {
            title:"Role",
            dataIndex: "role",
            align: "center",
            
            editTable: true
            },
    ];
        
        return(
            <div className="User">
                <header className="User-header">
                <h4>
                   <Link to={'/add-user'} className="btn btn-primary btn-sm float-end"> Add User</Link>
                </h4>
                   <Table
                   dataSource={[modifiedData]}
                   columns={columns}
                   bordened
                   //loading={loading}
                   >
                   </Table> 
                </header>
            </div>
        );
    
}

export default Users