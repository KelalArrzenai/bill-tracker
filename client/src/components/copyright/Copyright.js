import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="4B7631" href="https://material-ui.com/">
        Bill Tracker
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};