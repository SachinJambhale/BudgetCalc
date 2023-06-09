import React, { useEffect, ChangeEvent } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import "./WorkPackageTable.css";
import obj1 from "../dummy-data/ctr";
import { Button, IconButton } from "@mui/material";
import RightIcon from "../Icons/RightIcon";
import DownIcon from "../Icons/DownIcon";

let obj = obj1;

interface IWorkPackageProps {}

const WorkPackage: React.FunctionComponent<IWorkPackageProps> = (props) => {
  const [initialData, setInitialData] = React.useState(obj);
  console.log("obj", obj);
  const _ = require("lodash");
  const copiedObject = _.cloneDeep(initialData);
  const [tempData, setTempData] = React.useState(copiedObject);
  const [editMode, setEditMode] = React.useState(false);
  const [showAdditionalFields, setShowAdditionalFields] = React.useState(false);
  const [showSubTaskData, setShowSubTaskData] = React.useState(false);
  const [openRows, setOpenRows] = React.useState<number[]>([]);

  const handleEditButtonClick = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setInitialData({ ...tempData });
    setEditMode(false);
  };
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

  // Row Toggle functionality
  const handleToggleRow = (rowIndex: number) => {
    if (rowIndex === -1) {
      // Clicked on the header

      if (openRows.length === tempData.ctrRevision.calcRev.ctrs.length) {
        // All rows are open, so close all

        setOpenRows([]);
      } else {
        // Some rows are closed, so open all

        const allRows = tempData.ctrRevision.calcRev.ctrs.map(
          (_: any, index: any) => index
        );

        setOpenRows(allRows);
      }
    } else {
      // Clicked on a row

      if (openRows.includes(rowIndex)) {
        setOpenRows(openRows.filter((row) => row !== rowIndex));
      } else {
        setOpenRows([...openRows, rowIndex]);
      }
    }
  };

  const isRowOpen = (rowIndex: number) => {
    return openRows.includes(rowIndex);
  };
  const collapseRowsOnShowSubTaskData = () => {
    setShowSubTaskData(!showSubTaskData);
  };
  return (
    <>
      <div style={{ margin: "5px", display: "flex", justifyContent: "start" }}>
        {editMode ? (
          <>
            <Button className="custombtn" onClick={handleSave}>
              Save
            </Button>
            <Button className="custombtn" onClick={handleCancel}>
              Cancel
            </Button>
          </>
        ) : (
          <Button className="custombtn" onClick={handleEditButtonClick}>
            Edit
          </Button>
        )}

        <Button
          onClick={() => setShowAdditionalFields(!showAdditionalFields)}
          className="custombtn"
        >
          {showAdditionalFields
            ? "Hide Additional Fields"
            : "Show Additional Fields"}
        </Button>
        <Button onClick={collapseRowsOnShowSubTaskData} className="custombtn">
          {showSubTaskData ? "Hide Subtask" : "Show Subtask"}
        </Button>
      </div>
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th colSpan={4}></th>
              {showSubTaskData && (
                <th colSpan={3}>
                  <Button
                    onClick={() => setShowSubTaskData(!showSubTaskData)}
                    className="custombtn"
                  >
                    {showSubTaskData ? "Hide Subtask" : "Show Subtask"}
                  </Button>
                </th>
              )}
              <th></th>
              <th></th>
              <th></th>
              {showAdditionalFields && (
                <th colSpan={8}>
                  {" "}
                  <Button
                    onClick={() =>
                      setShowAdditionalFields(!showAdditionalFields)
                    }
                    className="custombtn"
                  >
                    {showAdditionalFields
                      ? "Hide Additional Fields"
                      : "Show Additional Fields"}
                  </Button>
                </th>
              )}
              <th colSpan={3}></th>
              <th colSpan={4}>External Fee</th>
              <th colSpan={4}>Refundable Expenses</th>
              <th></th>
              <th></th>
              <th></th>
              <th colSpan={4}>Totals</th>
            </tr>
            <tr>
              {/* edit delete Icons in this th */}
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
              >
                <IconButton onClick={() => handleToggleRow(-1)}>
                  {openRows.length ===
                  tempData.ctrRevision.calcRev.ctrs.length ? (
                    <DownIcon />
                  ) : (
                    <RightIcon />
                  )}
                </IconButton>
              </th>
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
              >
                WP Number
              </th>
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
              >
                WP Name
              </th>
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
              >
                Project Short Name
              </th>
              {showSubTaskData && (
                <th className="tborder tableHead">SubTask Number</th>
              )}
              {showSubTaskData && (
                <th className="tborder tableHead">SubTask Name</th>
              )}
              {showSubTaskData && (
                <th className="tborder tableHead">SubTask Short Name</th>
              )}
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
              >
                StartDate
              </th>
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
              >
                EndDate
              </th>
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
              >
                Status
              </th>

              {/* hide from here */}
              {showAdditionalFields && (
                <th
                  className="tborder tableHead"
                  style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                >
                  Contract
                </th>
              )}
              {showAdditionalFields && (
                <th
                  className="tborder tableHead"
                  style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                >
                  Customer
                </th>
              )}
              {showAdditionalFields && (
                <th
                  className="tborder tableHead"
                  style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                >
                  Manager
                </th>
              )}
              {showAdditionalFields && (
                <th
                  className="tborder tableHead"
                  style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                >
                  Service Area Line
                </th>
              )}
              {showAdditionalFields && (
                <th
                  className="tborder tableHead"
                  style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                >
                  Billable
                </th>
              )}
              {showAdditionalFields && (
                <th
                  className="tborder tableHead"
                  style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                >
                  Chargable
                </th>
              )}
              {showAdditionalFields && (
                <th
                  className="tborder tableHead"
                  style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                >
                  Customer Portal
                </th>
              )}
              {showAdditionalFields && (
                <th
                  className="tborder tableHead"
                  style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                >
                  SubmitBillRates
                </th>
              )}
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
              >
                Type
              </th>
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
              >
                BillRate
              </th>
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
              >
                Curr
              </th>
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                colSpan={2}
              >
                Revenue
              </th>
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                colSpan={2}
              >
                Cost
              </th>
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                colSpan={2}
              >
                Revenue
              </th>
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                colSpan={2}
              >
                Cost
              </th>
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
              >
                Hours
              </th>
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
              >
                TSA/MSA
              </th>
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
              >
                Margin
              </th>
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                colSpan={2}
              >
                Revenue
              </th>
              <th
                className="tborder tableHead"
                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                colSpan={2}
              >
                Cost
              </th>
            </tr>
          </thead>

          <tbody>
            {tempData.ctrRevision.calcRev.ctrs.map((ctr: any, index: any) => (
              <>
                <tr key={index} className="tborder tableHead">
                  <td className={`td tborder ${editMode ? "editable" : ""}`}>
                    <IconButton onClick={() => handleToggleRow(index)}>
                      {isRowOpen(index) ? <DownIcon /> : <RightIcon />}
                    </IconButton>
                  </td>
                  <td
                    className={`td  ${editMode ? "editable" : ""}`}
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
                  </td>
                  <td
                    className={`td  ${editMode ? "editable" : ""}`}
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
                  </td>
                  <td
                    className={`td  ${editMode ? "editable" : ""}`}
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
                  </td>

                  {showSubTaskData && (
                    <td className={`td  ${editMode ? "editable" : ""}`}></td>
                  )}

                  {showSubTaskData && (
                    <td className={`td  ${editMode ? "editable" : ""}`}></td>
                  )}
                  {showSubTaskData && (
                    <td className={`td  ${editMode ? "editable" : ""}`}></td>
                  )}

                  <td
                    className={`td  ${editMode ? "editable" : ""}`}
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
                  </td>
                  <td
                    className={`td  ${editMode ? "editable" : ""}`}
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
                  </td>
                  <td className="td " align="right">
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
                  </td>
                  {showAdditionalFields && (
                    <td className="td " align="right">
                      PM
                    </td>
                  )}
                  {showAdditionalFields && (
                    <td className="td " align="right">
                      -
                    </td>
                  )}
                  {showAdditionalFields && (
                    <td className="td " align="right">
                      Vatyani Purnima (Purvat)
                    </td>
                  )}
                  {showAdditionalFields && (
                    <td
                      className={`td  ${editMode ? "editable" : ""}`}
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
                    </td>
                  )}
                  {showAdditionalFields && (
                    <td className="td " align="right">
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
                    </td>
                  )}
                  {showAdditionalFields && (
                    <td className="td " align="right">
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
                    </td>
                  )}
                  {showAdditionalFields && (
                    <td className="td " align="right">
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
                    </td>
                  )}
                  {showAdditionalFields && (
                    <td className="td " align="right">
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
                    </td>
                  )}
                  <td className="td " align="right">
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
                  </td>
                  <td
                    className={`td  ${editMode ? "editable" : ""}`}
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
                  </td>
                  <td
                    className={`td  ${editMode ? "editable" : ""}`}
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
                  </td>
                  <td
                    colSpan={2}
                    className={`td  ${editMode ? "editable" : ""}`}
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
                  </td>
                  <td
                    colSpan={2}
                    className={`td  ${editMode ? "editable" : ""}`}
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
                  </td>
                  <td
                    colSpan={2}
                    className={`td  ${editMode ? "editable" : ""}`}
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
                  </td>
                  <td
                    colSpan={2}
                    className={`td  ${editMode ? "editable" : ""}`}
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
                  </td>
                  <td
                    className={`td  ${editMode ? "editable" : ""}`}
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
                  </td>
                  <td
                    className={`td  ${editMode ? "editable" : ""}`}
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
                  </td>
                  <td
                    className={`td  ${editMode ? "editable" : ""}`}
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
                  </td>
                  <td
                    colSpan={2}
                    className={`td  ${editMode ? "editable" : ""}`}
                    align="right"
                  >
                    {+ctr.ap4_refundable_revenue.value[0] +
                      +ctr.ap4_revenue.value[0]}
                  </td>
                  <td
                    colSpan={2}
                    className={`td  ${editMode ? "editable" : ""}`}
                    align="right"
                  >
                    {+ctr.ap4_refundable_raw_cost.value[0] +
                      +ctr.ap4_raw_cost.value[0]}
                  </td>
                </tr>
                {isRowOpen(index) &&
                  ctr.AP4_BudgetCtrSubCtrRelation.value.map(
                    (rel: any, i: any) => {
                      return (
                        <tr className="tborder tableHead">
                          <td
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                          ></td>
                          <td
                            className={`td  ${editMode ? "editable" : ""}`}
                            align="right"
                          ></td>
                          <td
                            className={`td  ${editMode ? "editable" : ""}`}
                            align="right"
                          ></td>
                          <td
                            className={`td  ${editMode ? "editable" : ""}`}
                            align="right"
                          ></td>

                          <td className={`td  ${editMode ? "editable" : ""}`}>
                            {editMode ? (
                              <input
                                className="cells"
                                name={rel.ap4_sub_task_number.name}
                                type="text"
                                value={rel.ap4_sub_task_number.value[0]}
                                onChange={(e) => handleChange(e, i)}
                              />
                            ) : (
                              rel.ap4_sub_task_number.value[0]
                            )}
                          </td>

                          <td className={`td  ${editMode ? "editable" : ""}`}>
                            {editMode ? (
                              <input
                                className="cells"
                                name={rel.object_desc.name}
                                type="text"
                                value={rel.object_desc.value[0]}
                                onChange={(e) => handleChange(e, i)}
                              />
                            ) : (
                              rel.object_desc.value[0]
                            )}
                          </td>
                          <td className={`td  ${editMode ? "editable" : ""}`}>
                            {editMode ? (
                              <input
                                className="cells"
                                name={rel.object_name.name}
                                type="text"
                                value={rel.object_name.value[0]}
                                onChange={(e) => handleChange(e, i)}
                              />
                            ) : (
                              rel.object_name.value[0]
                            )}
                          </td>

                          <td
                            className={`td  ${editMode ? "editable" : ""}`}
                            align="right"
                          ></td>
                          <td
                            className={`td  ${editMode ? "editable" : ""}`}
                            align="right"
                          ></td>
                          <td className="td " align="right"></td>
                          {showAdditionalFields && (
                            <td className="td " align="right"></td>
                          )}
                          {showAdditionalFields && (
                            <td className="td " align="right"></td>
                          )}
                          {showAdditionalFields && (
                            <td className="td " align="right"></td>
                          )}
                          {showAdditionalFields && (
                            <td
                              className={`td  ${editMode ? "editable" : ""}`}
                              align="right"
                            ></td>
                          )}
                          {showAdditionalFields && (
                            <td className="td " align="right"></td>
                          )}
                          {showAdditionalFields && (
                            <td className="td " align="right"></td>
                          )}
                          {showAdditionalFields && (
                            <td className="td " align="right"></td>
                          )}
                          {showAdditionalFields && (
                            <td className="td " align="right"></td>
                          )}
                          <td className="td " align="right"></td>
                          <td
                            className={`td  ${editMode ? "editable" : ""}`}
                            align="right"
                          ></td>
                          <td
                            className={`td  ${editMode ? "editable" : ""}`}
                            align="right"
                          ></td>
                          <td
                            colSpan={2}
                            className={`td  ${editMode ? "editable" : ""}`}
                            align="right"
                          ></td>
                          <td
                            colSpan={2}
                            className={`td  ${editMode ? "editable" : ""}`}
                            align="right"
                          ></td>
                          <td
                            colSpan={2}
                            className={`td  ${editMode ? "editable" : ""}`}
                            align="right"
                          ></td>
                          <td
                            colSpan={2}
                            className={`td  ${editMode ? "editable" : ""}`}
                            align="right"
                          ></td>
                          <td
                            className={`td  ${editMode ? "editable" : ""}`}
                            align="right"
                          ></td>
                          <td
                            className={`td  ${editMode ? "editable" : ""}`}
                            align="right"
                          ></td>
                          <td
                            className={`td  ${editMode ? "editable" : ""}`}
                            align="right"
                          ></td>
                          <td
                            colSpan={2}
                            className={`td  ${editMode ? "editable" : ""}`}
                            align="right"
                          ></td>
                          <td
                            colSpan={2}
                            className={`td  ${editMode ? "editable" : ""}`}
                            align="right"
                          ></td>
                        </tr>
                      );
                    }
                  )}
              </>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </>
  );
};

export default WorkPackage;
