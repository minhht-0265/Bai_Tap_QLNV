import React from 'react'
import { useState } from 'react'
const initialState = {
    name: '',
    email: '',
    password: '',
    phone_number: '',
    address: '',
    role: '',
}
function add() {
    const[state,setState]=useState(initialState)
    const handleInput = (e) => {
        console.log(e.target)
        setState({...state,[e.target.name]:e.target.value})
    }
    const onFinish = async (e) => {
        //e.preventDefault();
        
        // const res = await axios.post('http://localhost:8000/api/add-users', state);
        // if(res.data.status === 200)
        // {
        //     console.log(res.data.message);
        //     this. setState={
        //         name: '',
        //         email: '',
        //         password: '',
        //         phone_number: '',
        //         address: '',
        //         role: '',
        //        };
        // }
        console.log(state);
    }
    return (
        <div className="App">
            <header className="App-header">
                <Form onFinish={onFinish} >
                    <Form.Item label="Name" name="name">
                        <Input type="text" placeholder="Name" name="name" className="form-control" value={state.name} onChange={handleInput}></Input>
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input type="text" placeholder="Email" name="email" className="form-control" value={state.email} onChange={handleInput}></Input>
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="text" placeholder="Password" name="password" className="form-control" value={state.password} onChange={handleInput}></Input>
                    </Form.Item>
                    <Form.Item label="Phone_number" name="phone_number">
                        <Input type="text" placeholder="Phone_number" name="phone_number" className="form-control" value={state.phone_number} onChange={handleInput}></Input>
                    </Form.Item>
                    <Form.Item label="Address" name="address">
                        <Input type="text" placeholder="Address" name="address" className="form-control" value={state.address} onChange={handleInput}></Input>
                    </Form.Item>
                    <Form.Item label="Role" name="role">
                        <Input type="text" placeholder="role" name="role" className="form-control" value={state.role} onChange={handleInput}></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" value="insert" className="btn btn-primary mt-5">Add</Button>
                    </Form.Item>
                </Form>
            </header>
        </div>
    )
}

export default add