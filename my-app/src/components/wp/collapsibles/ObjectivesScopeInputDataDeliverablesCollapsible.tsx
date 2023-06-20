
// import React, { useState } from "react";
// import "./WorkPackageCollapsible.css";
// import IconButton from "@mui/material/IconButton";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import DownIcon from "../Icons/DownIcon";
// import RightIcon from "../Icons/RightIcon";
 //import ObjectivesScopeInputDataDeliverablesTable from "../tables/ObjectivesScopeInputDataDeliverablesTable";

// interface IProjectBillRateProps {}

// const ObjectivesScopeInputDataDeliverablesCollapsible: React.FunctionComponent<IProjectBillRateProps> = () => {
//   const [isCollapsibleOpen, setCollapsibleOpen] = useState(false);
//   const [isEditing, setEditing] = useState(false);

//   const handleEdit = () => {
//     setEditing(true);
//   };

//   const handleSave = () => {
//     // Logic to save the changes
//     setEditing(false);
//   };

//   const handleCancel = () => {
//     // Logic to cancel the changes
//     setEditing(false);
//   };

//   const handleCollapsibleClick = () => {
//     setCollapsibleOpen(!isCollapsibleOpen);
//   };

//   // ...

//   return (
//     <>
//       <div>
//         <div className="collapsible" onClick={handleCollapsibleClick}>
//           <h4 className="icon">{isCollapsibleOpen ? <DownIcon /> : <RightIcon />} </h4>
//           <h4 className="collapseHead">OBJECTIVES-SCOPE-INPUT DATA-DELIVERABLES</h4>
          
//         </div>

//         {isCollapsibleOpen && (
//           <Box>
//             <Box
//               sx={{ margin: "5px", display: "flex", justifyContent: "start" }}
//             >
//               {!isEditing ? (
//                 <Button className="custombtn" sx={{ margin: "10px" }} onClick={handleEdit}>
//                   EDIT
//                 </Button>
//               ) : (
//                 <>
//                   <Button className="custombtn" sx={{ margin: "10px" }} onClick={handleSave}>
//                     SAVE
//                   </Button>
//                   <Button className="custombtn" sx={{ margin: "10px" }} onClick={handleCancel}>
//                     CANCEL
//                   </Button>
//                 </>
//               )}
//             </Box>
//             <ObjectivesScopeInputDataDeliverablesTable />
//           </Box>
//         )}
//       </div>
//     </>
//   );
// };

// export default ObjectivesScopeInputDataDeliverablesCollapsible;

import React, { useState } from "react";
import "./WorkPackageCollapsible.css";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DownIcon from "../Icons/DownIcon";
import RightIcon from "../Icons/RightIcon";

interface IObjectivesScopeInputDataDeliverablesCollapsibleProps {}

const ObjectivesScopeInputDataDeliverablesCollapsible: React.FunctionComponent<IObjectivesScopeInputDataDeliverablesCollapsibleProps> = () => {
  const [isCollapsibleOpen, setCollapsibleOpen] = useState(false);
  const handleCollapsibleClick = () => {
    setCollapsibleOpen(!isCollapsibleOpen);
  };

  // ...

  return (
    <>
      <div>
        <div className="collapsible" onClick={handleCollapsibleClick}>
          <h4 className="icon">{isCollapsibleOpen ? <DownIcon /> : <RightIcon />} </h4>
          <h4 className="collapseHead">OBJECTIVES-SCOPE-INPUT DATA-DELIVERABLES</h4>
        </div>

        {isCollapsibleOpen && (
          <Box>
              < ObjectivesScopeInputDataDeliverablesTable/>
          </Box>
        )}
      </div>
    </>
  );
};

export default ObjectivesScopeInputDataDeliverablesCollapsible;
