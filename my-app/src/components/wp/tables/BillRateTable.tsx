import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DownIcon from '@mui/icons-material/ArrowDropDown';
import RightIcon from '@mui/icons-material/ArrowRight';
import "./BillRateTable.css";
// function createData(
//     RateTableName: string,
//     CategoryType: string,
//     DNVInternalCategory: string,
//     BillRateCategory: string,
//     Currency: string,
//     BillRate: string,
//     BillRateCriteria: string,
//     ExpStart: string,
//     ExpEnd: string,
//     Validfrom: string,
//     Validto: string,

// ) {
//     return {
//         RateTableName,
//         CategoryType,
//         DNVInternalCategory,
//         BillRateCategory,
//         Currency,
//         BillRate,
//         BillRateCriteria,
//         ExpStart,
//         ExpEnd,
//         Validfrom,
//         Validto,
//         history: [
//             {
//                 RateTableName: "",
//                 CategoryType: "",
//                 DNVInternalCategory: 'Prof.asd',
//                 BillRateCategory: "Professional",
//                 Currency: "EUR",
//                 BillRate: "300",
//                 BillRateCriteria: "classtestprof",
//                 ExpStart: "2",
//                 ExpEnd: "4",
//                 Validfrom: "20/05/23",
//                 Validto: "30/05/23"
//             },
//             {
//                 RateTableName: "",
//                 CategoryType: "",
//                 DNVInternalCategory: 'Sen.asd',
//                 BillRateCategory: "Senior",
//                 Currency: "EUR",
//                 BillRate: "300",
//                 BillRateCriteria: "classtestprof",
//                 ExpStart: "2",
//                 ExpEnd: "4",
//                 Validfrom: "20/05/23",
//                 Validto: "30/05/23"
//             },
//             {
//                 RateTableName: "",
//                 CategoryType: "",
//                 DNVInternalCategory: 'Prin.asd',
//                 BillRateCategory: "Principal",
//                 Currency: "EUR",
//                 BillRate: "300",
//                 BillRateCriteria: "classtestprof",
//                 ExpStart: "2",
//                 ExpEnd: "4",
//                 Validfrom: "20/05/23",
//                 Validto: "30/05/23"
//             },
//         ],
//     };
// }

// function Row(props: { row: ReturnType<typeof createData> }) {
//     const { row } = props;
//     const [open, setOpen] = React.useState(false);
// const [sorting, setSorting] = React.useState({key : "DNVInternalCategory", ascending : true});
// const [currentUser, setCurrentUser] = React.useState([history]);

// React.useEffect(() => {
//     const currentUserCopy = [...currentUser]
//     const sortedCurrentUser = currentUserCopy.sort(( a: any,b: any ) => {
//         return a[sorting.key].localeCompare(b[sorting.key]);
//     });

//     setCurrentUser (sorting.ascending ? sortedCurrentUser : sortedCurrentUser.reverse());
// }, [currentUser, sorting]);


// const applySorting = (key : any, ascending : any) => {
//     setSorting({key: key, ascending: ascending})
// }


// return (
//     <React.Fragment>
//         <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//             <TableCell>
//                 <IconButton
//                     aria-label="expand row"
//                     size="small"
//                     onClick={() => setOpen(!open)}
//                 >
//                     {open ? <ArrowRightIcon /> : <ArrowDropDownIcon />}
//                 </IconButton>
//             </TableCell>

//             <TableCell component="th" scope="row">
//                 {row.RateTableName}
//             </TableCell>
//             <TableCell align="right">{row.CategoryType}</TableCell>
//             <TableCell></TableCell>
//             <TableCell></TableCell>
//             <TableCell align="right">{row.Currency}</TableCell>

//         </TableRow>
//         <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//             <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//                 <Collapse in={open} timeout="auto" unmountOnExit>
//                     <Box sx={{ margin: 1 }}>
//                         <TableContainer className="tborder"
//       sx={{ minWidth: 650 }}
//       aria-label="simple table">
//                             <Table>
//                                 <TableBody>
//                                     {row.history.map((historyRow) => (
//                                         <TableRow key={historyRow.RateTableName}>

