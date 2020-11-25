import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const BinHeapTables = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table className="" aria-label="customized table">
        <TableHead>
          <TableRow>
            {props.titles.map((title, index) => (
              <TableCell align="center" key={index}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.info &&
            props.info.map((person, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" align="center">
                  {person.name}
                </TableCell>
                <TableCell align="center">{person.popularity}</TableCell>
                <TableCell align="center">{person.times_spoken}</TableCell>
                <TableCell
                  align="center"
                  onClick={() => props.deleteElement(index)}
                >
                  <Button variant="contained" color="secondary">
                    BORRAR
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BinHeapTables;
