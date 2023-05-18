import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WorkPackagesTable from "../tables/WorkPackagesTable";

interface IWorkPackagesCollapsibleProps {}

const WorkPackagesCollapsible: React.FunctionComponent<
  IWorkPackagesCollapsibleProps
> = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <b>WORK PACKAGES</b>
        </TableCell>
      </TableRow>
      <hr></hr>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            // sx={{ margin: "10px" }}
          >
            <WorkPackagesTable />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default WorkPackagesCollapsible;
