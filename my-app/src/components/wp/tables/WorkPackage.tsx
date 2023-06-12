import React, { useEffect, ChangeEvent } from "react";
import TableContainer from "@mui/material/TableContainer";
import "./WorkPackageTable.css";
import obj1 from "../dummy-data/ctr";
import { Button, IconButton } from "@mui/material";
import RightIcon from "../Icons/RightIcon";
import DownIcon from "../Icons/DownIcon";

let obj = obj1;

interface IWorkPackageProps {
  checked:boolean
}

const WorkPackage: React.FunctionComponent<IWorkPackageProps> = ({checked}) => {
  const [initialData, setInitialData] = React.useState(obj);
  console.log("obj", obj);
  const _ = require("lodash");
  console.log("lodash", _);

  const copiedObject = _.cloneDeep(initialData);
  const [tempData, setTempData] = React.useState(copiedObject);
  const [editMode, setEditMode] = React.useState(false);
  const [showAdditionalFields, setShowAdditionalFields] = React.useState(false);
  const [showSubTask, setShowSubTask] = React.useState(false);
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
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    e.preventDefault();
    const name = e.target.name as string;
    const { value } = e.target;

    tempData.ctrRevision.calcRev.ctrs[index][name].value[0] = value;
    setTempData({ ...tempData });
  };
  const handleRelChange = (
    e: ChangeEvent<HTMLInputElement>,
    ChildIndex: number,
    index: number
  ) => {
    e.preventDefault();
    const name = e.target.name as string;
    const { value } = e.target;
    console.log("name", name);
    console.log("value", value);
    console.log("index", index);
    tempData.ctrRevision.calcRev.ctrs[index].AP4_BudgetCtrSubCtrRelation.value[
      ChildIndex
    ][name].value[0] = value;
    setTempData({ ...tempData });
  };

  console.log("temp", tempData);
  console.log("initial", initialData);

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

  const collapseRowsOnShowSubTask = () => {
    setShowSubTask(!showSubTask);
  };

  useEffect(() => {
    showSubTask && handleToggleRow(-1);
  }, [showSubTask]);

  return (
    <>
      <div style={{ margin: "5px", display: "flex", justifyContent: "start" }}>
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
            disabled ={checked}
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
        <Button className="custombtn" onClick={collapseRowsOnShowSubTask}>
          {showSubTask ? "Hide Subtask" : "Show Subtask"}
        </Button>
      </div>
      <div className="div1" style={{overflow: 'auto'}}>
        <table style={{ width:"2200px",height:"300px"}}>
          <thead>
            <tr>
              <th className="" colSpan={1}></th>
              {showSubTask && (
                <th colSpan={3} className="td tborder">
                  <Button
                    onClick={() => setShowSubTask(!showSubTask)}
                    className="custombtn"
                  >
                    {showSubTask ? "Hide Subtask" : "Show Subtask"}
                  </Button>
                </th>
              )}

              <th></th>
              <th></th>
              <th></th>
              {showAdditionalFields && (
                <th colSpan={8} className="td tborder">
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
              <th colSpan={6} className="td tborder"></th>
              <th colSpan={4} className="td tborder">
                External Fee
              </th>
              <th colSpan={4} className="td tborder">
                Refundable Expenses
              </th>
              <th className="td tborder"></th>
              <th className="td tborder"></th>
              <th className="td tborder"></th>
              <th colSpan={4} className="td tborder">
                Totals
              </th>
            </tr>
            <tr>
              {/* edit delete Icons in this th */}
              <th
                className=""
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
                className="tborder tableHead "
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
              {showSubTask && (
                <th className="tborder tableHead">SubTask Number</th>
              )}
              {showSubTask && (
                <th className="tborder tableHead">SubTask Name</th>
              )}
              {showSubTask && (
                <th className="tborder tableHead">SubTask Short Name</th>
              )}
              
              <th
                className="tborder tableHead"
                style={{ fontSize: "12px", fontWeight: "bold",width:"100px",height:"40px" }}
              ><u>
                StartDate
                </u> </th>
              
            
            <th
                className="tborder tableHead"
                style={{ fontSize: "12px", fontWeight: "bold",width:"100px",height:"40px" }}
              ><u>
                EndDate
                </u> </th>
            
            
             <th
                className="tborder tableHead"
                style={{ fontSize: "12px", fontWeight: "bold" ,width:"100px",height:"40px"}}
              > <u>
                Status
                </u> </th>
             

              {/* hide from here */}
              {showAdditionalFields && (
                <th
                  className="tborder tableHead"
                  style={{ fontSize: "12px", fontWeight: "bold",width:"100px",height:"40px" }}
                >
                  Contract
                </th>
              )}
              {showAdditionalFields && (
                <th
                  className="tborder tableHead"
                  style={{ fontSize: "12px", fontWeight: "bold",width:"100px",height:"40px" }}
                >
                  Customer
                </th>
              )}
              {showAdditionalFields && (
                <th
                  className="tborder tableHead"
                  style={{ fontSize: "12px", fontWeight: "bold",width:"100px",height:"40px" }}
                >
                  Manager
                </th>
              )}
              {showAdditionalFields && (
             
                  <th
                  className="tborder tableHead"
                  style={{ fontSize: "12px", fontWeight: "bold",width:"100px",height:"40px" }}
                > <u>
                  Service Area Line
                  </u> </th>
              
              )}
              {showAdditionalFields && (
                
                  <th
                  className="tborder tableHead"
                  style={{ fontSize: "12px", fontWeight: "bold",width:"100px",height:"40px" }}
                ><u>
                  Billable
                  </u> </th>
                
              )}
              {showAdditionalFields && (
                <th
                  className="tborder tableHead"
                  style={{ fontSize: "12px", fontWeight: "bold",width:"100px",height:"40px" }}
                >
                  Chargable
                </th>
              )}
              {showAdditionalFields && (
                <th
                  className="tborder tableHead"
                  style={{ fontSize: "12px", fontWeight: "bold" ,width:"100px",height:"40px"}}
                >
                  Customer Portal
                </th>
              )}
              {showAdditionalFields && (
                <th
                  className="tborder tableHead"
                  style={{ fontSize: "12px", fontWeight: "bold",width:"100px",height:"40px" }}
                >
                  SubmitBillRates
                </th>
              )}
              
              <th
                className="tborder tableHead"
                style={{ fontSize: "12px", fontWeight: "bold" ,width:"100px",height:"40px"}}
              ><u>
                Type
                </u> </th>
              
             
              <th
                className="tborder tableHead"
                style={{ fontSize: "12px", fontWeight: "bold" ,width:"100px",height:"40px"}}
              > <u>
                BillRate
                </u> </th>
              
              <th
                className="tborder tableHead"
                style={{ fontSize: "12px", fontWeight: "bold" ,width:"100px",height:"40px"}}
              >
                Curr
              </th>
              
              <th
                className="tborder tableHead"
                style={{ fontSize: "12px", fontWeight: "bold",width:"100px",height:"40px" }}
                colSpan={2}
              ><u>
                Revenue
                </u></th>
              
             
              <th
                className="tborder tableHead"
                style={{ fontSize: "12px", fontWeight: "bold",width:"100px",height:"40px" }}
                colSpan={2}
              > <u>
                Cost
                </u></th>
              
              
              <th
                className="tborder tableHead"
                style={{ fontSize: "12px", fontWeight: "bold",width:"100px",height:"40px" }}
                colSpan={2}
              ><u>
                Revenue
                </u></th>
             
          
           <th
                className="tborder tableHead"
                style={{ fontSize: "12px", fontWeight: "bold" ,width:"100px",height:"40px"}}
                colSpan={2}
              > <u>
                Cost
                </u> </th>
           
              <th
                className="tborder tableHead"
                style={{ fontSize: "12px", fontWeight: "bold",width:"100px",height:"40px" }}
              >
                Hours
              </th>
              
              <th
                className="tborder tableHead"
                style={{ fontSize: "12px", fontWeight: "bold",width:"100px",height:"40px" }}
              ><u>
                TSA/MSA
                </u></th>
              
             
             <th
                className="tborder tableHead"
                style={{ fontSize: "12px", fontWeight: "bold" ,width:"100px",height:"40px"}}
              ><u>
                Margin
                </u> </th>
             
          
           <th
                className="tborder tableHead"
                style={{ fontSize: "12px", fontWeight: "bold",width:"100px",height:"40px" }}
                colSpan={2}
              > <u>
                Revenue
                </u> </th>
           
             
             <th
                className="tborder tableHead"
                style={{ fontSize: "12px", fontWeight: "bold",width:"100px",height:"40px" }}
                colSpan={2}
              ><u>
                Cost
                </u></th>
            
            </tr>
          </thead>

          <tbody>
            {tempData.ctrRevision.calcRev.ctrs.map((ctr: any, index: any) => (
              <>
                <tr key={index} className="tborder tableHead  ">
                  <td
                    className={`td tborder ${
                      editMode ? "editable" : ""
                    } first-col sticky-col`}
                  >
                    <IconButton onClick={() => handleToggleRow(index)}>
                      {isRowOpen(index) ? <DownIcon /> : <RightIcon />}
                    </IconButton>
                  </td>
                  <td
                    className={`td  ${
                      editMode ? "editable" : ""
                    } second-col sticky-col`}
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
                    className={`td  ${
                      editMode ? "editable" : ""
                    } third-col sticky-col`}
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
                    className={`td  ${
                      editMode ? "editable" : ""
                    } fourth-col sticky-col`}
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

                  {showSubTask && (
                    <td
                      className={`td tborder ${editMode ? "editable" : ""}`}
                    ></td>
                  )}

                  {showSubTask && (
                    <td
                      className={`td tborder ${editMode ? "editable" : ""}`}
                    ></td>
                  )}
                  {showSubTask && (
                    <td
                      className={`td tborder ${editMode ? "editable" : ""}`}
                    ></td>
                  )}

                  <td
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
                  </td>
                  <td
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
                  </td>
                  <td className="td tborder " align="right">
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
                    <td className="td tborder" align="right">
                      PM
                    </td>
                  )}
                  {showAdditionalFields && (
                    <td className="td tborder" align="right">
                      -
                    </td>
                  )}
                  {showAdditionalFields && (
                    <td className="td tborder" align="right">
                      Vatyani Purnima (Purvat)
                    </td>
                  )}
                  {showAdditionalFields && (
                    <td
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
                    </td>
                  )}
                  {showAdditionalFields && (
                    <td className="td tborder" align="right">
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
                    <td className="td tborder" align="right">
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
                    <td className="td tborder" align="right">
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
                    <td className="td tborder" align="right">
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
                  <td className="td tborder" align="right">
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
                  </td>
                  <td
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
                  </td>
                  <td
                    colSpan={2}
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
                  </td>
                  <td
                    colSpan={2}
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
                  </td>
                  <td
                    colSpan={2}
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
                  </td>
                  <td
                    colSpan={2}
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
                  </td>
                  <td
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
                  </td>
                  <td
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
                  </td>
                  <td
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
                  </td>
                  <td
                    colSpan={2}
                    className={`td tborder ${editMode ? "editable" : ""}`}
                    align="right"
                  >
                    {+ctr.ap4_refundable_revenue.value[0] +
                      +ctr.ap4_revenue.value[0]}
                  </td>
                  <td
                    colSpan={2}
                    className={`td tborder ${editMode ? "editable" : ""}`}
                    align="right"
                  >
                    {+ctr.ap4_refundable_raw_cost.value[0] +
                      +ctr.ap4_raw_cost.value[0]}
                  </td>
                </tr>
                {isRowOpen(index) &&
                  ctr.AP4_BudgetCtrSubCtrRelation.value.map(
                    (rel: any, i: any) => {
                      console.log("rel", rel);

                      return (
                        <tr className="tborder tableHead" key={index}>
                          <td
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                          ></td>
                          <td
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                            align="right"
                          ></td>
                          <td
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                            align="right"
                          ></td>
                          <td
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                            align="right"
                          ></td>

                          <td
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                          >
                            {editMode ? (
                              <input
                                className="cells"
                                name={rel.ap4_sub_task_number.name}
                                type="text"
                                value={rel.ap4_sub_task_number.value[0]}
                                onChange={(e) => handleRelChange(e, i, index)}
                              />
                            ) : (
                              rel.ap4_sub_task_number.value[0]
                            )}
                          </td>

                          <td
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                          >
                            {editMode ? (
                              <input
                                className="cells"
                                name={rel.object_desc.name}
                                type="text"
                                value={rel.object_desc.value[0]}
                                onChange={(e) => handleRelChange(e, i, index)}
                              />
                            ) : (
                              rel.object_desc.value[0]
                            )}
                          </td>
                          <td
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                          >
                            {editMode ? (
                              <input
                                className="cells"
                                name={rel.object_name.name}
                                type="text"
                                value={rel.object_name.value[0]}
                                onChange={(e) => handleRelChange(e, i, index)}
                              />
                            ) : (
                              rel.object_name.value[0]
                            )}
                          </td>

                          <td
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                            align="right"
                          ></td>
                          <td
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                            align="right"
                          ></td>
                          <td className="td tborder" align="right"></td>
                          {showAdditionalFields && (
                            <td className="td tborder" align="right"></td>
                          )}
                          {showAdditionalFields && (
                            <td className="td " align="right"></td>
                          )}
                          {showAdditionalFields && (
                            <td className="td tborder" align="right"></td>
                          )}
                          {showAdditionalFields && (
                            <td
                              className={`td tborder ${
                                editMode ? "editable" : ""
                              }`}
                              align="right"
                            ></td>
                          )}
                          {showAdditionalFields && (
                            <td className="td tborder" align="right"></td>
                          )}
                          {showAdditionalFields && (
                            <td className="td tborder" align="right"></td>
                          )}
                          {showAdditionalFields && (
                            <td className="td tborder" align="right"></td>
                          )}
                          {showAdditionalFields && (
                            <td className="td tborder" align="right"></td>
                          )}
                          <td className="td tborder" align="right"></td>
                          <td
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                            align="right"
                          ></td>
                          <td
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                            align="right"
                          ></td>
                          <td
                            colSpan={2}
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                            align="right"
                          ></td>
                          <td
                            colSpan={2}
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                            align="right"
                          ></td>
                          <td
                            colSpan={2}
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                            align="right"
                          ></td>
                          <td
                            colSpan={2}
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                            align="right"
                          ></td>
                          <td
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                            align="right"
                          ></td>
                          <td
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                            align="right"
                          ></td>
                          <td
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                            align="right"
                          ></td>
                          <td
                            colSpan={2}
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
                            align="right"
                          ></td>
                          <td
                            colSpan={2}
                            className={`td tborder ${
                              editMode ? "editable" : ""
                            }`}
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
      </div>
    </>
  );
};

export default WorkPackage;
