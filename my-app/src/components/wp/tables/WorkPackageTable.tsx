import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import obj from "../dummy-data/ctrs.json";
import Icon from '@mui/material/Icon';

interface IWorkPackageTableProps {}

const WorkPackageTable: React.FunctionComponent<IWorkPackageTableProps> = (
  props
) => {
  const [data, setData] = React.useState(obj);
  const [header, setHeader] = React.useState([
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
    "Cost",
  ]);
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="tableHead">
            
            <TableRow>
              {Array.isArray(header) &&
                header.map((head) => {
                    return (
                      <TableCell sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                        {head}
                      </TableCell>
                    ); 
                })}
            </TableRow>
            
          </TableHead>
          <TableBody>
            {data.calcRev.ctrs.map((ctr) => (
              <TableRow>
                <TableCell className = "td t_border">{ctr.ap4_ctr_number.value[0]}</TableCell>
                <TableCell className = "td t_border" > {ctr.object_name.value[0]}</TableCell>
                <TableCell className = "td t_border" >{ctr.object_name.value[0]}</TableCell>
                <TableCell className = "td t_border" >
                  {ctr.ap4_start_date.value[0].split("T")[0]}
                </TableCell>
                <TableCell className = "td t_border" >
                  {ctr.ap4_finish_date.value[0].split("T")[0]}
                </TableCell>
                <TableCell className = "td t_border" >
                  {ctr.ap4_ctr_status_code.value[0]}
                </TableCell>
                {/* CustomerName */}
                <TableCell className = "td t_border" >Customer</TableCell>
                <TableCell className = "td t_border" >PM</TableCell>
                {/* ServiceCode */}
                <TableCell className = "td t_border" >
                  {ctr.ap4_ctr_service_code.value[0]}
                </TableCell>
                <TableCell className = "td t_border" ></TableCell>
                <TableCell className = "td t_border" ></TableCell>
                <TableCell className = "td t_border" ></TableCell>
                <TableCell className = "td t_border" ></TableCell>
                <TableCell className = "td t_border" ></TableCell>
                <TableCell className = "td t_border" >Project Type</TableCell>
                {/* billRate */}
                <TableCell className = "td t_border" >
                  {ctr.AP4_BudgetCtrRateSchRel.value[0].object_name.value[0]}
                </TableCell>
                <TableCell className = "td t_border" >
                  {
                    ctr.AP4_BudgetCtrRateSchRel.value[0].ap4_currencycode
                      .value[0]
                  }
                </TableCell>
                <TableCell className = "td t_border" >
                  {ctr.ap4_refundable_revenue.value[0]}
                </TableCell>
                <TableCell className = "td t_border" >
                  {ctr.ap4_refundable_raw_cost.value[0]}
                </TableCell>
                <TableCell className = "td t_border" >{ctr.ap4_revenue.value[0]}</TableCell>
                <TableCell className = "td t_border" >{ctr.ap4_raw_cost.value[0]}</TableCell>
                <TableCell className = "td t_border" >{ctr.ap4_hours.value[0]}</TableCell>
                <TableCell className = "td t_border" >{ctr.ap4_msa_tsa.value[0]}</TableCell>
                <TableCell className = "td t_border" >
                  {ctr.ap4_operating_margin.value[0]} %
                </TableCell>
                <TableCell className = "td t_border" >Revenue</TableCell>
                <TableCell className = "td t_border" >Cost</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default WorkPackageTable;