//                                             <TableCell align='right' component="th" scope="row">{historyRow.RateTableName}</TableCell>
//                                             <TableCell align='right'>
//                                                 {historyRow.CategoryType}
//                                             </TableCell>
//                                             <TableCell align='right'>
//                                                 {historyRow.DNVInternalCategory}
//                                             </TableCell>
//                                             <TableCell align='right'>{historyRow.BillRateCategory}</TableCell>
//                                             <TableCell align='right'>{historyRow.Currency}</TableCell>
//                                             <TableCell align='right'>{historyRow.BillRate}</TableCell>
//                                             <TableCell align='right'>{historyRow.BillRateCriteria}</TableCell>
//                                             <TableCell align='right'>{historyRow.ExpStart}</TableCell>
//                                             <TableCell align='right'>{historyRow.ExpEnd}</TableCell>
//                                             <TableCell align='right'>
//                                                 {historyRow.Validfrom}
//                                             </TableCell > <TableCell>
//                                                 {historyRow.Validto}
//                                             </TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </TableContainer>
//                     </Box>
//                 </Collapse>
//             </TableCell>
//         </TableRow>
//     </React.Fragment>
// );
// }

// const rows = [
//     createData('Lorem Ipsum', 'Internal', " ", " ", 'EUR', " ", " ", " ", "", " ", " "),
//     createData('Lorem Ipsum', 'Internal', " ", " ", 'EUR', " ", " ", "", " ", " ", " ")
// ]

// const BillRateTable = () => {
//    const users= [
//         {
//             RateTableName: "",
//             CategoryType: "",
//             DNVInternalCategory: 'Prof.asd',
//             BillRateCategory: "Professional",
//             Currency: "EUR",
//             BillRate: "300",
//             BillRateCriteria: "classtestprof",
//             ExpStart: "2",
//             ExpEnd: "4",
//             Validfrom: "20/05/23",
//             Validto: "30/05/23"
//         },
//         {
//             RateTableName: "",
//             CategoryType: "",
//             DNVInternalCategory: 'Sen.asd',
//             BillRateCategory: "Senior",
//             Currency: "EUR",
//             BillRate: "300",
//             BillRateCriteria: "classtestprof",
//             ExpStart: "2",
//             ExpEnd: "4",
//             Validfrom: "20/05/23",
//             Validto: "30/05/23"
//         },
//         {
//             RateTableName: "",
//             CategoryType: "",
//             DNVInternalCategory: 'Prin.asd',
//             BillRateCategory: "Principal",
//             Currency: "EUR",
//             BillRate: "300",
//             BillRateCriteria: "classtestprof",
//             ExpStart: "2",
//             ExpEnd: "4",
//             Validfrom: "20/05/23",
//             Validto: "30/05/23"
//         }
//     ]
//     //const [sorting, setSorting] = React.useState({key : "DNVInternalCategory", ascending : true});
//     const [currentUser, setCurrentUser] = React.useState([users]);
//     const [open, setOpen] = React.useState(false);
//     const [sorting, setSorting] = React.useState({ key: "RateTableName", ascending: true });
//     React.useEffect(() => {
//         const currentUserCopy = [...currentUser]
//         const sortedCurrentUser = currentUserCopy.sort(( a: any,b: any ) => {
//             return a[sorting.key].localeCompare(b[sorting.key]);
//         });

//         setCurrentUser (sorting.ascending ? sortedCurrentUser : sortedCurrentUser.reverse());
//     }, [currentUser, sorting]);


//     const applySorting = (key : any, ascending : any) => {
//         setSorting({key: key, ascending: ascending})
//     }


//     return (
//         <TableContainer className="tborder"
//             sx={{ minWidth: 650 }}
//             aria-label="simple table">
//             <Table>
//                 <TableHead className="tableHead">
//                     <TableRow >
//                         <TableCell className="tborder"
//                             sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
//                             <IconButton
//                                 aria-label="expand row"
//                                 size="small"
//                                 onClick={() => setOpen(!open)}
//                             >
//                                 <h4 className="icon">{open ? <DownIcon /> : <RightIcon />} </h4>
//                             </IconButton>

//                         </TableCell>


