// import * as React from "react";
// import Button from "@mui/material/Button";
// import obj from "../dummy-data/ctr";
// import "./WorkPackageTable.css";
// import AutoComplete from "../autocomplete/AutoComplete";
// interface IAppProps {}

// const BillRateAssignerTable: React.FunctionComponent<IAppProps> = () => {
//   const [initialEmpRateRel, setInitialEmpRateRel] = React.useState(obj);
//   const _ = require("lodash");
//   const copiedObject = _.cloneDeep(initialEmpRateRel);
//   const [tempData, setTempData] = React.useState(copiedObject);
//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th colSpan={17} style={{ textAlign: "left" }}>
//               <Button className="custombtn">Edit</Button>
//               <Button className="custombtn">Show Invalid Rates</Button>
//             </th>
//           </tr>
//           <tr>
//             <th></th>
//             <th>Team Member</th>
//             <th>DNV Grade</th>
//             <th>Education Level</th>
//             <th>Years of employment in DNV</th>
//             <th>Bill Rate Table</th>
//             <th>Bill Rate Category</th>
//             <th> Bill Rate Criteria</th>
//             <th>Curr</th>
//             <th>Bill Rate</th>
//             <th>Adjustment</th>
//             <th>Adjusted Bill Rate</th>
//             <th>Valid from</th>
//             <th>Valid To</th>
//             <th>Cost Curr</th>
//             <th>Cost Rate</th>
//             <th>Margin Per Hour</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tempData.ctrRevision.calcRev.AP4_BudgetCalcEmpRateRel.value.map(
//             (EmpRateRel: any, i: any) => {
//               // console.log("EmpRateRel", i, EmpRateRel);

//               return (
//                 <tr>
//                   <td></td>
//                   <td>
//                     <AutoComplete
//                       id=""
//                       ngDisabled={false}
//                       // value={EmpRateRel.object_name.value[0]}
//                     />
//                   </td>
//                   <td></td>
//                   <td></td>
//                 </tr>
//               );
//             }
//           )}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default BillRateAssignerTable;

import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import obj from "../dummy-data/ctr";
import "./WorkPackageTable.css";
interface IAppProps {}

const BillRateAssignerTable: React.FunctionComponent<IAppProps> = () => {
  const [initialEmpRateRel, setInitialEmpRateRel] = React.useState(obj);
  const _ = require("lodash");
  const copiedObject = _.cloneDeep(initialEmpRateRel);
  const [tempData, setTempData] = React.useState(copiedObject);
  const [editMode, setEditMode] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState<string[]>([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  tempData.ctrRevision.calcRev.AP4_BudgetCalcEmpRateRel.value.map((TM: any) => {
    if (suggestions.length <= 5) suggestions.push(TM.object_name.value[0]);
    console.log("TM", TM.object_name.value[0]);
  });

  console.log("sug", suggestions);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: any) => {
    e.preventDefault();

    const name = e.target.name as string;
    const { value } = e.target;
    setSearchQuery(e.target.value);

    console.log("name", name);
    console.log("value", value);

    // if (value === "") {
    //   let stringIndex = index.toString();
    //   let string = stringIndex + "-datalist";
    //   let element = (document.getElementById(string).style.color = "red");
    // }
    tempData.ctrRevision.calcRev.AP4_BudgetCalcEmpRateRel.value[index][
      name
    ].value[0] = value;

    setTempData({ ...tempData });
  };

  const handleEditButtonClick = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setInitialEmpRateRel({ ...tempData });
    setEditMode(false);
  };

  const handleCancel = () => {
    const copiedObject1 = _.cloneDeep(initialEmpRateRel);
    setTempData({ ...copiedObject1 });
    console.log("obj", obj);
    setEditMode(false);
    // console.log(
    //   "temp",
    //   tempData.ctrRevision.calcRev.ctrs[0].ap4_ctr_number.value
    // );
    // console.log(
    //   "initial",
    //   initialData.ctrRevision.calcRev.ctrs[0].ap4_ctr_number.value
    // );
  };

  console.log("ini", initialEmpRateRel);
  console.log("tempData", tempData);
  useEffect(() => {
    setTempData(_.cloneDeep(initialEmpRateRel));
  }, [initialEmpRateRel]);

  // const isInputEmpty = searchQuery === "";

  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan={17} style={{ textAlign: "left" }}>
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
              <Button className="custombtn">Show Invalid Rates</Button>
            </th>
          </tr>
          <tr>
            <th></th>
            <th>Team Member</th>
            <th>DNV Grade</th>
            <th>Education Level</th>
            <th>Years of employment in DNV</th>
            <th>Bill Rate Table</th>
            <th>Bill Rate Category</th>
            <th> Bill Rate Criteria</th>
            <th>Curr</th>
            <th>Bill Rate</th>
            <th>Adjustment</th>
            <th>Adjusted Bill Rate</th>
            <th>Valid from</th>
            <th>Valid To</th>
            <th>Cost Curr</th>
            <th>Cost Rate</th>
            <th>Margin Per Hour</th>
          </tr>
        </thead>
        <tbody>
          {tempData.ctrRevision.calcRev.AP4_BudgetCalcEmpRateRel.value.map(
            (EmpRateRel: any, i: any) => {
              // console.log("EmpRateRel", i, EmpRateRel);

              return (
                <tr>
                  <td></td>
                  <td
                    className={`td  ${editMode ? "editable" : ""}`}
                    align="right"
                  >
                    {editMode ? (
                      <>
                        <input
                          // id={`${i}-datalist`}
                          list={`${i}-datalist`}
                          name={EmpRateRel.object_name.name}
                          value={EmpRateRel.object_name.value[0]}
                          onChange={(e) => handleChange(e, i)}
                          // placeholder={isInputEmpty ? "Enter a value" : ""}
                          // style={{ color: isInputEmpty ? "red" : "black" }}
                          autoComplete="off"
                        />
                        <datalist id={`${i}-datalist`}>
                          {suggestions.map((suggestion, index) => (
                            <option key={index} value={suggestion}>
                              {suggestion}
                            </option>
                          ))}
                        </datalist>
                      </>
                    ) : (
                      EmpRateRel.object_name.value[0]
                    )}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </>
  );
};

export default BillRateAssignerTable;
