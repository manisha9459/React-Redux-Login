import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography } from "../../includes";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class Users extends Component {
  render() {
    return (
      <div>
      <Typography variant="display1" gutterBottom component="h2">
        Users
      </Typography>
          <div>
          <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">AGE</TableCell>
            <TableCell align="right">GENDER</TableCell>
            <TableCell align="right">EMAIL</TableCell>
            <TableCell align="right">PHONE NUMBER</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.items.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phoneNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              
            </div>
      </div>
    );
  }
}

const mapStateToProps = () => state => {
  return {
      items: state.todoList
  };
};

export default connect(mapStateToProps)(Users);