//                         <TableCell align='right' className="tborder"
//                             sx={{ fontSize: "0.9rem", fontWeight: "bold" }} onClick={() => applySorting("name", !sorting.ascending)}>Rate Table Name</TableCell>
//                         <TableCell align='right' className="tborder"
//                             sx={{ fontSize: "0.9rem", fontWeight: "bold" }} onClick={() => applySorting("name", !sorting.ascending)}>Category Type</TableCell>
//                         <TableCell align='right' sortDirection='asc' className="tborder"
//                             sx={{ fontSize: "0.9rem", fontWeight: "bold" }} onClick={() => applySorting("name", !sorting.ascending)}>DNV Internal Category</TableCell>
//                         <TableCell align='right' className="tborder"
//                             sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>Bill Rate Category</TableCell>
//                         <TableCell align='right' className="tborder"
//                             sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>Currency</TableCell>
//                         <TableCell align='right' className="tborder"
//                             sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>Bill Rate</TableCell>
//                         <TableCell align='right' className="tborder"
//                             sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>Bill Rate Criteria</TableCell>
//                         <TableCell align='right' className="tborder"
//                             sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>Exp Start</TableCell>
//                         <TableCell align='right' className="tborder"
//                             sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>Exp End</TableCell>
//                         <TableCell align='right' className="tborder"
//                             sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>Valid from</TableCell>
//                         <TableCell align='right' className="tborder"
//                             sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>Valid to</TableCell>
//                     </TableRow>

//                 </TableHead>
//                 <TableBody>
//                     {open &&
//                         <tr>
//                             <td><IconButton
//                                 aria-label="expand row"
//                                 size="small"
//                                 onClick={() => setOpen(!open)}
//                             >
//                                 {open ? <DownIcon /> : <RightIcon />}
//                             </IconButton></td>
//                             <td>Lorem Ipsum</td>
//                             <td>Internal</td>
//                             <td></td>
//                             <td></td>
//                             <td>EUR</td>
//                             <td></td>
//                             <td></td>
//                             <td></td>
//                             <td></td>
//                             <td></td>
//                             <td></td>

//                         </tr>}

