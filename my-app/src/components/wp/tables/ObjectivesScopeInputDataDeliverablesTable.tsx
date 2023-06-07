import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface TableRowData {
  id: number;
  name: string;
  age: number;
  email: string;
}

const ObjectivesScopeInputDataDeliverables: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const tableData: TableRowData[] = [
    { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { id: 3, name: 'Mark Johnson', age: 35, email: 'mark.johnson@example.com' },
  ];

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>
            <FontAwesomeIcon
              icon={isCollapsed ? faChevronUp : faChevronDown}
              onClick={toggleCollapse}
              style={{ cursor: 'pointer' }}
            />
          </th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Rate Table Table</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Category Type</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>DNA internal category</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Bill rate category</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Curr</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Bill Rate</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>BIll Rate Criteria</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Yrs Exp Start</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Yrs Exp End</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Valid from</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Valid To</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <React.Fragment key={row.id}>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                <FontAwesomeIcon
                  icon={isCollapsed ? faChevronUp : faChevronDown}
                  onClick={toggleCollapse}
                  style={{ cursor: 'pointer' }}
                />
              </td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.id}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.name}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.age}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.email}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.id}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.name}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.age}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.email}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.id}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.name}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.age}</td>
            </tr>
            {isCollapsed && (
              <tr>
                <td colSpan={4} style={{ border: '1px solid #ccc', padding: '8px' }}>
                  Additional information for {row.name}
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ObjectivesScopeInputDataDeliverables;


// import React, { useState } from 'react';
// import DownIcon from "../Icons/DownIcon";
// import RightIcon from "../Icons/RightIcon";
// import IconButton from "@mui/material/IconButton";
// import obj from "../dummy-data/RateTable.json";



// const Table = () => {
//     const [openRows, setOpenRows] = useState<number[]>([]);
  
//     const handleToggleRow = (rowIndex: number) => {
//       if (rowIndex === -1) {
//         // Clicked on the header
//         if (openRows.length === data.value.length) {
//           // All rows are open, so close all
//           setOpenRows([]);
//         } else {
//           // Some rows are closed, so open all
//           const allRows = data.value.map((_, index) => index);
//           setOpenRows(allRows);
//         }
//       } else {
//         // Clicked on a row
//         if (openRows.includes(rowIndex)) {
//           setOpenRows(openRows.filter((row) => row !== rowIndex));
//         } else {
//           setOpenRows([...openRows, rowIndex]);
//         }
//       }
//     };
  
//     const isRowOpen = (rowIndex: number) => {
//       return openRows.includes(rowIndex);
//     };
  
//     const [data] = useState(obj);
//     console.log(data);
//     const header = [
//       "Rate Table Table",
//       "Category Type",
//       "DNA internal category",
//       "Bill rate category",
//       "Curr",
//       "Bill rate",
//       "Bill Rate Criteria",
//       "Yrs Exp Start",
//       "Yrs Exp End",
//       "Valid From",
//       "Valid To",
//     ];
//   return (
    
//     <table style={{ borderCollapse: 'collapse', width: '100%' }}>
//       <thead>
//         <tr>
//           <th style={{ border: '1px solid #ccc', padding: '8px' }}>
//           <IconButton onClick={() => handleToggleRow(-1)}>
//                 {openRows.length === data.value.length ? (
//                   <DownIcon />
//                 ) : (
//                   <RightIcon />
//                 )}
//               </IconButton>
//           </th>
//           {header.map((head, index) => (
//                <th style={{ border: '1px solid #ccc', padding: '8px' }}>
//                 {head}
//               </th>
//             ))}
//         </tr>
//       </thead>
//       <tbody>
//       {data.value.map((item, index) => (
//             <React.Fragment key={index}>
//             <tr>
//               <td style={{ border: '1px solid #ccc', padding: '8px' }}>
//               <IconButton onClick={() => handleToggleRow(index)}>
//                     {isRowOpen(index) ? <DownIcon /> : <RightIcon />}
//                   </IconButton>
//               </td>
//               <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.object_name.value}</td>
//               <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
//               <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
//               <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
//               <td style={{ border: '1px solid #ccc', padding: '8px' }}><td>
//               <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
//               <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
//               <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
//               <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
//               <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
//               <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
//             </tr>
//           </React.Fragment>))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;