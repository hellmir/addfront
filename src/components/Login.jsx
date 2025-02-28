import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import {Snackbar} from "@mui/material";
import { useState } from "react";
import { REST_URL } from "../constants";
import AddressList from "./AddressList";
function Login() {
    //스낵바
    const [open, setOpen] = useState(false)
    const [user, setUser] = useState([{
        username: '',
        password: ''
    }])
    const [auth, setAuth] = useState(false)
    const changeHandler = e => {
        setUser({...user, [e.target.name]:e.target.value})
    }
    const login = () => {
        fetch(REST_URL + 'login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(response => {
            const jwtToken = response.headers.get('Authorization')
            // console.log(`jwtToken ${jwtToken}`)
            if (jwtToken !== null) {
                sessionStorage.setItem('jwt', jwtToken)
                setAuth(true)
            } else {
                //스낵바
                setOpen(true)
            }
        })
        //.catch(err => { console.log(err), setOpen(true)})
    }
    if (auth) {
        return <AddressList />
    } else
        return (
            <div>
                <Stack m={4} spacing={1} alignItems="center">
                    <TextField label="아이디" name="username" onChange={changeHandler}></TextField>
                    <TextField label="password" type="비밀번호" name="password" onChange={changeHandler}></TextField>
                    <Button color="primary" variant="outlined" onClick={login}>
                        로그인
                    </Button>
                </Stack>
                <Snackbar open={open}
                          autoHideDuration={3000}
                          onClose={() => setOpen(false)}
                          message="로그인 실패! 아이디/비밀번호를 확인하셈" />
            </div>
        );
}
export default Login
