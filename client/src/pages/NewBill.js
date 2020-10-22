import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

const frequency = [
  {
    value: "once",
    label: "One-Time",
  },
  {
    value: "weekly",
    label: "Weekly",
  },
  {
    value: "bi-monthly",
    label: "Bi-Monthly",
  },
  {
    value: "monthly",
    label: "Monthly",
  },
  {
    value: "annually",
    label: "Annually",
  },
];

export default function NewBill() {
  const classes = useStyles();
  const [frequency, setFreq] = React.useState("once");

  const handleFreqChange = (event) => {
    setFreq(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-required"
          label="Name of Bill"
          margin="normal"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-required"
          label="Date"
          margin="normal"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-select-frequency"
          label="Frequency"
          value={freqency}
          onChange={handleFreqChange}
          helperText="Select if this is recurring"
          variant="outlined"
        >
          {frequency.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-margin-normal"
          label="Projected Amount"
          type="number"
          className={classes.textField}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          helperText="You can update this value later"
          variant="outlined"
        />
      </div>
    </form>
  );
}
