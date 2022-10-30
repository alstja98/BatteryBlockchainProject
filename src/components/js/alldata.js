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

function createData(wallet, cell_No, Cell_Voltages, Pack_Voltage, Pack_Current,Vout_Chgr,Cell_Temperatures) {
  return { wallet, cell_No, Cell_Voltages, Pack_Voltage, Pack_Current,Vout_Chgr,Cell_Temperatures};
}

const rows = [
  createData('지갑 1', 1, 6.0, 24, 4.0, 2.5,'2022/10/30'),
  createData('지갑 2', 2, 9.0, 37, 4.3, 3,'2022/10/29'),
  createData('지갑 1', 3, 16.0, 24, 6.0,3,'2022/10/27'),
  createData('지갑 1', 2, 3.7, 67, 4.3,3,'2022/10/25'),
  createData('지갑 2', 6, 16.0, 49, 3.9,3,'2022/10/10'),
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
            <StyledTableCell>Wallet Address</StyledTableCell>
            <StyledTableCell align="right">Cell_No</StyledTableCell>
            <StyledTableCell align="right">Cell_Voltages</StyledTableCell>
            <StyledTableCell align="right">Pack_Voltage</StyledTableCell>
            <StyledTableCell align="right">Pack_Current</StyledTableCell>
            <StyledTableCell align="right">Vout_Chgr</StyledTableCell>
            <StyledTableCell align="right">Cell_Temperatures</StyledTableCell>
            <StyledTableCell align="right">Upload Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.wallet}>
              <StyledTableCell component="th" scope="row">
                {row.wallet}
              </StyledTableCell>
              <StyledTableCell align="right">{row.cell_No}</StyledTableCell>
              <StyledTableCell align="right">{row.Cell_Voltages}</StyledTableCell>
              <StyledTableCell align="right">{row.Pack_Voltage}</StyledTableCell>
              <StyledTableCell align="right">{row.Pack_Current}</StyledTableCell>
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