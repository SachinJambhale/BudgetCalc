// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableCell from "@mui/material/TableCell";
// import TableRow from "@mui/material/TableRow";
// import TableBody from "@mui/material/TableBody";
// import IconButton from '@mui/material/IconButton';
// import TableHead from "@mui/material/TableHead";
// import Collapse from '@mui/material/Collapse';
// import TableContainer from "@mui/material/TableContainer";
// import WorkPackagesCollapsible from "../collapsibles/WorkPackagesCollapsible";
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// interface IWorkPackagesTableProps {}
// const data = [
//   "",
//   "n/a",
//   "Dnv",
//   "WP4",
//   "13-05-2023",
//   "21-05-2023",
//   "Active ",
//   "CustRef_text",
//   "Aker BP ASA",
//   "Per Torjus Einstabland",
//   "",

// ];

// //component={Paper}
// const WorkPackagesTable: React.FunctionComponent<
//   IWorkPackagesTableProps
// > = () => {
//   const [open, setOpen] = React.useState(false);
//   return (
//     <>
//       <TableContainer>
//         <Table aria-label="collapsible table">
//           <TableHead>
//             <TableRow sx={{ borderBottom: "1px solid #fff" }}>
//               <TableCell />
//               <TableCell>ProjectNumber</TableCell>
//               <TableCell align="right">ProjectName</TableCell>
//               <TableCell align="right">WPShortName</TableCell>
//               <TableCell align="right">StartDate</TableCell>
//               <TableCell align="right">EndDate</TableCell>
//               <TableCell align="right">Status</TableCell>
//               <TableCell align="right">Contract</TableCell>
//               <TableCell align="right">Customer</TableCell>
//               <TableCell align="right">PM</TableCell>
//               <TableCell align="right">Service Area/Line</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((row) => {
//               return <TableCell>{row}</TableCell>;
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <br></br>

//       <TableContainer>
//         <Table aria-label="collapsible table">
//           <TableRow sx={{ borderBottom: "1px solid #fff" }}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//           <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//             <TableCell>WP Number</TableCell>
//             <TableCell align="right">WP Name</TableCell>
//             <TableCell align="right">Project Short Name</TableCell>
//             <TableCell align="right">StartDate</TableCell>
//             <TableCell align="right">EndDate</TableCell>
//             <TableCell align="right">Status</TableCell>
//             <TableCell align="right">Contract</TableCell>
//             <TableCell align="right">Customer</TableCell>
//             <TableCell align="right">Manager</TableCell>
//             <TableCell align="right">Service Area Line</TableCell>
//             </Collapse>
//           </TableRow>
//           <TableBody>
//             {data.map((row) => {
//               return <TableCell>{row}</TableCell>;
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </>
//   );
// };

// export default WorkPackagesTable;

import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(
  WPNumber: string,
  WPName: string,
  ProjectShortName: string,
  StartDate: string,
  EndDate: string,
  Status: string,
  Contract: string,
  Customer: string,
  Manager: string,
  ServiceAreaLine: string

) {
  return {
    WPNumber,
    WPName,
    ProjectShortName,
    StartDate,
    EndDate,
    Status,
    Contract,
    Customer,
    Manager,
    ServiceAreaLine,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
     
        <TableCell component="th" scope="row">
          {row.WPNumber}
        </TableCell>
        <TableCell align="right">{row.WPName}</TableCell>
        <TableCell align="right">{row.ProjectShortName}</TableCell>
        <TableCell align="right">{row.StartDate}</TableCell>
        <TableCell align="right">{row.EndDate}</TableCell>
        <TableCell align="right">{row.Status}</TableCell>
        <TableCell align="right">{row.Contract}</TableCell>
        <TableCell align="right">{row.Customer}</TableCell>
        <TableCell align="right">{row.Manager}</TableCell>
        <TableCell align="right">{row.ServiceAreaLine}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('WP Number', 'WP Name', 'Project Short Name','StartDate', 'EndDate','Status','Contract','Customer','Manager','Service Area Line'),
  createData('No.1', 'MORSOL TC FA DN...', 'MORSOL TC FA DN...','2023-06-01', '2023-12-31','Active Project','CustRefText','Aker Bp Asar','Manager','Service Area Line'),
];

const WorkPackagesTable=() =>{
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ProjectNumber</TableCell>
               <TableCell align="right">ProjectName</TableCell>
               <TableCell align="right">WPShortName</TableCell>
               <TableCell align="right">StartDate</TableCell>
               <TableCell align="right">EndDate</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Contract</TableCell>
              <TableCell align="right">Customer</TableCell>
              <TableCell align="right">PM</TableCell>
              <TableCell align="right">Service Area/Line</TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>ProjectNumber</TableCell>
               <TableCell align="right">ProjectName</TableCell>
               <TableCell align="right">WPShortName</TableCell>
               <TableCell align="right">StartDate</TableCell>
               <TableCell align="right">EndDate</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Contract</TableCell>
              <TableCell align="right">Customer</TableCell>
              <TableCell align="right">PM</TableCell>
              <TableCell align="right">Service Area/Line</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.WPNumber} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default WorkPackagesTable;
