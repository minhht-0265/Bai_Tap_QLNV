import { Button, Checkbox, Form, Input, Select } from 'antd';
import React, {useState} from 'react';
import Navbar from '../../../layouts/frontend/Navbar';
import swal from 'sweetalert';
import { useNavigate,NavLink } from 'react-router-dom';
import axios from 'axios';
import { Typography } from 'antd';
const initialState = {
    name: '',
    email: '',
    password: '',
}
function Register(){
    const navigate = useNavigate();
    const [registerInput, setRegister] = useState(initialState)
    const handleInput = (e) =>{
        console.log(e.target)
        e.persist();
        setRegister({...registerInput,[e.target.name]:e.target.value });
    }
    const onFinish = (e) => {
        //e.preventDefault();
        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }
        axios.get('/sanctum/csrf-cookie').then(response =>{
            axios.post('/api/register', data).then(res =>{
                if(res.data.status === 200)
                {
                   localStorage.setItem('auth_token', res.data.token);
                   localStorage.setItem('auth_name', res.data.username);
                   swal("Success", res.data.message,"success");
                   navigate('/');
                }
                else
                {
                    setRegister({...registerInput, error_list: res.data.validation_errors}); 
                }
           
            });
        });
    }
 return(
    <div className='App'>
        <header className="App-header">
            <Form onFinish={onFinish}>
            <Form.Item name="name" label="Name" >
                <Input placeholder="name" name="name" onChange={handleInput} value={registerInput.name} className="form-control"/>
            </Form.Item>
            <Form.Item name="email" label="Email">
                <Input placeholder="email" name="email" onChange={handleInput} value={registerInput.email} className="form-control"/>
            </Form.Item>
            <Form.Item name="password" label="password">
                <Input placeholder="password" name="password" onChange={handleInput} value={registerInput.password} className="form-control"/>
            </Form.Item>
            <Form.Item >
               <Button type="primary" htmlType="submit">
                   Register
               </Button>
            </Form.Item>
            </Form>
        </header>
    </div>
 );
}
export default Register;
