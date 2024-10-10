import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField} from "@mui/material";
import {useState} from "react";

export default function AddressForm(props) {
    // 1. open
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setAddress({zip: '', addr: ''})
        setOpen(true)
    }
    const closeHandler = () => {
        setOpen(false)
    }

    // 2. address
    const [address, setAddress] = useState({zip: '', addr: ''})
    const changeHandler = (e) => {
        setAddress({...address, [e.target.name]:e.target.value})
    }

    // 3. save()
    const saveHandler = () => {
        props.addAddress(address)
        closeHandler()
    }
    return (
        <div>
            <Button variant='contained' onClick={openHandler}>입력</Button>
            <Dialog open={open}>
                <DialogTitle>새 주소</DialogTitle>
                <DialogContent>
                    <Stack spacing={2}>
                    <TextField
                        label='우편번호'
                        name='zip'
                        autoFocus
                        variant="standard"
                        value={address.zip}
                        onChange={changeHandler}
                    /><br/>
                    <TextField
                        label='주소'
                        name='addr'
                        autoFocus
                        variant="standard"
                        value={address.addr}
                        onChange={changeHandler}
                    /><br/>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <button onClick={saveHandler}>저장</button>
                    <button onClick={closeHandler}>취소</button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
