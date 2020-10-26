import React from "react";
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="/" color="secondary">
        Bill Tracker
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};