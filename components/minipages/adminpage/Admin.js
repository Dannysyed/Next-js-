import { Button, FormControl, InputLabel, TextField } from '@mui/material'
import React from 'react'
import styles from './admin.module.css'
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Adminpage = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className={styles.form}>


            <FormControl >
            </FormControl>



        </div>
    )
}

export default Adminpage