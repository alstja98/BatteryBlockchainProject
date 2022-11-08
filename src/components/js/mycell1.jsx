import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function CustomizedTables(data) {
  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  function createData([
    Cell_Voltages,
    Cell_Temperatures,
    Pack_Voltage,
    Pack_Current,
    Vout_Chgr,
    Upload_Date,
  ]) {
    return {
      Upload_Date,
      Cell_Voltages,
      Pack_Voltage,
      Pack_Current,
      Vout_Chgr,
      Cell_Temperatures,
    };
  }
  const rows = [];
  data['data'].map(row => rows.push(createData(row)));
  // alert(data['data'] + 'cell1' + JSON.stringify(rows));
  const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Upload_Date</StyledTableCell>
              <StyledTableCell align="right">Cell_Voltages</StyledTableCell>
              <StyledTableCell align="right">Pack_Voltage</StyledTableCell>
              <StyledTableCell align="right">Pack_Current</StyledTableCell>
              <StyledTableCell align="right">Vout_Chgr</StyledTableCell>
              <StyledTableCell align="right">Cell_Temperatures</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 2
              ? rows.map(row => (
                  <StyledTableRow key={row.Upload_Date}>
                    <StyledTableCell component="th" scope="row">
                      {row.Upload_Date}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.Cell_Voltages}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.Pack_Voltage}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.Pack_Current}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.Vout_Chgr}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.Cell_Temperatures}
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              : 'wait...'}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
