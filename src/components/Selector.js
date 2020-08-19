import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
    maxWidth: 600,
    border: 1,
    color: "white",
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 450,
    },
  },
};

const names = ["NSW", "VIC", "QLD", "NT", "SA", "WA", "ACT"];
const lgas = ["RCC", "COS", "INC"];
const serviceproviders = ["test1", "test2", "test3", "test4", "test5", "test6"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectName() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [lgaName, setLGAName] = React.useState([]);
  const [serviceprovidersName, setProvidersName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };
  const handleChange1 = (event) => {
    setLGAName(event.target.value);
  };
  const handleChange2 = (event) => {
    setProvidersName(event.target.value);
  };

  // function MultipleSelectLGA()
  //     const classes = useStyles();
  //     const theme = useTheme();
  //     const [lga, setPersonName] = React.useState([]);
  //     const handleChange1 = (event) => {
  //       setPersonName(event.target.value);
  //     };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
    setLGAName(value);
    setProvidersName(value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">State</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="service districts">Support Classes</InputLabel>
        <Select
          labelId="service districts"
          id="service districts"
          multiple
          value={lgaName}
          onChange={handleChange1}
          input={<Input />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {lgas.map((lga) => (
            <MenuItem
              key={lga}
              value={lga}
              style={getStyles(lga, personName, theme)}
            >
              {lga}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="service districts">Active Providers</InputLabel>
        <Select
          labelId="service districts"
          id="service districts"
          multiple
          value={serviceprovidersName}
          onChange={handleChange2}
          input={<Input />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {serviceproviders.map((serviceprovider) => (
            <MenuItem
              key={serviceprovider}
              value={serviceprovider}
              style={getStyles(serviceprovider, personName, theme)}
            >
              {serviceprovider}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
