import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Select from "@mui/material/Select";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DownIcon from "../Icons/DownIcon";
import RightIcon from "../Icons/RightIcon";
import IconButton from "@mui/material/IconButton";
import obj from "../dummy-data/RateTable.json";
import "./WorkPackageTable.css";
import { FormControl, InputLabel, MenuItem } from "@mui/material";

const ProjectBillRateTable = () => {
  const [openRows, setOpenRows] = useState<number[]>([]);

  const handleToggleRow = (rowIndex: number) => {
    if (openRows.includes(rowIndex)) {
      setOpenRows(openRows.filter((row) => row !== rowIndex));
    } else {
      setOpenRows([...openRows, rowIndex]);
    }
  };

  const isRowOpen = (rowIndex: number) => {
    return openRows.includes(rowIndex);
  };

  const [data] = useState(obj);
  console.log(data);
  const header = [
    "Rate Table Table",
    "Category Type",
    "DNA internal category",
    "Bill rate category",
    "Curr",
    "Bill rate",
    "Bill Rate Criteria",
    "Yrs Exp Start",
    "Yrs Exp End",
    "Valid From",
    "Valid To",
  ];

  return (
    <TableContainer component={Paper} className="tableContainer">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="tableHead">
          <TableRow>
            <TableCell>
              <IconButton onClick={() => handleToggleRow(-1)}>
                {openRows.includes(-1) ? <DownIcon /> : <RightIcon />}
              </IconButton>
            </TableCell>
            {header.map((head, index) => (
              <TableCell key={head} sx={{ fontSize: "0.9rem" }}>
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.value.map((item, index) => (
            <React.Fragment key={index}>
              <TableRow>
                <TableCell>
                  <IconButton onClick={() => handleToggleRow(index)}>
                    {isRowOpen(index) ? <DownIcon /> : <RightIcon />}
                  </IconButton>
                </TableCell>
                <TableCell>{item.object_name.value}</TableCell>
                <TableCell>
                  {/* <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                    {item.ap4_rateschedule_type_cat.value}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value=  {item.ap4_rateschedule_type_cat.value}
                      label="internal category">
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl> */}
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                {/* Add more cells for other data properties */}
              </TableRow>
              {/* Render additional rows if the current row is open */}
              {isRowOpen(index) && (
                <React.Fragment>
                   <TableRow>
            <TableCell>
              
            </TableCell>
            <TableCell>
             
            </TableCell>
            <TableCell>
           
            </TableCell>
            <TableCell>
             
            </TableCell>
            <TableCell>
            <TableCell>{item.AP4_RateSchedJobCatRelation?.value[0]?.object_name?.value.map((data,index)=> 
            <TableRow>
              <TableCell>
              {data}
              </TableCell>
            </TableRow>
            )}</TableCell>
            </TableCell>
           
          </TableRow>
                </React.Fragment>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectBillRateTable;
