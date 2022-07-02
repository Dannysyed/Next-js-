import { Button, Card, FormControl, TextField } from '@mui/material'
import React from 'react'
import styles from './loginpage.module.css'
const LoginPage = () => {
    return (
        <div className={styles.login}>
            <div className={styles.login1}>

                <Card elevation={7} className={styles.page}>
                    <div style={{ color: '#224957' }}>
                        <h1>Sign in</h1>
                    </div>
                    <FormControl>
                        <TextField
                            style={{ marginBottom: 40, width: 300, backgroundColor: '#20DF7F' }}
                            onChange={(e) => setUserName(e.target.value)}
                            sx={{ margin: 2 }} id="outlined-basic" label="Login" variant="outlined" />
                        <TextField
                            style={{ marginBottom: 40, width: 300, backgroundColor: '#20DF7F' }}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{ margin: 2 }} id="outlined-basic" label="Password" variant="filled" />
                        <Button style={{ backgroundColor: '#224957', color: '#FBFAF5', textTransform: 'none', borderRadius: '5px', width: '30rem', marginLeft: '15px', padding: 10 }} variant="contained">Sign in</Button>

                    </FormControl>

                </Card>
            </div>
            <div className={styles.img}>
                <span ></span>
            </div>
        </div>
    )
}

export default LoginPage