import React from "react";
import {
  StyledTableCell,
  StyledTableCell,
  Checkbox
} from "@material-ui/core";

import API from "../../utils/API";
import NewBill from "../newBill/NewBill";
import BillsToolbar from "./Toolbar";
import BillsTableHead from "./TableHead";
import { useUserContext } from "../../utils/Context";

export default function BillsRow() {
  return (
    <StyledTableRow
      hover
      onClick={(event) => handleClick(event, row.name)}
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.name}
      selected={isItemSelected}
    >
      <StyledTableCell padding="checkbox">
        <Checkbox
          checked={isItemSelected}
          inputProps={{ "aria-labelledby": labelId }}
        />
      </StyledTableCell>
      <StyledTableCell
        component="th"
        id={labelId}
        scope="row"
        padding="none"
      >
        {row.name}
      </StyledTableCell>
      <StyledTableCell align="right">$ {row.amount}</StyledTableCell>
      <StyledTableCell align="right">{row.date}</StyledTableCell>
    </StyledTableRow>
  );
}