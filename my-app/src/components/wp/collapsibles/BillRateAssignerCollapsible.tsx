// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
// import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
// import WorkPackagesTable from "../tables/WorkPackagesTable";
// import MuiAccordionSummary, {
//   AccordionSummaryProps
// } from "@mui/material/AccordionSummary";
// import MuiAccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import { Button } from "@mui/base";
// import BillRateAssignerTable from "../tables/BillRateAssignerTable";

// const Accordion = styled((props: AccordionProps) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   "&:not(:last-child)": {
//     borderBottom: 0
//   },
//   "&:before": {
//     display: "none"
//   }
// }));

// const AccordionSummary = styled((props: AccordionSummaryProps) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark"
//       ? "#99D9F0"
//       : "#99D9F0",
//   flexDirection: "row-reverse",
//   "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
//     transform: "rotate(90deg)"
//   },
//   "& .MuiAccordionSummary-content": {
//     marginLeft: theme.spacing(1)
//   }
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(0),
//   borderTop: "#99D9F0"
// }));

// const  BillRateAssignerCollapsible=() =>{
//   const [expanded, setExpanded] = React.useState<string | false>("panel1");

//   const handleChange = (panel: string) => (
//     event: React.SyntheticEvent,
//     newExpanded: boolean
//   ) => {
//     setExpanded(newExpanded ? panel : false);
//   };

//   return (
//     <div>
//       <Accordion
//         expanded={expanded === "panel1"}
//         onChange={handleChange("panel1")}
//       >
//         <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
//           <Typography>Bill Rate Assigner</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Button>Edit</Button>
//           <Button>Show Additiona Field</Button>
//           <Button>Show Subtask</Button>
//         <BillRateAssignerTable />
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }
// export default BillRateAssignerCollapsible;

import * as React from "react";
import { IconButton } from "@mui/material";
import DownIcon from "../Icons/DownIcon";
import RightIcon from "../Icons/RightIcon";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import BillRateAssignerTable from "../tables/BillRateAssignerTable";
import "./WorkPackageCollapsible.css";
import "./WorkPackageCollapsible.css";

interface IBillRateAssignerCollapsibleProps {}

const BillRateAssignerCollapsible: React.FunctionComponent<
  IBillRateAssignerCollapsibleProps
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
          <h4 className="collapseHead">BILL RATE ASSIGNER</h4>
        </div>

        {open && (
          <Box>
            <Box
              sx={{ margin: "5px", display: "flex", justifyContent: "start" }}
            >
              <Button className="custombtn" sx={{ margin: "10px" }} onClick={handleClick}>
                Edit
              </Button>
              <Button className="custombtn" sx={{ margin: "10px" }}>
                Show Additional Fields
              </Button>
              <Button className="custombtn" sx={{ margin: "10px" }}>
                Show Subtask
              </Button>
            </Box>
            {enable === true ? 
            <Box>
            <Button className="custombtn" sx={{ margin: "10px" }} onClick={handleClick}>
                Save
              </Button>
              <Button className="custombtn" sx={{ margin: "10px" }} onClick={()=>setEnable(false) }>
                Cancel
              </Button>
              </Box> : ''}
            <BillRateAssignerTable enable={enable}/>
          </Box>
        )}
      </div>
    </>
  );
};

export default BillRateAssignerCollapsible;
