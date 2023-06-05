import React, { useEffect, ChangeEvent } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./WorkPackageTable.css";
import { Box, Button } from "@mui/material";
import obj1 from "../dummy-data/ctr";

let obj = obj1;
interface IWorkPackageTableProps {}

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
  const header1 = [
    "pooja",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "External Fee",
    "",
    "Refundable Expenses",
    "",
    "",
    "",
    "",
    "",
    "",
    ,
    "Total",
  ];

  const [header, setHeader] = React.useState([
    "",
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

  // console.log(
  //   "temp",
  //   tempData.ctrRevision.calcRev.ctrs[0].ap4_ctr_number.value
  // );
  // console.log(
  //   "initial",
  //   initialData.ctrRevision.calcRev.ctrs[0].ap4_ctr_number.value
  // );

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
    console.log(
      "initialData",
      initialData.ctrRevision.calcRev.ctrs[index].ap4_is_fixed_price.value
    );
    console.log(
      "Temp",
      tempData.ctrRevision.calcRev.ctrs[index].ap4_is_fixed_price.value
    );
  };
  console.log("initialData", initialData);
  console.log("Temp", tempData);

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
        <Table
          className="tborder"
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          {/* table one */}
          <TableHead className="tableHead">
            <TableRow>
              {Array.isArray(header1) &&
                header1.map((head) => {
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
          <TableHead className="tableHead">
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

          {/* table two */}
          <TableHead className="tableHead">
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
          <TableBody>
            {tempData.ctrRevision.calcRev.ctrs.map((ctr: any, index: any) => (
              <TableRow key={index}>
                <TableCell
                  className={`td tborder ${editMode ? "editable" : ""}`}
                ></TableCell>
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
                <TableCell className="td tborder" align="right">
                  {editMode ? (
                    <select
                      name={ctr.ap4_ctr_status_code.name}
                      onChange={(e) => handleSelectChange(e, index)}
                      value={ctr.ap4_ctr_status_code.value[0]}
                    >
                      <option value="Draft">Draft</option>
                      <option value="Proposed">Proposed</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Cancelled">Cancelled</option>
                      <option value="Completed">Completed</option>
                    </select>
                  ) : (
                    <select
                      disabled
                      name={ctr.ap4_ctr_status_code.name}
                      onChange={(e) => handleSelectChange(e, index)}
                      value={ctr.ap4_ctr_status_code.value[0]}
                    >
                      <option value="Draft">Draft</option>
                      <option value="Proposed">Proposed</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Cancelled">Cancelled</option>
                      <option value="Completed">Completed</option>
                    </select>
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
                        name={ctr.ap4_hide_ctr.name}
                        onChange={(e) => handleSelectChange(e, index)}
                        value={ctr.ap4_hide_ctr.value[0]}
                      >
                        <option value="true">Show</option>
                        <option value="false">Hide</option>
                      </select>
                    ) : (
                      <select
                        name={ctr.ap4_hide_ctr.name}
                        disabled
                        value={ctr.ap4_hide_ctr.value[0]}
                      >
                        <option value="true">Show</option>
                        <option value="false">Hide</option>
                      </select>
                    )}
                  </TableCell>
                )}
                {showAdditionalFields && (
                  <TableCell className="td tborder" align="right">
                    {editMode ? (
                      <select
                        name={ctr.ap4_submit_bill_rates_to_of.name}
                        onChange={(e) => handleSelectChange(e, index)}
                        value={ctr.ap4_submit_bill_rates_to_of.value[0]}
                      >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    ) : (
                      <select
                        name={ctr.ap4_submit_bill_rates_to_of.name}
                        disabled
                        value={ctr.ap4_submit_bill_rates_to_of.value[0]}
                      >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    )}
                  </TableCell>
                )}
                <TableCell className="td tborder" align="right">
                  {editMode ? (
                    <select
                      name={ctr.ap4_is_fixed_price.name}
                      onChange={(e) => handleSelectChange(e, index)}
                      value={ctr.ap4_is_fixed_price.value[0]}
                    >
                      <option value="true">Fixed Price</option>
                      <option value="false">Time & material</option>
                    </select>
                  ) : (
                    <select
                      name={ctr.ap4_is_fixed_price.name}
                      disabled
                      value={ctr.ap4_is_fixed_price.value[0]}
                    >
                      <option value="true">Fixed Price</option>
                      <option value="false">Time & material</option>
                    </select>
                  )}
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
