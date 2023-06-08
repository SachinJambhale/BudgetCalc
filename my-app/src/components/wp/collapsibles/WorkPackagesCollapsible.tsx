import * as React from "react";
import "./WorkPackageCollapsible.css";
import { IconButton } from "@mui/material";
import DownIcon from "../Icons/DownIcon";
import RightIcon from "../Icons/RightIcon";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import WorkPackage from "../tables/WorkPackage";

import "./WorkPackageCollapsible.css";
interface IWorkPackagesCollapsibleProps { }


interface IWorkPackageCollapsibleProps { }

const WorkPackageCollapsible: React.FunctionComponent<IWorkPackageCollapsibleProps> = (
  props
) => {
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
            <WorkPackage />
          </Box>
        )}
      </div>
    </>
  );
};

export default WorkPackageCollapsible;
