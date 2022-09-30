import { Button, Card, FormControl, TextField } from '@mui/material'
import React, { useState } from 'react'
import styles from './loginpage.module.css'
import axios from 'axios'
import BaseUrl from '../../../utils/config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import { CircularProgress } from '@mui/material'
import { useContext } from 'react'
import Data_context from '../../../store/context'
const LoginPage = (req) => {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [tokenData, setTokenData] = useState('')
    let [loading, setloading] = useState(false)
    let con = useContext(Data_context)
    let router = useRouter()
    console.log(req.url, 'hei heo')
    console.log(email, password)
    const notify = (text) => toast.success(text, {
        position: 'bottom-center'
    });
    // let SubmitHandle = () => {
    //     let json_data = {}
    //     json_data.email = email
    //     json_data.password = password
    //     json_data.name = "demo"
    //     let data = JSON.stringify(json_data);
    //     console.log(data)

    //     axios.post(BaseUrl + 'users', data, {
    //         headers: {
    //             // Overwrite Axios's automatically set Content-Type
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => {
    //         console.log(res)
    //         notify(res.data.message)
    //     })


    // }
    let SubmitHandle = () => {
        setloading(true)
        let json_data = {}
        json_data.email = email
        json_data.password = password
        let data = JSON.stringify(json_data);
        console.log(data)

        axios.post(BaseUrl + 'login', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res)
            notify(res.data.message)
            setloading(false)
            if (res.data.token) {
                setTokenData(res.data.token)
                setTimeout(() => {

                    router.push('/admin')
                    setloading(false)
                    con.login()
                }, 1000);


            }
            else {
                setloading(false)

            }
        }).finally(err => {
            setTimeout(() => {

                setloading(false)
            }, 1000);

        })


    }
    console.log(tokenData)
    return (
        <div className={styles.login}>
            <div className={styles.login1}>

                <Card elevation={7} className={styles.page}>
                    <div style={{ color: '#224957' }}>
                        <h1>Sign in</h1>
                    </div>
                    <FormControl>
                        <TextField
                            style={{ marginBottom: 40, width: 300, backgroundColor: '#a3ddc0' }}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ margin: 2 }} id="outlined-basic" label="Email" variant="outlined" />
                        <TextField
                            style={{ marginBottom: 40, width: 300, backgroundColor: '#a3ddc0' }}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{ margin: 2 }} id="outlined-basic" label="Password" variant="outlined" />
                        <Button style={{ backgroundColor: '#224957', color: '#FBFAF5', textTransform: 'none', borderRadius: '5px', width: '30rem', marginLeft: '15px', padding: 10 }} variant="contained" onClick={SubmitHandle}>Sign in{loading && <CircularProgress sx={{ color: 'white', marginLeft: '5px' }} size={20} />} </Button>

                    </FormControl>
                    <ToastContainer />
                </Card>
            </div>
            <div className={styles.img}>
                <span ></span>
            </div>
        </div>
    )
}

export default LoginPage