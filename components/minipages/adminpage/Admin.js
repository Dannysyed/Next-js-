import { Button, Card, FormControl, InputLabel, TextField } from '@mui/material'
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
        <Card elevation={6} className={styles.form}>


            <FormControl style={{ margin: '1rem 18rem' }} >

                <TextField
                    style={{ marginBottom: 20, width: 300, backgroundColor: '#EBF5F8' }}

                    sx={{ margin: 2 }} fullWidth label="TITLE" id="fullWidth" />
                <TextField
                    style={{ marginBottom: 20, width: 300, backgroundColor: '#EBF5F8', }}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ margin: 2 }} fullWidth label="Description" id="fullWidth" />
                <InputLabel id="demo-select-small">Age</InputLabel>
                <Select
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
                </Select>
                <input type={"file"} style={{ padding: '20px' }}></input>
                <Button style={{ backgroundColor: 'black', color: 'white', textTransform: 'none', borderRadius: '10px', width: '16rem', marginLeft: '30px' }} variant="contained" onClick={null}>Submit</Button>
            </FormControl>



        </Card>
    )
}

export default Adminpage