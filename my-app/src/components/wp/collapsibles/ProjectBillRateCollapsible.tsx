// import * as React from "react";
// import "./WorkPackageCollapsible.css";
// import { IconButton } from "@mui/material";
// import DownIcon from "../Icons/DownIcon";
// import RightIcon from "../Icons/RightIcon";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import ProjectBillRateTable from "../tables/ProjectBillRateTable";

// interface IProjectBillRateProps {}

// const ProjectBillRate: React.FunctionComponent<IProjectBillRateProps> = (
//   props
// ) => {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <>
//       <div>
//         <div className="collapsible" onClick={() => setOpen(!open)}>
//           <h4 className="icon">{open ? <DownIcon /> : <RightIcon />} </h4>
//           <h4 className="collapseHead">ProjectBillRate</h4>
//         </div>

//         {open && (
//           <Box>
//             <Box
//               sx={{ margin: "5px", display: "flex", justifyContent: "start" }}
//             >
//               <Button className="custombtn" sx={{ margin: "10px" }}>
//                 EDIT
//               </Button>
//               <Button className="custombtn" sx={{ margin: "10px" }}>
//                 SHOW INVALID RATES
//               </Button>
//             </Box>
//             <ProjectBillRateTable/>
//           </Box>
//         )}
//       </div>
//     </>
//   );
// };

// export default ProjectBillRate;



// import  React,{ useState } from "react";
// import "./WorkPackageCollapsible.css";
// import { IconButton } from "@mui/material";
// import DownIcon from "../Icons/DownIcon";
// import RightIcon from "../Icons/RightIcon";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import ProjectBillRateTable from "../tables/ProjectBillRateTable";

// interface IAppProps {
//   enable: boolean;
// }
// interface IProjectBillRateProps {}

// const [enable, setEnable] = useState(false);
// const handleClick = () => {
//   setEnable(true);
// };
// const ProjectBillRate: React.FunctionComponent<IProjectBillRateProps> = (
//   props
// ) => {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <>
//       <div>
//         <div className="collapsible" onClick={() => setOpen(!open)}>
//           <h4 className="icon">{open ? <DownIcon /> : <RightIcon />} </h4>
//           <h4 className="collapseHead">ProjectBillRate</h4>
//         </div>

//         {open && (
//           <Box>
//             <Box
//               sx={{ margin: "5px", display: "flex", justifyContent: "start" }}
//             >
//               <Button
//                 className="custombtn"
//                 sx={{ margin: "10px" }}
//                 onClick={handleClick}
//               >
//                 EDIT
//               </Button>
//               {enable === true ? (
//                 <Box>
//                   <Button
//                     className="custombtn"
//                     sx={{ margin: "10px" }}
//                     onClick={handleClick}
//                   >
//                     Save
//                   </Button>

//                   <Button
//                     className="custombtn"
//                     sx={{ margin: "10px" }}
//                     onClick={() => setEnable(false)}
//                   >
//                     Cancel
//                   </Button>
//                 </Box>
//               ) : (
//                 ""
//               )}
//               <Button className="custombtn" sx={{ margin: "10px" }}>
//                 SHOW INVALID RATES
//               </Button>
//             </Box>
//             <ProjectBillRateTable />
//           </Box>
//         )}
//       </div>
//     </>
//   );
// };

// export default ProjectBillRate;

import React, { useState } from "react";
import "./WorkPackageCollapsible.css";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DownIcon from "../Icons/DownIcon";
import RightIcon from "../Icons/RightIcon";
import ProjectBillRateTable from "../tables/ProjectBillRateTable";

interface IProjectBillRateProps {}

const ProjectBillRate: React.FunctionComponent<IProjectBillRateProps> = () => {
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
          <h4 className="collapseHead">PROJECTBILLRATE</h4>
        </div>

        {isCollapsibleOpen && (
          <Box>
              <ProjectBillRateTable />
          </Box>
        )}
      </div>
    </>
  );
};

export default ProjectBillRate;


