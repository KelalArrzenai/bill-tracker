import React, { useState } from "react";
import { useUserContext } from "../../utils/Context";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  Modal,
  MenuItem,
  TextField,
  Container,
  IconButton,
  Grid,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import API from "../../utils/API";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
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


export default function NewBill(props) {
  const dayjs = require('dayjs');
  const onClose = props.onClose;
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({});
  const [state, dispatch] = useUserContext();
  const [rows, setRows] = useState([]);

  function addBill(props) {
    console.log(props);
    return API.saveBill({...props})
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  function getUserBills(){
    API.getBills()
      .then(results => {
        console.log(results.data);
        const tempRows = rows.concat(results.data);
        setRows(tempRows)
      })
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  function handleSubmit() {
    //grab the userID and put in newbill obj
    dispatch({ type: "set", data: form });
    addBill(form)
    .then(() => {
      getUserBills();
      handleClose();
    }
    )
  }

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if(name === "date"){
      value = dayjs(value).format('MMM-DD-YYYY');
    }

    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <IconButton
        aria-label="Paid"
        color="primary"
        size="small"
        onClick={handleOpen}
      >
        <AddCircleOutlineIcon fontSize="small" /> New Bill
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Container maxWidth="sm">
        <FormControl style={modalStyle} className={classes.paper}>
          <Typography component="h1" variant="h4" color="secondary">
          Create a New Bill
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => handleChange(e)}
                id="outlined-required"
                label="Name of Bill"
                name="name"
                margin="normal"
                required
                fullWidth
                className={classes.textField}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  id="datetime-local"
                  label="Select Date"
                  type="date"
                  name="date"
                  format="MM/DD"
                  required
                  fullWidth
                  onChange={(e) => handleChange(e)}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
            </Grid>

            <Grid item xs={12}>
                <Select
                  onChange={(e) => handleChange(e)}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Frequency"
                  variant="outlined"
                  name="frequency"
                  className={classes.selectEmpty}
                  inputProps={{ 'aria-label': 'Without label' }}
                  displayEmpty
                  required
                  fullWidth
                >
                <InputLabel id="demo-simple-select-label">Frequency</InputLabel>
                  <MenuItem value="" disabled > </MenuItem>
                  <MenuItem value={"once"}>Once</MenuItem>
                  <MenuItem value={"weekly"}>Weekly</MenuItem>
                  <MenuItem value={"bi-monthly"}>Bi-Monthly</MenuItem>
                  <MenuItem value={"monthly"}>Monthly</MenuItem>
                </Select>
            </Grid>

            <Grid item xs={12}>
              <TextField
                onChange={(e) => handleChange(e)}
                id="outlined-margin-normal"
                label="Projected Amount"
                type="number"
                name="amount"
                className={classes.textField}
                variant="outlined"
                required
                fullWidth
                // helperText="You can update this value later"
              />
            </Grid>

            <IconButton
              onClick={() => handleSubmit()}
              variant="extended"
              color="primary"
              size="large"
              className={classes.extended}
            >
              <AddCircleOutlineIcon className={classes.extendedIcon} />
              Save
            </IconButton>
          </Grid>
      </FormControl>
      </Container>
      </Modal>
    </div>
  );
}
