import * as React from "react";
import "./WorkPackageCollapsible.css";
import { IconButton } from "@mui/material";
import DownIcon from "../Icons/DownIcon";
import RightIcon from "../Icons/RightIcon";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import BillRateTable from "../tables/BillRateTable";
import "./WorkPackageCollapsible.css";

interface IWorkPackageCollapsibleProps { }

const BillRateCollapsible: React.FunctionComponent<
  IWorkPackageCollapsibleProps
> = (props) => {
  const [open, setOpen] = React.useState(false);
  const [enable, setEnable] = React.useState(false);
  
  const handleClick = () => {
    setEnable(true);
    
  }
  return (
    <>
      <div>
        <div className="collapsible" onClick={() => setOpen(!open)}>
          <h4 className="icon">{open ? <DownIcon /> : <RightIcon />} </h4>
          <h4 className="collapseHead">BILL RATE</h4>
        </div>

        {open && (
          <Box>
            
            <Box
              sx={{ margin: "5px", display: "flex", justifyContent: "start" }}
            >{enable===false ? 
              <Button className="custombtn" sx={{ margin: "10px" }} onClick={handleClick}>
                EDIT
              </Button>:""}
              <Button className="custombtn" sx={{ margin: "10px" }}>
                SHOW INVALID RATES
              </Button>
            </Box>
            {enable === true ?
              <Box>
                <Button className="custombtn" sx={{ margin: "10px" }} onClick={handleClick}>
                  Save
                </Button>
                <Button className="custombtn" sx={{ margin: "10px" }} onClick={() => setEnable(false)}>
                  Cancel
                </Button>
              </Box> : ''}
            <BillRateTable />
          </Box>
        )}
      </div>
    </>
  );
};

export default BillRateCollapsible;
