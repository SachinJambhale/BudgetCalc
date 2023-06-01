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
  const [editing, setEditing] = React.useState(false);
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
  return (
    <>
      <div>
        <div className="collapsible" onClick={() => setOpen(!open)}>
          <h4 className="icon">{open ? <DownIcon /> : <RightIcon />} </h4>
          <h4 className="collapseHead">BILLRATE</h4>
        </div>
        {open && (
          <Box>
            <Box
              sx={{ margin: "5px", display: "flex", justifyContent: "start" }}
            >
              {!editing ? (
                <Button className="custombtn" sx={{ margin: "10px" }} onClick={handleEdit}>
                  EDIT
                </Button>
              ) : (
                <>
                  <Button className="custombtn" sx={{ margin: "10px" }} onClick={handleSave}>
                    SAVE
                  </Button>
                  <Button className="custombtn" sx={{ margin: "10px" }} onClick={handleCancel}>
                    CANCEL
                  </Button>
                </>
              )}
              <Button className="custombtn" sx={{ margin: "10px" }}>
                SHOW INVALID RATES
              </Button>
            </Box>
            <BillRateTable />
          </Box>
        )}
      </div>
    </>
  );
};
export default BillRateCollapsible;