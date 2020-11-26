import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

const DjikstraTables = (props) => {
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
          {props.limits && (
            <TableRow key="1">
              <TableCell component="th" scope="row" align="center">
                {props.limits.start}
              </TableCell>
              <TableCell align="center">{props.limits.goal}</TableCell>
              <TableCell
                align="center"
                onClick={() => {
                  props.setLimits([]);
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteIcon></DeleteIcon>}
                >
                  BORRAR
                </Button>
              </TableCell>
            </TableRow>
          )}

          {props.pairs &&
            props.pairs.map((pair, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" align="center">
                  {pair.from}
                </TableCell>
                <TableCell align="center">{pair.to}</TableCell>
                <TableCell align="center">{pair.cost}</TableCell>
                <TableCell
                  align="center"
                  onClick={() => props.deleteElement(index)}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon></DeleteIcon>}
                  >
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

export default DjikstraTables;
