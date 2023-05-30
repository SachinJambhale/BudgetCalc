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
import "./WorkPackageTable.css";
function createData(
    RateTableName: string,
    CategoryType: string,
    DNVInternalCategory: string,
    BillRateCategory: string,
    Currency: string,
    BillRate: string,
    BillRateCriteria: string,
    ExpStart: string,
    ExpEnd: string,
    Validfrom: string,
    Validto: string,

) {
    return {
        RateTableName,
        CategoryType,
        DNVInternalCategory,
        BillRateCategory,
        Currency,
        BillRate,
        BillRateCriteria,
        ExpStart,
        ExpEnd,
        Validfrom,
        Validto,
        history: [
            {
                RateTableName: "",
                CategoryType: "",
                DNVInternalCategory: 'Prof.asd',
                BillRateCategory: "Professional",
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
                DNVInternalCategory: 'Sen.asd',
                BillRateCategory: "Senior",
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
        ],
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
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
}

const rows = [
    createData('Lorem Ipsum', 'Internal', " ", " ", 'EUR', " ", " ", " ", "", " ", " "),
    createData('Lorem Ipsum', 'Internal', " ", " ", 'EUR', " ", " ", "", " ", " ", " ")
]

const BillRateTable = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <TableContainer className="tborder"
        sx={{ minWidth: 650 }}
        aria-label="simple table">
            <Table>
                <TableHead className="tableHead">
                    <TableRow >
                        <TableCell className="tborder"
                      sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                        <IconButton
                        aria-label="expand row"
                        size="small"
                       onClick={() => setOpen(!open)}
                    >
                     {open ? <DownIcon /> : <RightIcon />}
                  </IconButton>
                
                      </TableCell>
                      
               
                        <TableCell align='right' className="tborder"
                      sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>Rate Table Name</TableCell>
                        <TableCell align='right' className="tborder"
                      sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>Category Type</TableCell>
                        <TableCell align='right' sortDirection = 'asc' className="tborder"
                      sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>DNV Internal Category</TableCell>
                        <TableCell align='right' className="tborder"
                      sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>Bill Rate Category</TableCell>
                        <TableCell align='right' className="tborder"
                      sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>Currency</TableCell>
                        <TableCell align='right' className="tborder"
                      sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>Bill Rate</TableCell>
                        <TableCell align='right' className="tborder"
                      sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>Bill Rate Criteria</TableCell>
                        <TableCell align='right' className="tborder"
                      sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>Exp Start</TableCell>
                        <TableCell align='right' className="tborder"
                      sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>Exp End</TableCell>
                        <TableCell align='right' className="tborder"
                      sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>Valid from</TableCell>
                        <TableCell align='right' className="tborder"
                      sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>Valid to</TableCell>
                    </TableRow>

                </TableHead>
                <TableBody>

                {rows.map((row) => (
                        <tr key={row.RateTableName}/>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default BillRateTable;