//                     <tr>
//                         <td></td>
//                         <td>Internal</td>
//                         <td>Prof.asd</td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td>Internal</td>
//                         <td>Prof.asd</td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                     </tr>
//                 </TableBody>
//                 {open &&
//                 <tbody>
//  {currentUser.map((item:any, index:any) => (
// <tr
//  key={item.id}
//  className={
//      index % 2 === 0 ? "bg-white shadow-sm text-center" : "bg-text bg-opacity-5 shadow-sm text-center"
//  }
// >
// <td >{item.RateTableName}</td>
// <td >{item.Category}</td>
// </tr>
//  ))}
// </tbody>}
//             </Table>
//         </TableContainer>
//     );
// }
// export default BillRateTable;
const BillRateTable = () => {
    const [users, setUsers] = React.useState([
        {
            RateTableName: "Lorem Ipsum",
            CategoryType: "Internal",
            DNVInternalCategory: 'Prin.asd',
            BillRateCategory: "Principal",
            Currency: "EUR",
            BillRate: "300",
            BillRateCriteria: "classtestprof",
            ExpStart: "2",
            ExpEnd: "4",
            Validfrom: "20/05/23",
            Validto: "30/05/23"
        },
        {
            RateTableName: "Lorem Ipsum",
            CategoryType: "Internal",
            DNVInternalCategory: 'Prin.asd',
            BillRateCategory: "Principal",
            Currency: "EUR",
            BillRate: "300",
            BillRateCriteria: "classtestprof",
            ExpStart: "2",
            ExpEnd: "4",
            Validfrom: "20/05/23",
            Validto: "30/05/23"
        },
        {
            RateTableName: "",
            CategoryType: "",
            DNVInternalCategory: 'Prof.asd',
            BillRateCategory: "Professional",
            Currency: "EUR",
            BillRate: "300",
            BillRateCriteria: "classtestprof",
            ExpStart: "1",
            ExpEnd: "3",
            Validfrom: "20/05/23",
            Validto: "30/05/23"
        },
        {
            RateTableName: "",
            CategoryType: "",
            DNVInternalCategory: 'Sen.asd',
            BillRateCategory: "Senior",
            Currency: "abc",
            BillRate: "300",
            BillRateCriteria: "classtestprof",
            ExpStart: "2",
            ExpEnd: "4",
            Validfrom: "20/05/23",
            Validto: "30/05/23"
        },
        {
            RateTableName: "",
            CategoryType: "",
            DNVInternalCategory: 'Prin.asd',
            BillRateCategory: "Principal",
            Currency: "EUR",
            BillRate: "300",
            BillRateCriteria: "classtestprof",
            ExpStart: "2",
            ExpEnd: "4",
            Validfrom: "20/05/23",
            Validto: "30/05/23"
        }
    ]);

    const [open, setOpen] = React.useState(false);
    const [sorting, setSorting] = React.useState({
        key: "DNVInternalCategory",
        ascending: true
    });

    React.useEffect(() => {
        const sortedUsers = [...users].sort((a: any, b: any) => {
            return a[sorting.key].localeCompare(b[sorting.key]);
        });

        if (!sorting.ascending) {
            sortedUsers.reverse();
        }

        setUsers(sortedUsers);
    }, [users, sorting]);

    const applySorting = (key: any, ascending: any) => {
        setSorting({ key: key, ascending: ascending });
    };

    return (
        <TableContainer className="tborder" sx={{ minWidth: 650 }} aria-label="simple table">
            <Table>
                <TableHead className="tableHead">
                    <TableRow>
                        <TableCell className="tborder" sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                                <h4 className="icon">{open ? <DownIcon /> : <RightIcon />} </h4>
                            </IconButton>
                        </TableCell>

                        <TableCell
                            align="right"
                            className="tborder"
                            sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                            onClick={() => applySorting("RateTableName", !sorting.ascending)}
                        >
                            Rate Table Name
                        </TableCell>
                        <TableCell
                            align="right"
                            className="tborder"
                            sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                            onClick={() => applySorting("CategoryType", !sorting.ascending)}
                        >
                            Category Type
                        </TableCell>
                        <TableCell
                            align="right"
                            sortDirection="asc"
                            className="tborder"
                            sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                            onClick={() => applySorting("DNVInternalCategory", !sorting.ascending)}
                        >DNV Internal Category</TableCell>
                        <TableCell
                            align="right"
                            sortDirection="asc"
                            className="tborder"
                            sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                            onClick={() => applySorting("BillRateCategory", !sorting.ascending)}
                        >Bill Rate Category</TableCell>
                        <TableCell
                            align="right"
                            sortDirection="asc"
                            className="tborder"
                            sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                            onClick={() => applySorting("Currency", !sorting.ascending)}
                        >Currency</TableCell>
                        <TableCell
                            align="right"
                            sortDirection="asc"
                            className="tborder"
                            sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                            onClick={() => applySorting("BillRate", !sorting.ascending)}
                        >Bill Rate</TableCell>
                        <TableCell
                            align="right"
                            sortDirection="asc"
                            className="tborder"
                            sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                            onClick={() => applySorting("BillRateCriteria", !sorting.ascending)}
                        >Bill Rate Criteria</TableCell>
                        <TableCell
                            align="right"
                            sortDirection="asc"
                            className="tborder"
                            sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                            onClick={() => applySorting("ExpStart", !sorting.ascending)}
                        >ExpStart</TableCell>
                        <TableCell
                            align="right"
                            sortDirection="asc"
                            className="tborder"
                            sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                            onClick={() => applySorting("ExpEnd", !sorting.ascending)}
                        >ExpEnd</TableCell>
                        <TableCell
                            align="right"
                            sortDirection="asc"
                            className="tborder"
                            sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                            onClick={() => applySorting("Validfrom", !sorting.ascending)}
                        >Validfrom</TableCell>
                        <TableCell
                            align="right"
                            sortDirection="asc"
                            className="tborder"
                            sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                            onClick={() => applySorting("Validto", !sorting.ascending)}
                        >Validto</TableCell>
                    </TableRow>
                </TableHead>
                {open &&
                    <TableBody>{
                        users.map((user: any) => (
                            <tr key="DNVInternalCategory">
                                <td></td>
                                 <td>{user.RateTableName}</td>
                                <td>{user.CategoryType}</td>
                                <td>{user.DNVInternalCategory}</td>
                                <td>{user.BillRateCategory}</td>
                                <td>{user.Currency}</td>
                                <td>{user.BillRate}</td>
                                <td>{user.BillRateCriteria}</td>
                                <td>{user.ExpStart}</td>
                                <td>{user.ExpEnd}</td>
                                <td>{user.Validfrom}</td>
                                <td>{user.Validto}</td>
                            </tr>
                        ))
                    }
                    </TableBody>}</Table>
        </TableContainer>
    )
}
export default BillRateTable;