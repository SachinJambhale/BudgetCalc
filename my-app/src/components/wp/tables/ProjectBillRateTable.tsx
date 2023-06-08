import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Select from "@mui/material/Select";
import TableContainer from "@mui/material/TableContainer";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import GradeIcon from "@mui/icons-material/Grade";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DownIcon from "../Icons/DownIcon";
import RightIcon from "../Icons/RightIcon";
import { Button, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import obj from "../dummy-data/RateTable.json";
import "./ProjectBillRate.css";
import { FormControl, InputLabel, MenuItem } from "@mui/material";

const ProjectBillRateTable = () => {
  const [openRows, setOpenRows] = useState<number[]>([]);
  const [favourite, setFavourite] = useState<{ [key: number]: boolean }>({});
  const [isCollapsibleOpen, setCollapsibleOpen] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [showInvalidRates, setShowInvalidRates] = useState(true);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    // Logic to save the changes
    setEditing(false);
  };

  const handleCancel = () => {
    // Logic to cancel the changes
    setEditing(false);
  };
  const handleFav = (index: number) => {
    setFavourite((prevFavourite) => ({
      ...prevFavourite,
      [index]: !prevFavourite[index],
    }));
  };

  const handleToggleRow = (rowIndex: number) => {
    if (rowIndex === -1) {
      // Clicked on the header
      if (openRows.length === data.value.length) {
        // All rows are open, so close all
        setOpenRows([]);
      } else {
        // Some rows are closed, so open all
        const allRows = data.value.map((_, index) => index);
        setOpenRows(allRows);
      }
    } else {
      // Clicked on a row
      if (openRows.includes(rowIndex)) {
        setOpenRows(openRows.filter((row) => row !== rowIndex));
      } else {
        setOpenRows([...openRows, rowIndex]);
      }
    }
  };

  const handleDeleteRow = (rowIndex: number) => {
    const updatedData = [...data.value];
    updatedData.splice(rowIndex, 1);
    setData({ ...data, value: updatedData });
  };

  const isRowOpen = (rowIndex: number) => {
    return openRows.includes(rowIndex);
  };
  const toggleInvalidRates = () => {
    setShowInvalidRates(!showInvalidRates);
  };

  const [data, setData] = useState(obj);
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
    <>
      <Box sx={{ margin: "5px", display: "flex", justifyContent: "start" }}>
        {!isEditing ? (
          <Button
            className="custombtn"
            sx={{ margin: "10px" }}
            onClick={handleEdit}
          >
            EDIT
          </Button>
        ) : (
          <>
            <Button
              className="custombtn"
              sx={{ margin: "10px" }}
              onClick={handleSave}
            >
              SAVE
            </Button>
            <Button
              className="custombtn"
              sx={{ margin: "10px" }}
              onClick={handleCancel}
            >
              CANCEL
            </Button>
          </>
        )}
        <Button
          className="custombtn"
          sx={{ margin: "10px" }}
          onClick={toggleInvalidRates}
        >
          {showInvalidRates ? "SHOW INVALID RATES" : "HIDE INVALID RATES"}
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table className="cells" aria-label="simple table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell style={{ width: 200 }}>
                <IconButton onClick={() => handleToggleRow(-1)}>
                  {openRows.length === data.value.length ? (
                    <DownIcon />
                  ) : (
                    <RightIcon />
                  )}
                </IconButton>
              </TableCell>
              {header.map((head, index) => (
                <TableCell key={head} sx={{ fontSize: "0.9rem", width: 120 }}>
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.value.map((item, index) => (
              <React.Fragment key={index}>
                <TableRow sx={{ width: 160, border: 1 }}>
                  <TableCell>
                    <IconButton onClick={() => handleToggleRow(index)}>
                      {isRowOpen(index) ? <DownIcon /> : <RightIcon />}
                    </IconButton>
                    <AddCircleOutlineIcon style={{ color: "#2cb9ec" }} />{" "}
                    <DeleteOutlineOutlinedIcon
                      style={{ color: "#2cb9ec" }}
                      onClick={() => handleDeleteRow(index)}
                    />
                    {favourite[index] ? (
                      <GradeIcon
                        style={{ color: "#2cb9ec" }}
                        onClick={() => handleFav(index)}
                      />
                    ) : (
                      <GradeOutlinedIcon
                        style={{ color: "#2cb9ec" }}
                        onClick={() => handleFav(index)}
                      />
                    )}
                  </TableCell>
                  <TableCell>{item.object_name.value}</TableCell>
                  <TableCell style={{ width: 200, padding: 0 }}>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel htmlFor="outlined-age-native-simple">
                        {item.ap4_rateschedule_type_cat.value}
                      </InputLabel>
                      <Select native label="Value" className="selectDropdown">
                        <option aria-label="None" value="" />
                        <option>Internal category</option>
                        <option>Customer category</option>
                        <option>Project role</option>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  {/* Add more cells for other data properties */}
                </TableRow>
                {/* Render additional rows if the current row is open */}
                {isRowOpen(index) && (
                  <React.Fragment>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell style={{ width: 200, padding: 0 }}>
                        <FormControl variant="outlined" fullWidth>
                          <InputLabel htmlFor="outlined-age-native-simple">
                            {
                              item.jobCategories[0]?.ap4_OracleJobCategory
                                ?.value[0]
                            }
                          </InputLabel>
                          <Select
                            native
                            label="Value"
                            className="selectDropdown"
                          >
                            <option aria-label="None" value="" />
                            <option>ASSIST..</option>
                            <option>PRESV..</option>
                            <option>PREV..</option>
                            <option>PRIN..</option>
                            <option>PROF..</option>
                            <option>SEN..</option>
                            <option>SPRIN..</option>
                            <option>XSUB..</option>
                            <option>XTEMP.</option>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell>
                        {item.AP4_RateSchedJobCatRelation?.value[0]?.object_name?.value.map(
                          (data, index) => (
                            <div key={index}>{data}</div>
                          )
                        )}
                      </TableCell>
                      <TableCell>{item.ap4_currencycode.value[0]}</TableCell>

                      <TableCell>
                        {item.jobCategories[0]?.ap4_external_rate?.value[0]}
                      </TableCell>
                      <TableCell>
                        {item.jobCategories[0]?.object_desc?.value[0]}
                      </TableCell>
                      <TableCell>
                        {item.jobCategories[0]?.ap4_years_of_exp_from?.value[0]}
                      </TableCell>
                      <TableCell>
                        {item.jobCategories[0]?.ap4_years_of_exp_to?.value[0]}
                      </TableCell>
                      <TableCell>
                        {isEditing ? (
                          <input
                            className="cells"
                            name="From Date"
                            type="date"
                            value={
                              item.jobCategories[0]?.ap4_from_date?.value[0].split(
                                "T"
                              )[0]
                            }
                          />
                        ) : (
                          item.jobCategories[0]?.ap4_from_date?.value[0].split(
                            "T"
                          )[0]
                        )}
                      </TableCell>
                      <TableCell>
                        {item.jobCategories[0]?.ap4_to_date?.value[0]}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell style={{ width: 200, padding: 0 }}>
                        <FormControl variant="outlined" fullWidth>
                          <InputLabel htmlFor="outlined-age-native-simple">
                            {
                              item.jobCategories[0]?.ap4_OracleJobCategory
                                ?.value[0]
                            }
                          </InputLabel>
                          <Select
                            native
                            label="Value"
                            className="selectDropdown"
                          >
                            <option aria-label="None" value="" />
                            <option>ASSIST..</option>
                            <option>PRESV..</option>
                            <option>PREV..</option>
                            <option>PRIN..</option>
                            <option>PROF..</option>
                            <option>SEN..</option>
                            <option>SPRIN..</option>
                            <option>XSUB..</option>
                            <option>XTEMP.</option>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell>
                        {item.AP4_RateSchedJobCatRelation?.value[0]?.object_name?.value.map(
                          (data, index) => (
                            <div key={index}>{data}</div>
                          )
                        )}
                      </TableCell>
                      <TableCell>{item.ap4_currencycode.value[0]}</TableCell>

                      <TableCell>
                        {item.jobCategories[0]?.ap4_external_rate?.value[0]}
                      </TableCell>
                      <TableCell>
                        {item.jobCategories[0]?.object_desc?.value[0]}
                      </TableCell>
                      <TableCell>
                        {item.jobCategories[0]?.ap4_years_of_exp_from?.value[0]}
                      </TableCell>
                      <TableCell>
                        {item.jobCategories[0]?.ap4_years_of_exp_to?.value[0]}
                      </TableCell>
                      <TableCell>
                        {isEditing ? (
                          <input
                            className="cells"
                            name="From Date"
                            type="date"
                            value={
                              item.jobCategories[0]?.ap4_from_date?.value[0].split(
                                "T"
                              )[0]
                            }
                          />
                        ) : (
                          item.jobCategories[0]?.ap4_from_date?.value[0].split(
                            "T"
                          )[0]
                        )}
                      </TableCell>
                      <TableCell>
                        {item.jobCategories[0]?.ap4_to_date?.value[0]}
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProjectBillRateTable;
