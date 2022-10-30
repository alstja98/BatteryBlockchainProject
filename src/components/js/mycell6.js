import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Upload_Date, Cell_Voltages, Pack_Voltage, Pack_Current,Vout_Chgr,Cell_Temperatures) {
  return {Upload_Date, Cell_Voltages, Pack_Voltage, Pack_Current,Vout_Chgr,Cell_Temperatures};
}

const rows = [
  createData('2022/10/30',3, 6.0, 24, 4.0, 2.5),
  createData('2022/10/29',4, 9.0, 37, 4.3, 3),
  createData('2022/10/27',3, 16.0, 24, 6.0,3),
  createData('2022/10/25',4, 3.7, 67, 4.3,3,),
  createData('2022/10/10',2, 16.0, 49, 3.9,3),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
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
          {rows.map((row) => (
            <StyledTableRow key={row.Upload_Date}>
              <StyledTableCell component="th" scope="row">
                {row.Upload_Date}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Cell_Voltages}</StyledTableCell>
              <StyledTableCell align="right">{row.Pack_Voltage}</StyledTableCell>
              <StyledTableCell align="right">{row.Pack_Current}</StyledTableCell>
              <StyledTableCell align="right">{row.Vout_Chgr}</StyledTableCell>
              <StyledTableCell align="right">{row.Cell_Temperatures}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}