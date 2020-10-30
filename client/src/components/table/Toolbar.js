import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Tooltip,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import {
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  Button,
  IconButton,
  Container,
  Fab,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import FilterListIcon from "@material-ui/icons/FilterList";
import HistoryIcon from "@material-ui/icons/History";
import API from "../../utils/API";

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

//Our hidden toolbar that appears when a bill is selected viacheckbox
export default Toolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  
function deleteBill(props) {
  console.log(props);
  API.deleteBill(props._id)
    .then((res) => {
      window.location.reload();
    })
    .catch((err) => console.log(err));
}

function paidBill(props) {
  API.updateBill(props._id)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h5"
          id="tableTitle"
          component="div"
        >
          Upcoming Bills
        </Typography>
      )}

      {numSelected > 0 ? (
        <>
          <Tooltip title="Paid">
            <IconButton
              aria-label="Paid"
              color="primary"
              size="small"
              onClick={() => paidBill()}
            >
              <HistoryIcon fontSize="med" /> Paid
            </IconButton>
          </Tooltip>

          <Tooltip title="delete">
            <IconButton
              aria-label="delete"
              color="secondary"
              size="small"
              onClick={() => deleteBill()}
            >
              <DeleteForeverIcon /> Delete
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

Toolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};