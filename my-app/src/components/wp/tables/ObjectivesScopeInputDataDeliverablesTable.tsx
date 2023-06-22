//import {CKEditor} from "@ckeditor/ckeditor5-react";
import { CKEditor } from "ckeditor4-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { ChangeEvent, useState, useEffect } from "react";
import TableContainer from "@mui/material/TableContainer";
import DownIcon from "../Icons/DownIcon";
import RightIcon from "../Icons/RightIcon";
import { Button, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import "./ProjectBillRate.css";

const ObjectivesScopeInputDataDeliverablesTable = () => {
  const [openRows, setOpenRows] = useState<number[]>([]);
  //const [isCollapsibleOpen, setCollapsibleOpen] = useState(false);
  const [isEditing, setEditing] = useState(false);
  let arr = ["1", "Pooja"];
  const handleEdit = () => {
    setEditing(true);
  };
  const handleSave = () => {
    setEditing(false);
  };
  const handleCancel = () => {
    // Logic to cancel the changes
    setEditing(false);
  };

  const handleToggleRow = (rowIndex: number) => {
    if (rowIndex === -1) {
      //Clicked on the header
      if (openRows.length === arr.length) {
        // All rows are open, so close all
        setOpenRows([]);
      } else {
        // Some rows are closed, so open all
        const allRows = arr.map(
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
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    e.preventDefault();
    const name = e.target.name as string;
    const { value } = e.target;
    // tempData.ctrRevision.calcRev.ctrs[index][name].value[0] = value;\
    arr[0] = value;
   
    
  };
  const handleChangeChild = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    e.preventDefault();
    const name = e.target.name as string;
    const { value } = e.target;
    arr[0] = value;
  
  };
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
      </Box>
      <TableContainer>
        <table className="cells_project_rate" aria-label="simple table">
          <tr>
            {/* //code for columns headers */}
            <th>
              <IconButton onClick={() => handleToggleRow(-1)}>
                {openRows.length ===
                  arr.length ? (
                  <DownIcon />
                ) : (
                  <RightIcon />
                )}
              </IconButton>
            </th>
            <th className="tborder tableHead">WP Number</th>
            <th className="tborder tableHead">WP Name</th>
          </tr>
          {/* //code for column data */}
          {arr.map((item: any, index: any) => (
            <React.Fragment >
              <tr key={item.id}>
                <td>
                  <IconButton onClick={() => handleToggleRow(index)}>
                    {isRowOpen(index) ? <DownIcon /> : <RightIcon />}
                  </IconButton>
                </td>
                <td>
                  {arr[0]}
                </td>
                <td>
                  {arr[1]}
                </td>
              </tr>
              {/* Render additional rows if the current row is open */}
              {isRowOpen(index) && (
                <React.Fragment>
                  {/* {arr.map((insideCate: any, index: any) => ( */}
                  <tr hidden={" " ? false : true}>
                 <td></td>
                    <td><h3 style={{textAlign:"left"}}>Objective</h3>
                      <CKEditor />
                    </td>
                    <td><h3 style={{textAlign:"left"}}>Deliverables</h3>
                      <CKEditor />
                    </td>
                  </tr>
                  <tr hidden={" " ? false : true}>
                    <td></td>
                    <td><h3 style={{textAlign:"left"}}>Scope</h3>
                      <CKEditor />
                    </td>
                    <td><h3 style={{textAlign:"left"}}>Assumptions</h3>
                      <CKEditor />
                    </td>
                
                  </tr>
                  <tr hidden={" " ? false : true}>
                    <td></td>
                    <td><h3 style={{textAlign:"left"}}>Input</h3>
                      <CKEditor />
                    </td>
                    <td><h3 style={{textAlign:"left"}}>Preceding Activities</h3>
                      <CKEditor />
                    </td>
                
                  </tr>
                  {/* ))} */}
        
                </React.Fragment>
              )}
            </React.Fragment>
          ))}
        </table>
      </TableContainer>
    </>
  );
};
export default ObjectivesScopeInputDataDeliverablesTable;