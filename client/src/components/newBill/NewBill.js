import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, Select, Fab, Button, Modal, InputAdornment, MenuItem, TextField, Container } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import API from '../../utils/API';
import NewBill from '../newBill/NewBill';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function addBill(props) {
  console.log(props);
  API.saveBill(props._id)
  .then(res => {
    window.location.reload();
  })
  .catch(err => console.log(err))
}

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [frequency, setFreq] = React.useState('');

  let date;
  const handleChange = (event) => {
    setFreq(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        onClick={handleOpen}
        color="primary"
        size="large"
        variant="extended"
        className={classes.extended}>
        <AddCircleOutlineIcon className={classes.extendedIcon}/>
        New Bill
      </Fab>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
      <Container maxWidth="sm">
        <FormControl style={modalStyle} className={classes.paper}>
        <TextField
          id="outlined-required"
          label="Name of Bill"
          margin="normal"
          className={classes.textField}
          variant="outlined"
        />
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Due Date</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={date}
          onChange={handleChange}
          label="Date"
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={21}>21</MenuItem>
          <MenuItem value={22}>22</MenuItem>
          <MenuItem value={23}>23</MenuItem>
          <MenuItem value={24}>24</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={26}>26</MenuItem>
          <MenuItem value={27}>27</MenuItem>
          <MenuItem value={28}>28</MenuItem>
          <MenuItem value={29}>29</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={31}>31</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Frequency</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={frequency}
          onChange={handleChange}
          label="Frequency"
        >
          <MenuItem value={1}>Once</MenuItem>
          <MenuItem value={7}>Weekly</MenuItem>
          <MenuItem value={30}>Monthly</MenuItem>
          <MenuItem value={365}>Annually</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="outlined-margin-normal"
        label="Projected Amount"
        type="number"
        className={classes.textField}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        helperText="You can update this value later"
        variant="outlined"
      />
    <Fab
      onClick={() => addBill()}
      variant="extended"
      color="primary"
      size="large"
      className={classes.extended}>
      <AddCircleOutlineIcon className={classes.extendedIcon} />
      {"  "}Save
    </Fab>
    </FormControl>
    </Container>
      </Modal>
    </div>
  );
}
