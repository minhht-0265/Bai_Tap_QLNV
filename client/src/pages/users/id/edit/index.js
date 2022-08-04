import React from 'react'
import { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { Button, Form, Input} from "antd";
import axios from "axios";
import swal from 'sweetalert';
const initialState = {
    name: '',
    email: '',
    password: '',
    phone_number: '',
    address: '',
    role: '',
}
 function Edit(props) {
    const[state,setState]=useState(initialState)
    const handleInput = (e) => {
        console.log(e.target)
        setState({...state,[e.target.name]:e.target.value})
    }
    const [form]= Form.useForm()
    const {id} = useParams();
    useEffect(()=>{
        try{
        const user_id=id;
        console.log(user_id);
        axios.get(`api/edit-user/${user_id}`).then(res=>{
            console.log(res);
            setState(res.data.user);
            
        }); }catch (error){
            console.log(error)
        }
    },[id]);
    useEffect(()=>{
        form.setFieldsValue({
            name:state.name,
            email:state.email,
            password:state.password,
            phone_number:state.phone_number,
            address:state.address,
            role:state.role,
        })
    },[state])
    const onFinish = async (e) => {
        //e.preventDefault();
        const user_id=id;
        const data = {
            name: state.name,
            email:state.email,
            password:state.password,
            phone_number:state.phone_number,
            address:state.address,
            role:state.role,
        };
        axios.put(`/api/update-user/${user_id}`, data).then(res=>{
                console.log(res); 
        });
    }
    return (
        <div className="App">
            <header className="App-header">
                <Form onFinish={onFinish} form={form} >
                    <Form.Item label="Name" name="name">
                        <Input type="text" placeholder="Name" name="name" className="form-control" value={state.name} onChange={handleInput} ></Input>
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input type="text" placeholder="Email" name="email" className="form-control" value={state.email} onChange={handleInput} ></Input>
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="text" placeholder="Password" name="password" className="form-control" value={state.password} onChange={handleInput} ></Input>
                    </Form.Item>
                    <Form.Item label="Phone_number" name="phone_number">
                        <Input type="text" placeholder="Phone_number" name="phone_number" className="form-control" value={state.phone_number} onChange={handleInput} ></Input>
                    </Form.Item>
                    <Form.Item label="Address" name="address">
                        <Input type="text" placeholder="Address" name="address" className="form-control" value={state.address} onChange={handleInput} ></Input>
                    </Form.Item>
                    <Form.Item label="Role" name="role">
                        <Input type="text" placeholder="role" name="role" className="form-control" value={state.role} onChange={handleInput} ></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" value="insert" className="btn btn-primary mt-5">Update</Button>
                    </Form.Item>
                </Form>
            </header>
        </div>
    );

}

export default Edit;