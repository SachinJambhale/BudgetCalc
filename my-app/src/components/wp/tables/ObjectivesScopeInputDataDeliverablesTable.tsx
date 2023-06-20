import { useState } from "react";
import { CKEditor } from "ckeditor4-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button } from "@mui/material";
import RightIcon from "../Icons/RightIcon";
import DownIcon from "../Icons/DownIcon";

// interface TableRowData {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
// }

// const ObjectivesScopeInputDataDeliverables: React.FC = () => {
//   const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

//   const tableData: TableRowData[] = [
//     { id: 1, name: "John Doe", age: 25, email: "john.doe@example.com" },
//     { id: 2, name: "Jane Smith", age: 30, email: "jane.smith@example.com" },
//     { id: 3, name: "Mark Johnson", age: 35, email: "mark.johnson@example.com" },
//   ];

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const handleNameChange = (event: any, editor: any, row: TableRowData) => {
//     const updatedData = editor.getData();
//     // Update the row.name value here if needed
//     // For example, row.name = updatedData;
//     console.log(updatedData);
//   };

//   return (
//     <table style={{ borderCollapse: "collapse", width: "100%" }}>
//       <thead>
//         <tr>
//         <th className="tborder tableHead">
//         <IconButton>
//           <DownIcon/>
//                 </IconButton>
//             </th>

//             <th className="tborder tableHead">WP Number</th>
//             <th className="tborder tableHead">WP Name</th></tr>
//       </thead>
//       <tbody>
//         {tableData.map((row) => (
//           <React.Fragment key={row.id}>
//             <tr>
//               {/* ... */}
//               <td style={{ border: "1px solid #ccc", padding: "8px" }}>
//                 <DownIcon/>
//                 {/* <CKEditor
//                   editor={ClassicEditor}
//                   data={row.name}
//                   onChange={(event: any, editor: any) => handleNameChange(event, editor, row)}
//                 /> */}
//               </td>
//               <td style={{ border: "1px solid #ccc", padding: "8px" }}>
//                 <CKEditor
//                   editor={ClassicEditor}
//                   data="<p>Hello from CKEditor!</p>"
//                   onChange={(event: any, editor: any) => {
//                     const data = editor.getData();
//                     console.log(data);
//                   }}
//                 />
//               </td>
//               <td style={{ border: "1px solid #ccc", padding: "8px" }}>
//                 <CKEditor
//                   editor={ClassicEditor}
//                   data="<p>Hello from CKEditor!</p>"
//                   onChange={(event: any, editor: any) => {
//                     const data = editor.getData();
//                     console.log(data);
//                   }}
//                 />
//               </td>
//               {/* ... */}
//             </tr>
//             {/* ... */}
//           </React.Fragment>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default ObjectivesScopeInputDataDeliverables;

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// const ObjectivesScopeInputDataDeliverablesTable = () => {
//   const [open, setOpen] = React.useState(false);
//   const [editMode, setEditMode] = React.useState(false);
//   const _ = require("lodash");
//   const copiedObject = _.cloneDeep(initialEmpRateRel);
//   const [tempData, setTempData] = React.useState(copiedObject);
//   const [initialEmpRateRel, setInitialEmpRateRel] = React.useState(obj);
//   const handleEditButtonClick = () => {
//     setEditMode(true);
//   };

//   const handleSave = () => {
//     setInitialEmpRateRel({ ...tempData });
//     setEditMode(false);
//   };

//   const handleCancel = () => {
//     const copiedObject1 = _.cloneDeep(initialEmpRateRel);
//     setTempData({ ...copiedObject1 });
//     console.log("obj", obj);
//     setEditMode(false);

//   };
//   return (
//     <TableContainer className="tborder"
//       sx={{ minWidth: 650 }}
//       aria-label="simple table">
//       <table>
//         <thead className="tableHead">
      
//             <tr>
//               <th colSpan={17} style={{ textAlign: "left" }}>
//                 {editMode ? (
//                   <>
//                     <Button className="custombtn" onClick={handleSave}>
//                       Save
//                     </Button>
//                     <Button className="custombtn" onClick={handleCancel}>
//                       Cancel
//                     </Button>
//                   </>
//                 ) : (
//                   <Button className="custombtn" onClick={handleEditButtonClick}>
//                     Edit
//                   </Button>
//                 )}
              
//               <TableRow >
//                 <TableCell className="tborder"
//                   sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
//                   <IconButton
//                     aria-label="expand row"
//                     size="small"
//                     onClick={() => setOpen(!open)}
//                   >
//                     {open ? <DownIcon /> : <RightIcon />}
//                   </IconButton>

//                 </TableCell>


//                 <TableCell align='right' sortDirection='asc' className="tborder"
//                   sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>WP Number</TableCell>
//                 <TableCell align='right' className="tborder"
//                   sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>WP Name</TableCell>

//               </TableRow>

//             </thead>
//             <TableBody>

//               <tr>
//                 <td><IconButton
//                   aria-label="expand row"
//                   size="small"
//                   onClick={() => setOpen(!open)}
//                 >
//                   {open ? <DownIcon /> : <RightIcon />}
//                 </IconButton></td>
//                 <td>2</td>
//                 <td>CTR4</td>


//               </tr>
//               <tr>
//                 <td><IconButton
//                   aria-label="expand row"
//                   size="small"
//                   onClick={() => setOpen(!open)}
//                 >
//                   {open ? <DownIcon /> : <RightIcon />}
//                 </IconButton></td>
//                 <td>3</td>
//                 <td>CTR5</td>

//               </tr>
//               <tr>
//                 <td><IconButton
//                   aria-label="expand row"
//                   size="small"
//                   onClick={() => setOpen(!open)}
//                 >
//                   {open ? <DownIcon /> : <RightIcon />}
//                 </IconButton></td>
//                 <td>4</td>
//                 <td>CTR6</td>

//               </tr>
//             </TableBody>
//           </table>
       
//         );
// }
// export default ObjectivesScopeInputDataDeliverablesTable;
