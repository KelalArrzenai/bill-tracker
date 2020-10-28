import React from "react";
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import TableCell from '@material-ui/core/TableCell';

export default function TableRow () {
  return (
    <TableRow
      hover
      onClick={(event) => handleClick(event, row.name)}
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.name}
      selected={isItemSelected}
    >
      <TableCell padding="checkbox">
        <Checkbox
          checked={isItemSelected}
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </TableCell>
      <TableCell component="th" id={labelId} scope="row" padding="none">
        {row.name}
      </TableCell>
      <TableCell align="right">{row.amount}</TableCell>
      <TableCell align="right">{row.date}</TableCell>
      <TableCell align="right">{row.frequency}</TableCell>
    </TableRow>
  );
}