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

const RegTables = (props) => {
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
          {props.nodes &&
            props.nodes.length >= 1 &&
            props.nodes.map((node, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" align="center">
                  {node}
                </TableCell>
                <TableCell
                  align="center"
                  onClick={() => props.deleteElement(index, "node")}
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

          {console.log(props.pairs)}
          {props.pairs &&
            props.pairs.length >= 1 &&
            props.pairs.map((pair, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" align="center">
                  {pair[0]}
                </TableCell>
                <TableCell align="center">{pair[1]}</TableCell>
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

export default RegTables;
