import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Icon from "@mui/material/Icon";
import "./WorkPackageTable.css";
import { Box, Button, MenuItem, Select } from "@mui/material";
import obj from "../dummy-data/ctr";

// interface IWorkPackageTableProps {}

// const WorkPackageTable: React.FunctionComponent<IWorkPackageTableProps> = (
//   props
// ) => {
//   const [data, setData] = React.useState(obj);
//   console.log("data:", data);

//   const [topHeader, setTopHeader] = React.useState([
//     "Project Number",
//     "Project Name",
//     "Project Short Name",
//     "Start Date",
//     "End Date",
//     "Status",
//     "Project Type",
//     "Bill Rate",
//     "Curr",
//     "Revenue",
//     "Cost",
//     "Revenue",
//     "Cost",
//     "hours",
//     "TSA/MSA",
//     "Margin",
//     "Revenue",
//     "Cost",
//   ]);

//   return (
//     <>
//       <Box sx={{ margin: "5px", display: "flex", justifyContent: "start" }}>
//         <Button className="custombtn" sx={{ margin: "10px" }}>
//           Edit
//         </Button>
//         <Button className="custombtn" sx={{ margin: "10px" }}>
//           Show Additional Fields
//         </Button>
//         <Button className="custombtn" sx={{ margin: "10px" }}>
//           Show Subtask
//         </Button>
//       </Box>
//       <TableContainer>
//         <Table
//           className="tborder"
//           sx={{ minWidth: 650 }}
//           aria-label="simple table"
//         >
//           <TableHead className="tableHead">
//             <TableRow>
//               {Array.isArray(header) &&
//                 header.map((head) => {
//                   return (
//                     <TableCell
//                       className="tborder"
//                       sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
//                     >
//                       {head}
//                     </TableCell>
//                   );
//                 })}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.ctrRevision.calcRev.ctrs.map((ctr) => (
//               <TableRow>
//                 <TableCell className="td tborder">
//                   {ctr.ap4_ctr_number.value[0]}
//                 </TableCell>
//                 <TableCell className="td tborder">
//                   {" "}
//                   {ctr.object_name.value[0]}
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   {ctr.object_name.value[0]}
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   {ctr.ap4_start_date.value[0].split("T")[0]}
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   {ctr.ap4_finish_date.value[0].split("T")[0]}
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   {ctr.ap4_ctr_status_code.value[0]}
//                 </TableCell>
//                 {/* CustomerName */}
//                 <TableCell className="td tborder" align="right">
//                   PM
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   Customer
//                 </TableCell>
//                 {/* ServiceCode */}
//                 <TableCell className="td tborder" align="right">
//                   {/* {ctr.AP4_BudgetCtrManagerRel.value[0].object_string.value.at(
//                     0
//                   )} */}
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   {ctr.ap4_ctr_service_code.value[0]}
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   <Select
//                     className="select"
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     // value={age}
//                     label="Age"
//                     // onChange={handleChange}
//                   >
//                     <MenuItem value={10}>Yes</MenuItem>
//                     <MenuItem value={20}>No</MenuItem>
//                   </Select>
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   <Select
//                     className="select"
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     // value={age}
//                     label="Age"
//                     // onChange={handleChange}
//                   >
//                     <MenuItem value={10}>Yes</MenuItem>
//                     <MenuItem value={20}>No</MenuItem>
//                   </Select>
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   <Select
//                     className="select"
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     // value={age}
//                     label="Age"
//                     // onChange={handleChange}
//                   >
//                     <MenuItem value={10}>{ctr.ap4_hide_ctr.value[0]}</MenuItem>
//                     {/* <MenuItem value={20}>{ctr.ap4_hide_ctr.value[0]}</MenuItem> */}
//                   </Select>
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   <Select
//                     className="select"
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     // value={age}
//                     label="Age"
//                     // onChange={handleChange}
//                   >
//                     <MenuItem value={10}>
//                       {ctr.ap4_submit_bill_rates_to_of.value[0]}
//                     </MenuItem>
//                     {/* <MenuItem value={20}>{ctr.ap4_hide_ctr.value[0]}</MenuItem> */}
//                   </Select>
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   Project Type
//                 </TableCell>
//                 {/* billRate */}
//                 <TableCell className="td tborder" align="right">
//                   {ctr.AP4_BudgetCtrRateSchRel.value[0].object_name.value[0]}
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   {
//                     ctr.AP4_BudgetCtrRateSchRel.value[0].ap4_currencycode
//                       .value[0]
//                   }
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   {ctr.ap4_refundable_revenue.value[0]}
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   {ctr.ap4_refundable_raw_cost.value[0]}
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   {ctr.ap4_revenue.value[0]}
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   {ctr.ap4_raw_cost.value[0]}
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   {ctr.ap4_hours.value[0]}
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   {ctr.ap4_msa_tsa.value[0]}
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   {ctr.ap4_operating_margin.value[0]} %
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   {`${
//                     ctr.ap4_refundable_revenue.value[0] +
//                     ctr.ap4_revenue.value[0]
//                   }`}
//                 </TableCell>
//                 <TableCell className="td tborder" align="right">
//                   {`${
//                     ctr.ap4_refundable_raw_cost.value[0] +
//                     ctr.ap4_raw_cost.value[0]
//                   }`}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </>
//   );
// };

// export default WorkPackageTable;

interface IWorkPackageTableProps {
  // handleEditButtonClick:()=>void |null
  // (e: any): () => void;
  // e: string | number | readonly string[] | undefined;
}

const WorkPackageTable: React.FunctionComponent<IWorkPackageTableProps> = (
  props
) => {
  const [editedData, setEditedData] = React.useState(obj);

  const sDates = editedData.ctrRevision.calcRev.ctrs.map((ob) => {
    return ob.ap4_start_date.value[0].split("T")[0];
  });
  console.log("Sdates:", sDates);

  const [editMode, setEditMode] = React.useState(false);
  const [startDate, setStartDate] = React.useState(sDates[0]);
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
  const handleEditButtonClick = () => {
    setEditMode(true);
  };

  const handleCellChange = (e: any, index: any) => {
    const { value, name } = e.target.value;
    const newData = { ...editedData, [name]: value };

    newData.ctrRevision.calcRev.ctrs[index].ap4_ctr_number.value[0] = value;
    newData.ctrRevision.calcRev.ctrs[index].object_name.value[0] = value;
    newData.ctrRevision.calcRev.ctrs[index].object_name.value[0] = value;
    newData.ctrRevision.calcRev.ctrs[index].ap4_start_date.value[0].split(
      "T"
    )[0] = value;
    newData.ctrRevision.calcRev.ctrs[index].ap4_finish_date.value[0].split(
      "T"
    )[0] = value;
    newData.ctrRevision.calcRev.ctrs[index].ap4_ctr_status_code.value[0] =
      value;
    newData.ctrRevision.calcRev.ctrs[
      index
    ].AP4_BudgetCtrRateSchRel.value[0].object_name.value[0] = value;
    newData.ctrRevision.calcRev.ctrs[index].ap4_ctr_status_code.value[0] =
      value;
    newData.ctrRevision.calcRev.ctrs[
      index
    ].AP4_BudgetCtrRateSchRel.value[0].ap4_currencycode.value[0] = value;
    newData.ctrRevision.calcRev.ctrs[index].ap4_refundable_revenue.value[0] =
      value;
    newData.ctrRevision.calcRev.ctrs[index].ap4_refundable_raw_cost.value[0] =
      value;
    newData.ctrRevision.calcRev.ctrs[index].ap4_revenue.value[0] = value;
    newData.ctrRevision.calcRev.ctrs[index].ap4_raw_cost.value[0] = value;
    newData.ctrRevision.calcRev.ctrs[index].ap4_hours.value[0] = value;
    newData.ctrRevision.calcRev.ctrs[index].ap4_msa_tsa.value[0] = value;
    newData.ctrRevision.calcRev.ctrs[index].ap4_operating_margin.value[0] =
      value;

    // const refundable_revenue =
    //   newData.ctrRevision.calcRev.ctrs[index].ap4_refundable_revenue.value[0];
    // const revenue_cost =
    //   newData.ctrRevision.calcRev.ctrs[index].ap4_revenue.value[0];
    // const total = refundable_revenue + revenue_cost;

    // const [value[0]]=newData.ctrRevision.calcRev.ctrs[index].ap4_refundable_revenue.value[0];

    //  const {`${
    //     newData.ctrRevision.calcRev.ctrs[index].ap4_refundable_revenue.value[0] +
    //     newData.ctrRevision.calcRev.ctrs[index].ap4_revenue.value[0]
    //   }`} = value;
    setEditedData(newData);
  };

  return (
    <>
      <Box sx={{ margin: "5px", display: "flex", justifyContent: "start" }}>
        <Button
          className="custombtn"
          sx={{ margin: "10px" }}
          onClick={handleEditButtonClick}
        >
          Edit
        </Button>
        <Button className="custombtn" sx={{ margin: "10px" }}>
          Show Additional Fields
        </Button>
        <Button className="custombtn" sx={{ margin: "10px" }}>
          Show Subtask
        </Button>
      </Box>
      <TableContainer>
        <Table
          className="tborder"
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead className="tableHead">
            <TableRow>
              {Array.isArray(header) &&
                header.map((head) => {
                  return (
                    <TableCell
                      className="tborder"
                      sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                    >
                      {head}
                    </TableCell>
                  );
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            {editedData.ctrRevision.calcRev.ctrs.map((ctr, index) => (
              <TableRow key={index}>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {editMode ? (
                    <input
                      className="cells"
                      name="ctr_number"
                      type="text"
                      value={
                        editedData.ctrRevision.calcRev.ctrs[index]
                          .ap4_ctr_number.value[0]
                      }
                      onChange={(e) => handleCellChange(e, index)}
                    />
                  ) : (
                    ctr.ap4_ctr_number.value[0]
                  )}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {editMode ? (
                    <input
                      className="cells"
                      name="object_name"
                      type="text"
                      value={
                        editedData.ctrRevision.calcRev.ctrs[index].object_name
                          .value[0]
                      }
                      onChange={(e) => handleCellChange(e, index)}
                    />
                  ) : (
                    ctr.object_name.value[0]
                  )}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {editMode ? (
                    <input
                      className="cells"
                      name="project_short_name"
                      type="text"
                      value={
                        editedData.ctrRevision.calcRev.ctrs[index].object_name
                          .value[0]
                      }
                      onChange={(e) => handleCellChange(e, index)}
                    />
                  ) : (
                    ctr.object_name.value[0]
                  )}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {editMode ? (
                    <input
                      className="cells"
                      name="finish_date"
                      type="date"
                      value={
                        editedData.ctrRevision.calcRev.ctrs[
                          index
                        ].ap4_start_date.value[0].split("T")[0]
                      }
                      onChange={(e) => handleCellChange(e, index)}
                    />
                  ) : (
                    ctr.ap4_start_date.value[0].split("T")[0]
                  )}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {editMode ? (
                    <input
                      className="cells"
                      name="finish_date"
                      type="date"
                      value={
                        editedData.ctrRevision.calcRev.ctrs[
                          index
                        ].ap4_finish_date.value[0].split("T")[0]
                      }
                      onChange={(e) => handleCellChange(e, index)}
                    />
                  ) : (
                    ctr.ap4_finish_date.value[0].split("T")[0]
                  )}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {editMode ? (
                    <input
                      className="cells"
                      name="status_code"
                      type="text"
                      value={
                        editedData.ctrRevision.calcRev.ctrs[index]
                          .ap4_ctr_status_code.value[0]
                      }
                      onChange={(e) => handleCellChange(e, index)}
                    />
                  ) : (
                    ctr.ap4_ctr_status_code.value[0]
                  )}
                </TableCell>
                {/* Contract */}
                <TableCell className="td tborder" align="right">
                  {editMode && (
                    <input
                      className="cells"
                      name="pm"
                      type="text"
                      value="pm"
                      // value={
                      //   editedData.ctrRevision.calcRev.ctrs[index]
                      //     .ap4_ctr_status_code.value[0]
                      // }
                      // onChange={(e) => handleCellChange(e, index)}
                    />
                  )}
                </TableCell>
                {/* Customer */}
                <TableCell className="td tborder" align="right">
                  {editMode && (
                    <input
                      className="cells"
                      name="customer"
                      type="text"
                      value="customer"
                      // value={
                      //   editedData.ctrRevision.calcRev.ctrs[index]
                      //     .ap4_ctr_status_code.value[0]
                      // }
                      // onChange={(e) => handleCellChange(e, index)}
                    />
                  )}
                </TableCell>
                {/* Manager */}
                <TableCell className="td tborder" align="right">
                  {editMode && (
                    <input
                      className="cells"
                      name="manager"
                      type="text"
                      value="manager"
                      // onChange={(e) => handleCellChange(e, index)}
                    />
                  )}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {editMode ? (
                    <input
                      className="cells"
                      name="service_code"
                      type="text"
                      value={
                        editedData.ctrRevision.calcRev.ctrs[index]
                          .ap4_ctr_service_code.value[0]
                      }
                      onChange={(e) => handleCellChange(e, index)}
                    />
                  ) : (
                    ctr.ap4_ctr_service_code.value[0]
                  )}
                </TableCell>
                {/* Billable */}
                <TableCell className="td tborder" align="right">
                  {editMode && (
                    <input
                      className="cells"
                      name="billable"
                      type="text"
                      value="billable"
                      // onChange={(e) => handleCellChange(e, index)}
                    />
                  )}
                </TableCell>
                {/* chargable */}
                <TableCell className="td tborder" align="right">
                  {editMode && (
                    <input
                      className="cells"
                      name="chargable"
                      type="text"
                      value="chargable"
                      // onChange={(e) => handleCellChange(e, index)}
                    />
                  )}
                </TableCell>
                {/* customer portal */}
                <TableCell className="td tborder" align="right">
                  {editMode && (
                    <input
                      className="cells"
                      name="customer portal"
                      type="text"
                      value="customer portal"
                      // onChange={(e) => handleCellChange(e, index)}
                    />
                  )}
                </TableCell>
                {/* submitbillrates */}
                <TableCell className="td tborder" align="right">
                  {editMode && (
                    <input
                      className="cells"
                      name="submitbillrates"
                      type="text"
                      value="submitbillrates"
                      // onChange={(e) => handleCellChange(e, index)}
                    />
                  )}
                </TableCell>
                {/* project Type */}
                <TableCell className="td tborder" align="right">
                  {editMode && (
                    <input
                      className="cells"
                      name="ptype"
                      type="text"
                      value="project Type"
                      // onChange={(e) => handleCellChange(e, index)}
                    />
                  )}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {editMode ? (
                    <input
                      className="cells"
                      name="billrate"
                      type="text"
                      value={
                        editedData.ctrRevision.calcRev.ctrs[index]
                          .AP4_BudgetCtrRateSchRel.value[0].object_name.value[0]
                      }
                      onChange={(e) => handleCellChange(e, index)}
                    />
                  ) : (
                    ctr.AP4_BudgetCtrRateSchRel.value[0].object_name.value[0]
                  )}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {editMode ? (
                    <input
                      className="cells"
                      name="currencycode"
                      type="text"
                      value={
                        editedData.ctrRevision.calcRev.ctrs[index]
                          .AP4_BudgetCtrRateSchRel.value[0].ap4_currencycode
                          .value[0]
                      }
                      onChange={(e) => handleCellChange(e, index)}
                    />
                  ) : (
                    ctr.AP4_BudgetCtrRateSchRel.value[0].ap4_currencycode
                      .value[0]
                  )}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {editMode ? (
                    <input
                      className="cells"
                      name="refundable_revenue"
                      type="text"
                      value={
                        editedData.ctrRevision.calcRev.ctrs[index]
                          .ap4_refundable_revenue.value[0]
                      }
                      onChange={(e) => handleCellChange(e, index)}
                    />
                  ) : (
                    ctr.ap4_refundable_revenue.value[0]
                  )}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {editMode ? (
                    <input
                      className="cells"
                      name="refundable_raw_cost"
                      type="text"
                      value={
                        editedData.ctrRevision.calcRev.ctrs[index]
                          .ap4_refundable_raw_cost.value[0]
                      }
                      onChange={(e) => handleCellChange(e, index)}
                    />
                  ) : (
                    ctr.ap4_refundable_raw_cost.value[0]
                  )}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {editMode ? (
                    <input
                      className="cells"
                      name="revenue"
                      type="text"
                      value={
                        editedData.ctrRevision.calcRev.ctrs[index].ap4_revenue
                          .value[0]
                      }
                      onChange={(e) => handleCellChange(e, index)}
                    />
                  ) : (
                    ctr.ap4_revenue.value[0]
                  )}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {editMode ? (
                    <input
                      className="cells"
                      name="raw_cost"
                      type="text"
                      value={
                        editedData.ctrRevision.calcRev.ctrs[index].ap4_raw_cost
                          .value[0]
                      }
                      onChange={(e) => handleCellChange(e, index)}
                    />
                  ) : (
                    ctr.ap4_raw_cost.value[0]
                  )}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {editMode ? (
                    <input
                      className="cells"
                      name="hours"
                      type="text"
                      value={
                        editedData.ctrRevision.calcRev.ctrs[index].ap4_hours
                          .value[0]
                      }
                      onChange={(e) => handleCellChange(e, index)}
                    />
                  ) : (
                    ctr.ap4_hours.value[0]
                  )}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {editMode ? (
                    <input
                      className="cells"
                      name="msa_tsa"
                      type="text"
                      value={
                        editedData.ctrRevision.calcRev.ctrs[index].ap4_msa_tsa
                          .value[0]
                      }
                      onChange={(e) => handleCellChange(e, index)}
                    />
                  ) : (
                    ctr.ap4_msa_tsa.value[0]
                  )}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {editMode ? (
                    <input
                      className="cells"
                      name="margin"
                      type="text"
                      value={
                        editedData.ctrRevision.calcRev.ctrs[index]
                          .ap4_operating_margin.value[0]
                      }
                      onChange={(e) => handleCellChange(e, index)}
                    />
                  ) : (
                    ctr.ap4_operating_margin.value[0]
                  )}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {/* <input
                    className="cells"
                    name="total_revenue"
                    type="text"
                    value=
                    onChange={(e) => handleCellChange(e, index)}
                  /> */}
                  {`${
                    editedData.ctrRevision.calcRev.ctrs[index]
                      .ap4_refundable_revenue.value[0] +
                    editedData.ctrRevision.calcRev.ctrs[index].ap4_revenue
                      .value[0]
                  }`}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {/* <input
                    className="cells"
                    name="total_revenue_cost"
                    type="text"
                    value={`${
                      editedData.ctrRevision.calcRev.ctrs[index]
                        .ap4_refundable_raw_cost.value[0] +
                      editedData.ctrRevision.calcRev.ctrs[index].ap4_raw_cost
                        .value[0]
                    }`}
                    onChange={(e) => handleCellChange(e, index)}
                  /> */}
                  {`${
                    editedData.ctrRevision.calcRev.ctrs[index]
                      .ap4_refundable_raw_cost.value[0] +
                    editedData.ctrRevision.calcRev.ctrs[index].ap4_raw_cost
                      .value[0]
                  }`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default WorkPackageTable;
