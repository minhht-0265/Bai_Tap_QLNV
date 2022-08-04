import React, { Component,useEffect, useState } from "react";

import { Button,Table} from "antd";

import axios from "axios";


function Searchuser(){
    
    const[data,setData]=useState([])
    
    async function search(key)
    {
       console.log(key)
       let result = await fetch("http://localhost:8000/api/search/"+key);
       result=await result.json();
       console.log(result);
       setData(result)
    }
    return (
        <div>
            <div className="col-sm-6 offset-sm-3">
                <h1>Search User</h1>
                <br/>
                <input type="text" onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Search User" />
            </div>
        </div>
    )
}

export default Searchuser