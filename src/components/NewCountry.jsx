import React, { Component } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, Button } from '@mui/material';
 
 class NewCountry extends Component{
    state = {
        open: false,
        name: "",
    }
    handleOpen = () => {
        this.setState({open: true, name: ""});
    }
    handleClose = () => {
        this.setState({open: false});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name);
        this.setState({open: false});
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: [e.target.value]})
    }
    render(){
        const {open} = this.state;
        return (
             <div>
                 <Button variant='outlined' onClick={this.handleOpen} sx={{ mb:1 , bgcolor: "#ffffff"}}>+</Button>
                 <Dialog open={open} onClose={this.handleClose}>
                     <form onSubmit={ (e) => this.handleSubmit(e)}>
                        <DialogTitle>Add a Country</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Enter the name of a new country:
                            </DialogContentText>
                            <TextField
                                autoFocus
                                onChange={ this.handleChange }
                                margin="dense"
                                id="name"
                                name="name"
                                value={ this.state.name }
                                label="Country Name"
                                type="text"
                                fullWidth
                                autoComplete="off"
                                autoCapitalize="off"
                                variant="standard"
                            />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.handleClose}>Cancel</Button>
                        <Button disabled={ this.state.name.toString().trim().length === 0 } type="submit">Save</Button>
                        </DialogActions>
                     </form>
                 </Dialog>
             </div>
        );
    }
}

export default NewCountry