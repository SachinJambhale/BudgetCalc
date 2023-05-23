import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Ctrs from "../dummy-data/ctrs.json";

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
  ServiceAreaLine: string,
  Billable: string,
  Chargeble: string,
  CustomerPortal: string,
  SubmitBillRates: string,
  Type: string,
  BillRate: string,
  Curr: string,
  Revenue: string,
  Cost: string,
  Revenue1: string,
  Cost1: string,
  Hours: string,
  TSAMSA: string,
  Margin: string,
  Revenue2: string,
  Cost2: string
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
    Billable,
    Chargeble,
    CustomerPortal,
    SubmitBillRates,
    Type,
    BillRate,
    Curr,
    Revenue,
    Cost,
    Revenue1,
    Cost1,
    Hours,
    TSAMSA,
    Margin,
    Revenue2,
    Cost2,
    history: [
      {
        WPNumber,
        WPName,
        ProjectShortName,
        StartDate,
        EndDate,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(Ctrs);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
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
        <TableCell align="right">{row.Billable}</TableCell>
        <TableCell align="right">{row.Chargeble}</TableCell>
        <TableCell align="right">{row.CustomerPortal}</TableCell>
        <TableCell align="right">{row.SubmitBillRates}</TableCell>
        <TableCell align="right">{row.Type}</TableCell>
        <TableCell align="right">{row.BillRate}</TableCell>
        <TableCell align="right">{row.Curr}</TableCell>
        <TableCell align="right">{row.Revenue}</TableCell>
        <TableCell align="right">{row.Cost}</TableCell>
        <TableCell align="right">{row.Revenue1}</TableCell>
        <TableCell align="right">{row.Cost1}</TableCell>
        <TableCell align="right">{row.Hours}</TableCell>
        <TableCell align="right">{row.TSAMSA}</TableCell>
        <TableCell align="right">{row.Margin}</TableCell>
        <TableCell align="right">{row.Revenue2}</TableCell>
        <TableCell align="right">{row.Cost2}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {data.calcRev.ctrs.map((ctr) => (
                    <TableRow>
                      <TableCell align="right">
                        {ctr.ap4_ctr_number.value[0]}
                      </TableCell>
                      <TableCell align="right">
                        {ctr.object_name.value[0]}
                      </TableCell>
                      <TableCell align="right">
                        {ctr.object_name.value[0]}
                      </TableCell>
                      <TableCell align="right">
                        {ctr.ap4_start_date.value[0].split("T")[0]}
                      </TableCell>
                      <TableCell align="right">
                        {ctr.ap4_finish_date.value[0].split("T")[0]}
                      </TableCell>
                      <TableCell align="right">
                        {ctr.ap4_ctr_status_code.value[0]}
                      </TableCell>
                      {/* CustomerName */}
                      <TableCell align="right">Customer</TableCell>
                      <TableCell align="right">PM</TableCell>
                      {/* ServiceCode */}
                      <TableCell align="right">
                        {ctr.ap4_ctr_service_code.value[0]}
                      </TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right">Project Type</TableCell>
                      {/* billRate */}
                      <TableCell align="right">
                        {
                          ctr.AP4_BudgetCtrRateSchRel.value[0].object_name
                            .value[0]
                        }
                      </TableCell>
                      <TableCell align="right">
                        {
                          ctr.AP4_BudgetCtrRateSchRel.value[0].ap4_currencycode
                            .value[0]
                        }
                      </TableCell>
                      <TableCell align="right">
                        {ctr.ap4_refundable_revenue.value[0]}
                      </TableCell>
                      <TableCell align="right">
                        {ctr.ap4_refundable_raw_cost.value[0]}
                      </TableCell>
                      <TableCell align="right">
                        {ctr.ap4_revenue.value[0]}
                      </TableCell>
                      <TableCell align="right">
                        {ctr.ap4_raw_cost.value[0]}
                      </TableCell>
                      <TableCell align="right">
                        {ctr.ap4_hours.value[0]}
                      </TableCell>
                      <TableCell align="right">
                        {ctr.ap4_msa_tsa.value[0]}
                      </TableCell>
                      <TableCell align="right">
                        {ctr.ap4_operating_margin.value[0]} %
                      </TableCell>
                      <TableCell align="right">Revenue</TableCell>
                      <TableCell align="right">Cost</TableCell>
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
  createData(
    "WP Number",
    "WP Name",
    "Project Short Name",
    "StartDate",
    "EndDate",
    "Status",
    "Contract",
    "Customer",
    "Manager",
    "Service Area Line",
    "Billable",
    "Chargeble",
    "CustomerPortal",
    "SubmitBillRates",
    "Type",
    "BillRate",
    "Curr",
    "Revenue",
    "Cost",
    "Revenue",
    "Cost",
    "Hours",
    "TSAMSA",
    "Margin",
    "Revenue",
    "Cost"
  ),
  // createData('WP Number', 'WP Name', 'Project Short Name','StartDate', 'EndDate','Status','Contract','Customer','Manager','Service Area Line', 'Billable', 'Chargeble', 'Customer Portal', 'Submit Bill','Type', 'Bill Rate', 'Currancy', 'Revenue', 'Cost', 'Revenue', 'Cost','Hours', 'TSA/MSA', 'Margin', 'Revenue', 'Cost',),
  createData(
    "No_Test_1",
    "Name_Test_1",
    "Name_Test_1",
    "2023-04-01",
    "2023-09-30",
    "Accepted",
    "CustRef_text",
    "Aker BP ASA",
    "Surname,Forename(signature)",
    "5520-Transmission & Distribution",
    "Yes",
    "Yes",
    "Hide",
    "Yes",
    "Time & material",
    "CTR-00098302_EUR",
    "EUR",
    "3000",
    "3158",
    "0",
    "0",
    "20",
    "225",
    "-13%",
    "3000",
    "3383"
  ),
  createData(
    "No_Test_1",
    "Name_Test_1",
    "Name_Test_1",
    "2023-04-01",
    "2023-09-30",
    "Accepted",
    "CustRef_text",
    "Aker BP ASA",
    "Surname,Forename(signature)",
    "5520-Transmission & Distribution",
    "Yes",
    "Yes",
    "Hide",
    "Yes",
    "Time & material",
    "CTR-00098302_EUR",
    "EUR",
    "3000",
    "3158",
    "0",
    "0",
    "20",
    "225",
    "-13%",
    "3000",
    "3383"
  ),
];

const WorkPackagesTable = () => {
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
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Project Type</TableCell>
            <TableCell align="right">Bill Rate</TableCell>
            <TableCell align="right">Curr.</TableCell>
            <TableCell align="right">Revenue</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Revenue</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Hours</TableCell>
            <TableCell align="right">TSA/MSA</TableCell>
            <TableCell align="right">Margin</TableCell>
            <TableCell align="right">Revenue</TableCell>
            <TableCell align="right">Cost</TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>10393537</TableCell>
            <TableCell align="right">MORSAL_TC_FA_DN...</TableCell>
            <TableCell align="right">MORSAL_TC_FA_DN-586203</TableCell>
            <TableCell align="right">2023-04-01</TableCell>
            <TableCell align="right">2023-09-30</TableCell>
            <TableCell align="right">Active Project</TableCell>
            <TableCell align="right">CustRef_text</TableCell>
            <TableCell align="right">Aker BP ASA</TableCell>
            <TableCell align="right">Per Torjus Einstabland</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">T&M TTB</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Eur</TableCell>
            <TableCell align="right">9000</TableCell>
            <TableCell align="right">9475</TableCell>
            <TableCell align="right">0</TableCell>
            <TableCell align="right">0</TableCell>
            <TableCell align="right">60</TableCell>
            <TableCell align="right">675.00</TableCell>
            <TableCell align="right">-13%</TableCell>
            <TableCell align="right">9000</TableCell>
            <TableCell align="right">10150</TableCell>
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
};

export default WorkPackagesTable;
