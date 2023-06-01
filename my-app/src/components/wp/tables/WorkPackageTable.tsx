import React, { useEffect, ChangeEvent } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./WorkPackageTable.css";
import { Box, Button, TextField } from "@mui/material";
import obj1 from "../dummy-data/ctr";

let obj = obj1;
interface IWorkPackageTableProps { }

const WorkPackageTable: React.FunctionComponent<IWorkPackageTableProps> = (
  props
) => {
  const [initialData, setInitialData] = React.useState(obj);
  console.log("obj", obj);
  const _ = require("lodash");
  const copiedObject = _.cloneDeep(initialData);
  const [editMode, setEditMode] = React.useState(false);
  const [showAdditionalFields, setShowAdditionalFields] = React.useState(false);

  const [tempData, setTempData] = React.useState(copiedObject);
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

  const handleSave = () => {
    setInitialData({ ...tempData });
    setEditMode(false);
  };

  console.log(
    "temp",
    tempData.ctrRevision.calcRev.ctrs[0].ap4_ctr_number.value
  );
  console.log(
    "initial",
    initialData.ctrRevision.calcRev.ctrs[0].ap4_ctr_number.value
  );

  const handleCancel = () => {
    const copiedObject1 = _.cloneDeep(initialData);
    setTempData({ ...copiedObject1 });
    console.log("obj", obj);
    setEditMode(false);
    console.log(
      "temp",
      tempData.ctrRevision.calcRev.ctrs[0].ap4_ctr_number.value
    );
    console.log(
      "initial",
      initialData.ctrRevision.calcRev.ctrs[0].ap4_ctr_number.value
    );
  };

  useEffect(() => {
    setTempData(_.cloneDeep(initialData));
  }, [initialData]);

  const handleSelectChange = (
    e: ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const name = e.target.name as string;
    const { value } = e.target;
    tempData.ctrRevision.calcRev.ctrs[index][name].value[0] = value;

    setTempData({ ...tempData });
    // console.log(
    //   "initialData",
    //   initialData.ctrRevision.calcRev.ctrs[index].ap4_billable.value
    // );
    // console.log(
    //   "Temp",
    //   tempData.ctrRevision.calcRev.ctrs[index].ap4_billable.value
    // );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    e.preventDefault();
    const name = e.target.name as string;
    const { value } = e.target;
    tempData.ctrRevision.calcRev.ctrs[index][name].value[0] = value;
    setTempData({ ...tempData });
    console.log("initialData", initialData);
    console.log("Temp", tempData);
  };

  return (
    <>
      <Box sx={{ margin: "5px", display: "flex", justifyContent: "start" }}>
        {editMode ? (
          <>
            <Button
              className="custombtn"
              sx={{ margin: "10px" }}
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              className="custombtn"
              sx={{ margin: "10px" }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </>
        ) : (
          <Button
            className="custombtn"
            sx={{ margin: "10px" }}
            onClick={handleEditButtonClick}
          >
            Edit
          </Button>
        )}

        <Button
          onClick={() => setShowAdditionalFields(!showAdditionalFields)}
          className="custombtn"
          sx={{ margin: "10px" }}
        >
          {showAdditionalFields
            ? "Hide Additional Fields"
            : "Show Additional Fields"}
        </Button>
        <Button className="custombtn" sx={{ margin: "10px" }}>
          Show Subtask
        </Button>
      </Box>
      <TableContainer>
        <Table className="table">
          <TableHead className="head">
            <tr className="tborder">
              <th className="tborder" colSpan={9}></th>
              {/* <th className="tborder"></th>
          <th className="tborder"></th>
          <th className="tborder"></th>
          <th className="tborder"></th>
          <th className="tborder"></th>
          <th className="tborder"></th>
          <th className="tborder"></th>
          <th className="tborder"></th> */}
              <th className="tborder" colSpan={2}>Total</th>
              <th className="tborder" colSpan={3}>Total</th>
              {/* <th className="tborder">Revenue</th>
          <th className="tborder">Cost</th> */}
              <th className="tborder" colSpan={4}>Hours</th>
              {/* <th className="tborder">TSAMSA</th>
          <th className="tborder">Margin</th>
          <th className="tborder">Revenue</th>
          <th className="tborder">Cost</th> */}
            </tr>
            <TableRow>
              {Array.isArray(header) &&
                header.map((head) => {
                  if (
                    !showAdditionalFields &&
                    (head === "Contract" ||
                      head === "Customer" ||
                      head === "Manager" ||
                      head === "Service Area Line" ||
                      head === "Billable" ||
                      head === "Chargeble" ||
                      head === "CustomerPortal" ||
                      head === "SubmitBillRates")
                  ) {
                    return null; // Hide the column
                  }
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
          <TableHead className="head">
            <TableRow>
              {Array.isArray(header) &&
                header.map((head) => {
                  if (
                    !showAdditionalFields &&
                    (head === "Contract" ||
                      head === "Customer" ||
                      head === "Manager" ||
                      head === "Service Area Line" ||
                      head === "Billable" ||
                      head === "Chargeble" ||
                      head === "CustomerPortal" ||
                      head === "SubmitBillRates")
                  ) {
                    return null; // Hide the column
                  }
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
          <TableBody className="body">
            {tempData.ctrRevision.calcRev.ctrs.map((ctr: any, index: any) => (
              <TableRow key={index}>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {editMode ? (
                    <input
                      className="cells"
                      name={ctr.ap4_ctr_number.name}
                      type="text"
                      value={ctr.ap4_ctr_number.value[0]}
                      onChange={(e) => handleChange(e, index)}
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
                      name={ctr.object_name.name}
                      type="text"
                      value={ctr.object_name.value[0]}
                      onChange={(e) => handleChange(e, index)}
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
                      name={ctr.object_name.name}
                      type="text"
                      value={ctr.object_name.value[0]}
                      onChange={(e) => handleChange(e, index)}
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
                      name={ctr.ap4_start_date.name}
                      type="date"
                      value={ctr.ap4_start_date.value[0].split("T")[0]}
                      onChange={(e) => handleChange(e, index)}
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
                      name={ctr.ap4_finish_date.name}
                      type="date"
                      value={ctr.ap4_finish_date.value[0].split("T")[0]}
                      onChange={(e) => handleChange(e, index)}
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
                      name={ctr.ap4_ctr_status_code.name}
                      type="text"
                      value={ctr.ap4_ctr_status_code.value[0]}
                      onChange={(e) => handleChange(e, index)}
                    />
                  ) : (
                    ctr.ap4_ctr_status_code.value[0]
                  )}
                </TableCell>
                {showAdditionalFields && (
                  <TableCell className="td tborder" align="right">
                    PM
                  </TableCell>
                )}
                {showAdditionalFields && (
                  <TableCell className="td tborder" align="right">
                    Customer
                  </TableCell>
                )}
                {showAdditionalFields && (
                  <TableCell className="td tborder" align="right">
                    Manager
                  </TableCell>
                )}
                {showAdditionalFields && (
                  <TableCell
                    className={`td tborder ${editMode ? "editable" : ""}`}
                    align="right"
                  >
                    {editMode ? (
                      <input
                        className="cells"
                        name={ctr.ap4_ctr_service_code.name}
                        type="text"
                        value={ctr.ap4_ctr_service_code.value[0]}
                        onChange={(e) => handleChange(e, index)}
                      />
                    ) : (
                      ctr.ap4_ctr_service_code.value[0]
                    )}
                  </TableCell>
                )}
                {showAdditionalFields && (
                  <TableCell className="td tborder" align="right">
                    {editMode ? (
                      <select
                        name={ctr.ap4_billable.name}
                        onChange={(e) => handleSelectChange(e, index)}
                        value={ctr.ap4_billable.value[0]}
                      >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    ) : (
                      <select
                        name={ctr.ap4_billable.name}
                        disabled
                        value={ctr.ap4_billable.value[0]}
                      >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    )}
                  </TableCell>
                )}
                {showAdditionalFields && (
                  <TableCell className="td tborder" align="right">
                    {editMode ? (
                      <select
                        name={ctr.ap4_chargeable.name}
                        onChange={(e) => handleSelectChange(e, index)}
                        value={ctr.ap4_chargeable.value[0]}
                      >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    ) : (
                      <select
                        name={ctr.ap4_chargeable.name}
                        disabled
                        value={ctr.ap4_chargeable.value[0]}
                      >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    )}
                  </TableCell>
                )}
                {showAdditionalFields && (
                  <TableCell className="td tborder" align="right">
                    {editMode ? (
                      <select
                        name={ctr.ap4_chargeable.name}
                        onChange={(e) => handleSelectChange(e, index)}
                        value={ctr.ap4_chargeable.value[0]}
                      >
                        <option value="true">Show</option>
                        <option value="false">Hide</option>
                      </select>
                    ) : (
                      <select
                        name={ctr.ap4_chargeable.name}
                        disabled
                        value={ctr.ap4_chargeable.value[0]}
                      >
                        <option value="true">Show</option>
                        <option value="false">Hide</option>
                      </select>
                    )}
                  </TableCell>
                )}
                {showAdditionalFields && (
                  <TableCell className="td tborder" align="right">
                    SubmitBillRates
                  </TableCell>
                )}
                <TableCell className="td tborder" align="right">
                  Type
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {editMode ? (
                    <input
                      className="cells"
                      name={
                        ctr.AP4_BudgetCtrRateSchRel.value[0].object_name.name
                      }
                      type="text"
                      value={
                        ctr.AP4_BudgetCtrRateSchRel.value[0].object_name
                          .value[0]
                      }
                      onChange={(e) => handleChange(e, index)}
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
                      type="text"
                      name={
                        ctr.AP4_BudgetCtrRateSchRel.value[0].ap4_currencycode
                          .name
                      }
                      value={
                        ctr.AP4_BudgetCtrRateSchRel.value[0].ap4_currencycode
                          .value[0]
                      }
                      onChange={(e) => handleChange(e, index)}
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
                      name={ctr.ap4_refundable_revenue.name}
                      type="text"
                      value={ctr.ap4_refundable_revenue.value[0]}
                      onChange={(e) => handleChange(e, index)}
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
                      name={ctr.ap4_refundable_raw_cost.name}
                      type="text"
                      value={ctr.ap4_refundable_raw_cost.value[0]}
                      onChange={(e) => handleChange(e, index)}
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
                      name={ctr.ap4_revenue.name}
                      type="text"
                      value={ctr.ap4_revenue.value[0]}
                      onChange={(e) => handleChange(e, index)}
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
                      name={ctr.ap4_raw_cost.name}
                      type="text"
                      value={ctr.ap4_raw_cost.value[0]}
                      onChange={(e) => handleChange(e, index)}
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
                      name={ctr.ap4_hours.name}
                      type="text"
                      value={ctr.ap4_hours.value[0]}
                      onChange={(e) => handleChange(e, index)}
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
                      name={ctr.ap4_msa_tsa.name}
                      type="text"
                      value={ctr.ap4_msa_tsa.value[0]}
                      onChange={(e) => handleChange(e, index)}
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
                      name={ctr.ap4_operating_margin.name}
                      type="text"
                      value={ctr.ap4_operating_margin.value[0]}
                      onChange={(e) => handleChange(e, index)}
                    />
                  ) : (
                    ctr.ap4_operating_margin.value[0]
                  )}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {+ctr.ap4_refundable_revenue.value[0] +
                    +ctr.ap4_revenue.value[0]}
                </TableCell>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                  align="right"
                >
                  {+ctr.ap4_refundable_raw_cost.value[0] +
                    +ctr.ap4_raw_cost.value[0]}
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
