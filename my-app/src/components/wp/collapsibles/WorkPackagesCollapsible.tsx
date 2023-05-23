import * as React from "react";
import DownIcon from "../Icons/DownIcon";
import RightIcon from "../Icons/RightIcon";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import WorkPackageTable from "../tables/WorkPackageTable";
import "./WorkPackageCollapsible.css";

interface IWorkPackagesCollapsibleProps {}

const WorkPackagesCollapsible: React.FunctionComponent<
  IWorkPackagesCollapsibleProps
> = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div>
        <div className="collapsible" onClick={() => setOpen(!open)}>
          <h4 className="icon">{open ? <DownIcon /> : <RightIcon />} </h4>
          <h4 className="collapseHead">WORK PACKAGES</h4>
        </div>

        {open && (
          <Box>
            <Box
              sx={{ margin: "5px", display: "flex", justifyContent: "start" }}
            >
              <Button className="custombtn" sx={{ margin: "10px" }}>
                Edit
              </Button>
              <Button className="custombtn" sx={{ margin: "10px" }}>
                Show Additional Fields
              </Button>
              <Button className="custombtn" sx={{ margin: "10px" }}>
                Show Subtask
              </Button>
            </Box>
            <WorkPackageTable />
          </Box>
        )}
      </div>
    </>
  );
};

export default WorkPackagesCollapsible;
