import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from "@mui/material";
import {useState} from "react";
import {REST_URL} from "../constants.js";
import EditIcon from '@mui/icons-material/Edit'

export default function AddressEdit(props) {
    // 1. open
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setAddress({zip: props.data.row.zip, addr:props.data.row.addr})
        setOpen(true)
    }
    const closeHandler = () => {
        setOpen(false)
    }

    // 2. address
    const [address, setAddress] = useState({id: '', zip: '', addr: ''})
    const changeHandler = (e) => {
        setAddress({...address, [e.target.name]:e.target.value})
    }

    // 3. edit()
    const editHandler = () => {
        props.editAddress(address, props.data.id)
        setAddress({...address, zip: '', addr: ''})
        closeHandler()
    }
    return (
        <div>
            {/*<Button variant='contained' onClick={openHandler}>편집</Button>*/}
            <IconButton onClick={openHandler}>
                <EditIcon color='primary'/>
            </IconButton>
            <Dialog open={open}>
                <DialogTitle>새 주소</DialogTitle>
                <DialogContent>
                    <input
                        placeholder='우편번호'
                        name='zip'
                        value={address.zip}
                        onChange={changeHandler}
                    /><br/>
                    <input
                        placeholder='주소'
                        name='addr'
                        value={address.addr}
                        onChange={changeHandler}
                    /><br/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={editHandler}>수정</Button>
                    <Button onClick={closeHandler}>취소</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}