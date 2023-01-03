import React, {useState} from "react";
import styles from './New.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from '@mui/material/Button';

const New = props => {

    const formHandler = e =>{
        e.preventDefault();
        const newObject = {
            name,
            handle,
            email,
            data
        }
        props.onReceivingNewData(newObject);
        setName("")
        setHandle("")
        setEmail("")
        setData("")
    }

    const [name,setName] = useState("");
    const [handle,setHandle] = useState("");
    const [email,setEmail] = useState("");
    const [data,setData] = useState("");


    return(
        <React.Fragment>
            <form onSubmit={formHandler}>
                <div className={styles['new-container']}>
                    <div className={styles["box-container"]}>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '70vw' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                            <TextField id="outlined-basic" value={name} onChange={e => setName(e.target.value)} label="Name" variant="outlined"/>
                            </Box>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '70vw' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                            <TextField id="outlined-basic" value={handle} onChange={e => setHandle(e.target.value)} label="@Handle" variant="outlined"/>
                            </Box>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '70vw' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                            <TextField id="outlined-basic" value={email} onChange={e => setEmail(e.target.value)} label="Email" variant="outlined"/>
                            </Box>

                            <TextareaAutosize
                            minRows={65}
                            maxRows={90}
                            style={{width:"70vw", marginTop:"2%"}}
                            value={data} onChange={e => setData(e.target.value)}
                            />

                            <Button type="submit" variant="contained" color="success" style={{marginTop:"3%"}}>
                                Success
                            </Button>
                        </div>
                </div>
            </form>
        </React.Fragment>
    );
}

export default New;