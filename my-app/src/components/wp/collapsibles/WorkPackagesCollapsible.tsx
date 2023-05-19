// import * as React from "react";
// import TableCell from "@mui/material/TableCell";
// import TableRow from "@mui/material/TableRow";
// import IconButton from "@mui/material/IconButton";
// import Collapse from "@mui/material/Collapse";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import WorkPackagesTable from "../tables/WorkPackagesTable";

// interface IWorkPackagesCollapsibleProps {}

// const WorkPackagesCollapsible: React.FunctionComponent<
//   IWorkPackagesCollapsibleProps
// > = () => {
//   const [open, setOpen] = React.useState(false);
//   return (
//     <>
//       <TableRow>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           <b>WORK PACKAGES</b>
//         </TableCell>
//       </TableRow>
//       <hr></hr>

//           <Collapse
//             in={open}
//             timeout="auto"
//             unmountOnExit
//             // sx={{ margin: "10px" }}
//           >
//             <WorkPackagesTable />
//           </Collapse>

//     </>
//   );
// };

// export default WorkPackagesCollapsible;

import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import WorkPackagesTable from "../tables/WorkPackagesTable";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#99D9F0" : "#99D9F0",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  borderTop: "#99D9F0",
}));

const WorkPackagesCollapsible = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>WORK PACKAGES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ margin: "5px", display: "flex", justifyContent: "end" }}>
            <Button sx={{ margin: "10px" }} color="primary" variant="contained">
              Edit
            </Button>
            <Button sx={{ margin: "10px" }} color="primary" variant="contained">
              Show Additiona Field
            </Button>
            <Button sx={{ margin: "10px" }} color="primary" variant="contained">
              Show Subtask
            </Button>
          </Box>
          <WorkPackagesTable />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default WorkPackagesCollapsible;
