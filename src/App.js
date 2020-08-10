
import './App.css';
import React, { Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


// import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

import MenuItem from '@material-ui/core/MenuItem';


// import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { useTheme } from '../node_modules/@material-ui/styles';

const { useState } = React,
      { render } = ReactDOM,
      rootNode = document.getElementById('root')
      
const sampleData = [
        {id: 0, state: 'apple', participants: 'fruit', utilisation: 'green'},
        {id: 1, state: 'pear', participants: 'fruit', utilisation: 'green'},
        {id: 2, state: 'banana', participants: 'fruit', utilisation: 'yellow'},
        {id: 3, state: 'carrot', participants: 'vegie', utilisation: 'red'},
        {id: 4, state: 'strawberry', participants: 'berry', utilisation: 'red'}
      ],
      sampleColumns = [
        {id: 0, property: 'state', columnLabel: 'State'},
        {id: 1, property: 'participants', columnLabel: 'Participants'},
        {id: 2, property: 'utilisation', columnLabel: 'Utilisation'}
      ]
     
    


      
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(10),
      width: '50ch',
    },
  },
}));



function MultilineSelectFields() {
  const classes = useStyles();
  const theme = useTheme();
  const [currency, setCurrency] = React.useState('EUR');
  const [participantsName, setParticipantsName] = React.useState([]);
  const handleChange = (event) => {
  setCurrency(event.target.value);
};

const handleChange1 = (event) => {
  setParticipantsName(event.target.value);
};

}

      
const MyFilter = ({filterProperties, onFilter}) => (
  <Container>
    {
      filterProperties.map(({participantsName,id}) => (
        <TextField
           id="standard-select-state"
            select
            label="test"
            value={participantsName}
            onChange={MultilineSelectFields.handleChange1}
         
            
          />
        
        
      ))
    }
  </Container>
)

const MyTable = ({tableData, tableColumns}) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          {
            tableColumns.map(({id, columnLabel}) => (
              <TableCell key={id}>
                {columnLabel}
              </TableCell>
            ))
          }
        </TableRow>
      </TableHead>
      <TableBody>
        {
          tableData.map(row => (
            <TableRow key={row.id}>
              {
                tableColumns.map(({id, property}) => (
                  <TableCell key={id}>
                    {row[property]}
                  </TableCell>
                ))
              }
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  </TableContainer>
)

const App = () => {
  const [state, setState] = useState({
          data: sampleData,
          columns: sampleColumns,
          filterObj: sampleColumns.reduce((r,{property}) => (r[property]='', r), {})
        }),
        onFilterApply = ({target:{state,value}}) => {
          const newFilterObj = {...state.filterObj, [state]: value}
          setState({
            ...state,
            filterObj: newFilterObj,
            data: sampleData.filter(props => 
              Object
                .entries(newFilterObj)
                .every(([key,val]) => 
                  !val.length ||
                  props[key].toLowerCase().includes(val.toLowerCase()))
            )
          })
        }
  return (
    <Container>
      <MyFilter 
        filterProperties={state.columns}
        onFilter={onFilterApply}
      />
      <MyTable
        tableData={state.data}
        tableColumns={state.columns}
      />
      {/* <FilterForm/> */}
     {/* < MultilineTextFields/> */}
    </Container>
  )
}


export default App;