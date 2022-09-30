import { Button, Card, FormControl, InputLabel, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import styles from './admin.module.css'
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios'
import BaseUrl from '../../../utils/config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import { CircularProgress } from '@mui/material'
import Data_context from '../../../store/context';
import { NextResponse } from 'next/dist/server/web/spec-extension/response'
import { useEffect } from 'react';


const Adminpage = (req) => {
    let route = useRouter()
    let con = useContext(Data_context)
    let token_data = con.token
    console.log(con.islogged)
    useEffect(
        () => {
            if (con.islogged === false) {
                NextResponse.redirect('http://localhost:3000/login')
                route.push('/login')
            }
        }
        , [])

    let [title, setTitle] = useState('')
    let [content, setContent] = useState('')
    // let token_data
    const notify = (text) => toast.success(text, {
        position: 'bottom-center'
    });
    let handleSubmit = () => {
        let json_data = {}
        json_data.title = title
        json_data.content = content
        let data = JSON.stringify(json_data);
        console.log(data)

        axios.post(BaseUrl + 'posts', data, {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token_data}`
            }
        }).then(res => {
            console.log(res)
            notify(res.data.message)
        })
    }
    // const [age, setAge] = React.useState('');

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };
    return (
        <Card elevation={6} className={styles.form}>


            <FormControl style={{ margin: '1rem 18rem' }} >

                <TextField
                    style={{ marginBottom: 20, width: 300, backgroundColor: '#EBF5F8' }}
                    onChange={(e) => setTitle(e.target.value)}

                    sx={{ margin: 2 }} fullWidth label="TITLE" id="fullWidth" />
                <TextField
                    style={{ marginBottom: 20, width: 300, backgroundColor: '#EBF5F8', }}
                    onChange={(e) => setContent(e.target.value)}
                    sx={{ margin: 2 }} fullWidth label="Content" id="fullWidth" />
                <InputLabel id="demo-select-small">Posts</InputLabel>
                {/* <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select> */}
                {/* <input type={"file"} style={{ padding: '20px' }}></input> */}
                <Button style={{ backgroundColor: 'black', color: 'white', textTransform: 'none', borderRadius: '10px', width: '16rem', marginLeft: '30px' }} variant="contained" onClick={handleSubmit}>Submit</Button>
            </FormControl>



        </Card>
    )
}

export default Adminpage