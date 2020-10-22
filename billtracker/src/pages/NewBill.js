import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const currencies = [
  {
    value: 'once',
    label: 'One-Time',
  },
  {
    value: 'weekly',
    label: 'Weekly',
  },
  {
    value: 'bi-monthly',
    label: 'Bi-Monthly',
  },
  {
    value: 'monthly',
    label: 'Monthly',
  },
  {
    value: 'annually',
    label: 'Annually',
  }
];

export default function NewBill() {
  const classes = useStyles();
  const [frequency, setFreq] = React.useState('once');

  const handleChange = (event) => {
    setFreq(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
    <div className={classes.root}>
      <div>
        <TextField
          id="outlined-full-width"
          label="Name"
          style={{ margin: 8 }}
          placeholder="Name of Bill"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          label="Date"
          id="outlined-margin-none"
          defaultValue=""
          className={classes.textField}
          helperText="Some important text"
          variant="outlined"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Frequency"
          value={freqency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Select if this is recurring"
          variant="outlined"
        >
          {frequency.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          label="Dense"
          id="outlined-margin-dense"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="dense"
          variant="outlined"
        />
        <TextField
          label="Normal"
          id="outlined-margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="outlined"
        />
      </div>
    </div>
  </form>
  );
}