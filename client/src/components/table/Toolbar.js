import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import {
  Tooltip,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import FilterListIcon from "@material-ui/icons/FilterList";
import HistoryIcon from "@material-ui/icons/History";
import API from "../../utils/API";
import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';
import useUserContext from "../../utils/Context";
 
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
export default function BillsToolbar (props) {
  const classes = useToolbarStyles();
  const { numSelected, selected } = props;
  // const [state, dispatch] = useUserContext();

  const dayjs = require('dayjs');
  // var currDay = dayjs();
  // const curDueDate = dayjs().format('MMMM DD');

  // function weeklyRecur(d) {
  //   const addWeek = dayjs(d).add(7, 'day').format('MMM-DD');
  //   return addWeek;
  // }

  // function fortnightlyRecur(d) {
  //   const addFortnight = dayjs(d).add(15, 'day').format('MMM-DD');
  //   return addFortnight;
  // }

  // function monthlyRecur(d) {
  //   const addMonth = dayjs(d).add(1, 'month').format('MMM-DD');
  //   return addMonth;
  // }

  // function setNewDate(state){
  //   let currDate = state.date;
  //   if(state.frequency === "once"){
  //     //delete from table
  //   }else if(state.frequency === 7){
  //     var newDate = weeklyRecur(currDate);
  //     return newDate;
  //   }else if(state.frequency === 15){
  //     var newDate = fortnightlyRecur(currDate);
  //     return newDate;
  //   }else if(state.frequency === 30){
  //     var newDate = monthlyRecur(currDate);
  //     return newDate;
  //   }
  //   console.log(newDate);
  // }

  function deleteBill(props) {
    console.log(selected);
    API.deleteBill(props._id)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }
  
  function notify (props) {
    addNotification({
      title: 'Yay! This bill has been paid',
      message: 'The next due date for ...' ,
      native: true // when using native, your OS will handle theming.
    });
  };

  function paidBill(props) {
    // setNewDate(props);
    notify(props);
    console.log(props)
    // API.updateBill(props._id)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
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
              onClick={() => deleteBill(props._id)}
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

BillsToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};