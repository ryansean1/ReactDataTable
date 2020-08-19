import "../../App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import Filterbox from "../Rectangle2";
// import data from "../Data/marketconcentration.json";
// import { getDynamicStyles } from "../node_modules/jss";

const { useState } = React;
const sampleData = [
  { id: 1, state: "NSW", participants: "100", utilisation: "10%" },
  { id: 2, state: "QLD", participants: "200", utilisation: "20%" },
  { id: 3, state: "WA", participants: "300", utilisation: "30%" },
  { id: 4, state: "VIC", participants: "400", utilisation: "40%" },
  { id: 5, state: "SA", participants: "500", utilisation: "50%" },
];
const Columns = [
  { id: 0, property: "state", columnLabel: "STATE" },
  { id: 1, property: "participants", columnLabel: "PARTICIPANTS" },
  { id: 2, property: "utilisation", columnLabel: "UTILISATION" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "26ch",
    background: "white",
    color: theme.palette.common.white,
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.white,
    border: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    color: theme.palette.common.black,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const MyFilterState = ({ filterProperties, onFilter, propertyName }) => {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const target = {
      value,
    };

    // what is target exactly?
    onFilter({ target });
  };

  const classes = useStyles();

  return (
    <FormControl className={classes.root}>
      <InputLabel id="demo-simple-select-helper-label">
        {propertyName}
      </InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        multiple={false}
        // how do you log out a specific value from this when you click?
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {filterProperties.map((item) => {
          // why is the item important for everything else to happen AFTER?
          // Hint: this is the start of the filtering process
          return (
            <MenuItem
              id={item.id}
              key={item.id}
              label={item[propertyName]}
              value={item[propertyName]}
            >
              {item[propertyName]}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

const MyTable = ({ tableData, tableColumns }) => {
  const classes = withStyles();

  return (
    <div>
      <TableContainer className={classes.row} stickyHeader>
        {/* Makes the Table Scrollable  */}
        <Paper style={{ maxHeight: 300, overflow: "auto" }}>
          <Table style={{ backgroundColor: "white" }}>
            <TableHead style={{ backgroundColor: "#6A2876", color: "white" }}>
              <TableRow>
                {tableColumns.map(({ id, columnLabel }) => (
                  <TableCell key={id}>{columnLabel}</TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {tableData.map((row) => (
                <StyledTableRow key={row.id}>
                  {tableColumns.map(({ id, property }) => (
                    <StyledTableCell key={id}>{row[property]}</StyledTableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </TableContainer>
    </div>
  );
};

const ActiveProviders = () => {
  const [state, setState] = useState({
      data: sampleData,
      dropdown: sampleData,
      columns: Columns,
    }),
    onFilterApply = ({ target: { value } }) => {
      // what line is this value coming from?
      console.log("--> value: ", value);
      const filterMe = sampleData.filter((item) => {
        const filterVar = item[value];
        // why is this returning undefined?
        console.log("--> filterVar: ", filterVar);
        return filterVar === value;
      });

      setState({
        ...state,
        data: filterMe,
      });
    };

  return (
    <Container>
      {Columns.map((item) => {
        const { property } = item;
        return (
          <MyFilterState
            filterProperties={state.dropdown}
            onFilter={onFilterApply}
            myState={state.columns}
            propertyName={property}
          />
        );
      })}
      <br></br>
      <button>Reset Filters</button>

      <br></br>
      <br></br>
      <Filterbox />
      <br></br>
      <br></br>
      <body className="App-subheading">
        <div style={{ textAlign: "left" }}>Service District Locations</div>
      </body>
      <body className="App-body">
        <div style={{ textAlign: "left" }}>
          The map below shows the variation in the number of providers across{" "}
          <br></br>
          Service Districts; lighter colours correspond to lower numbers and
          <br></br>
          darker colours corresond to higher numbers based on category
          <br></br>
          selections. Service District boundaries are based on 2011 Local{" "}
          <br></br>
          Government Areas (LGAs).
        </div>
      </body>

      <br></br>
      <MyTable
        tableData={state.data}
        tableColumns={state.columns}
        style={{ font: "White" }}
      />
    </Container>
  );
};

export default ActiveProviders;
