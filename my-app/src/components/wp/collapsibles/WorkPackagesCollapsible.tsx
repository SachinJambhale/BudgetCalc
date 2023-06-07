import * as React from "react";
import DownIcon from "../Icons/DownIcon";
import RightIcon from "../Icons/RightIcon";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import WorkPackage from "../tables/WorkPackage";
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

        {open && <WorkPackage />}
      </div>
    </>
  );
};

export default WorkPackagesCollapsible;
