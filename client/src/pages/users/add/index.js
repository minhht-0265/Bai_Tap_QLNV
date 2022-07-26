import "antd/dist/antd.css";
import React, {Component} from 'react';
import axios from 'axios';

import {form,Input,Button, Form} from "antd"


class Adduser extends Component{

    state = {
        name: '',
        email: '',
        password: '',
        phone_number: '',
        address: '',
        role: '',
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    saveUser = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:8000/api/add-user', this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            this.setState({
                name: '',
                email: '',
                password: '',
                phone_number: '',
                address: '',
                role: '',
               });
        }
    }
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <Form onSubmit={this.saveUser} >
                        <Form.Item label="Name" name="name">
                            <Input type="text" placeholder="Name" className="form-control" value={this.state.name} onChange={this.handleInput}></Input>
                        </Form.Item>
                        <Form.Item label="Email" name="email">
                            <Input type="text" placeholder="Email" className="form-control" value={this.state.email} onChange={this.handleInput}></Input>
                        </Form.Item>
                        <Form.Item label="Password" name="password">
                            <Input type="text" placeholder="Password" className="form-control" value={this.state.password} onChange={this.handleInput}></Input>
                        </Form.Item>
                        <Form.Item label="Phone_number" name="phone_number">
                            <Input type="text" placeholder="Phone_number" className="form-control" value={this.state.phone_number} onChange={this.handleInput}></Input>
                        </Form.Item>
                        <Form.Item label="Address" name="address">
                            <Input type="text" placeholder="Address" className="form-control" value={this.state.address} onChange={this.handleInput}></Input>
                        </Form.Item>
                        <Form.Item label="Role" name="role">
                            <Input type="text" placeholder="role" className="form-control" value={this.state.role} onChange={this.handleInput}></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button type="submit" value="insert" className="btn btn-primary mt-5">Add</Button>
                        </Form.Item>
                    </Form>
                </header>
            </div>
        );
    }
}
export default Adduser;