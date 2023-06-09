import React, { ChangeEvent, useState,useEffect } from "react";
import TableContainer from "@mui/material/TableContainer";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import GradeIcon from "@mui/icons-material/Grade";
import Paper from "@mui/material/Paper";
import DownIcon from "../Icons/DownIcon";
import RightIcon from "../Icons/RightIcon";
import { Button, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import obj from "../dummy-data/RateTable.json";
import "./ProjectBillRate.css";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { faV } from "@fortawesome/free-solid-svg-icons";
import { isEditable } from "@testing-library/user-event/dist/utils";

const ProjectBillRateTable = () => {
  const [openRows, setOpenRows] = useState<number[]>([]);
  const [favourite, setFavourite] = useState<{ [key: number]: boolean }>({});
  const [isCollapsibleOpen, setCollapsibleOpen] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [showInvalidRates, setShowInvalidRates] = useState(true);
  const [data, setData] = useState(obj);
  const _ = require("lodash");
  const copiedObject = _.cloneDeep(data);
  const [tempData, setTempData] = React.useState(copiedObject);
  

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setData({ ...tempData });
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
      if (
        openRows.length === data.calcRev.AP4_BudgetCalcRateSchRel.value.length
      ) {
        // All rows are open, so close all
        setOpenRows([]);
      } else {
        // Some rows are closed, so open all
        const allRows = data.calcRev.AP4_BudgetCalcRateSchRel.value.map(
          (_, index) => index
        );
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


  const isRowOpen = (rowIndex: number) => {
    return openRows.includes(rowIndex);
  };
  const toggleInvalidRates = () => {
    setShowInvalidRates(!showInvalidRates);
  };


  console.log(data);
 
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    e.preventDefault();
    const name = e.target.name as string;
    const { value } = e.target;
    // tempData.ctrRevision.calcRev.ctrs[index][name].value[0] = value;\
    tempData.calcRev.AP4_BudgetCalcRateSchRel.value[index][name].value[0] = value;
    setTempData({ ...tempData });
    console.log("initialData", data);
    console.log("Temp", tempData);
  };

  useEffect(() => {
    setTempData(_.cloneDeep(data));
  }, [data]);

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
      <TableContainer>
        <table className="cells_project_rate" aria-label="simple table">
            <tr>
              <th>
                <IconButton onClick={() => handleToggleRow(-1)}>
                  {openRows.length ===
                  data.calcRev.AP4_BudgetCalcRateSchRel.value.length ? (
                    <DownIcon />
                  ) : (
                    <RightIcon />
                  )}
                </IconButton>
              </th>
              {header.map((head, index) => (
                <th key={head}  className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                  {head}
                </th>
              ))}
            </tr>
            {tempData.calcRev.AP4_BudgetCalcRateSchRel.value.map((item : any, index: any) => (
              <React.Fragment key={index}>
                <tr>
                  <td>
                    <IconButton onClick={() => handleToggleRow(index)}>
                      {isRowOpen(index) ? <DownIcon /> : <RightIcon />}
                    </IconButton>
                    <AddCircleOutlineIcon style={{ color: "#2cb9ec" }} />{" "}
                    <DeleteOutlineOutlinedIcon
                      style={{ color: "#2cb9ec" }}/>
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
                  </td>
                  <td
                    className={`td  ${isEditing ? "editable" : ""}`}
                    align="right"
                  >
                    {isEditing ? (
                      <input
                        className="cells"
                        name={item.object_name.name}
                        type="text"
                        value={item.object_name.value[0]}
                        onChange={(e) => handleChange(e, index)}
                      />
                    ) : (
                      item.object_name.value[0]
                    )}
                  </td>
                  <td style={{ width: 200, padding: 0 }}>
                    
                      <select name="Internal category" id="cat1">
                        <option>{item.ap4_rateschedule_type_cat.value}</option>
                        <option>Customer category</option>
                        <option>Project role</option>
                      </select>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  {/* Add more cells for other data properties */}
                </tr>
                {/* Render additional rows if the current row is open */}
                {isRowOpen(index) && (
                  <React.Fragment>
                    {item?.jobCategories?.map((insideCate:any,index:any)=>(<tr hidden={ insideCate?.ap4_to_date?.value[0] === null || !showInvalidRates? false:true}>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td style={{ width: 200, padding: 0 }}>
                      <select name="Internal category" id="cat1">
                        <option> { item.jobCategories[0]?.ap4_OracleJobCategory?.value}</option>
                            <option>ASSIST..</option>
                            <option>PRESV..</option>
                            <option>PREV..</option>
                            <option>PRIN..</option>
                            <option>PROF..</option>
                            <option>SEN..</option>
                            <option>SPRIN..</option>
                            <option>XSUB..</option>
                            <option>XTEMP.</option>
                      </select>
                      </td>
                      <td>{insideCate?.object_name?.value}</td>
                      <td>{insideCate?.ap4_currencycode?.value}</td>

                      <td>
                        {insideCate?.ap4_external_rate?.value}
                      </td>
                      <td>
                        {insideCate?.object_desc?.value}
                      </td>
                      <td>
                        {insideCate?.ap4_years_of_exp_from?.value}
                      </td>
                      <td>
                        {insideCate?.ap4_years_of_exp_to?.value}
                      </td>
                      <td>
                        {isEditing ? (
                          <input
                            className="cells"
                            name={insideCate?.ap4_from_date?.name}
                            type="date"
                            value={
                            insideCate.ap4_from_date?.value[0]?.split(
                                "T"
                              )[0]
                            }
                          />
                        ) : (
                          insideCate?.ap4_from_date?.value[0]?.split(
                            "T"
                          )[0]
                        )}
                      </td>
                      <td>
                        {insideCate?.ap4_to_date?.value[0]?.split("T")[0]}
                      </td>
                      </tr>))}
                 
                  </React.Fragment>
                )}
              </React.Fragment>
            ))}
        </table>
      </TableContainer>
    </>
  );
};

export default ProjectBillRateTable;
