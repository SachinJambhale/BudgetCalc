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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <ArrowRightIcon /> : <ArrowDropDownIcon />}
                    </IconButton>
                </TableCell>

                <TableCell component="th" scope="row">
                    {row.RateTableName}
                </TableCell>
                <TableCell align="right">{row.CategoryType}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">{row.Currency}</TableCell>

            </TableRow>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <TableContainer>
                                <Table sx={{ minWidth: 650 }} size="small" aria-label="collapsible table">
                                    <TableBody>
                                        {row.history.map((historyRow) => (
                                            <TableRow key={historyRow.RateTableName}>

                                                <TableCell align='right' component="th" scope="row">{historyRow.RateTableName}</TableCell>
                                                <TableCell align='right'>
                                                    {historyRow.CategoryType}
                                                </TableCell>
                                                <TableCell align='right'>
                                                    {historyRow.DNVInternalCategory}
                                                </TableCell>
                                                <TableCell align='right'>{historyRow.BillRateCategory}</TableCell>
                                                <TableCell align='right'>{historyRow.Currency}</TableCell>
                                                <TableCell align='right'>{historyRow.BillRate}</TableCell>
                                                <TableCell align='right'>{historyRow.BillRateCriteria}</TableCell>
                                                <TableCell align='right'>{historyRow.ExpStart}</TableCell>
                                                <TableCell align='right'>{historyRow.ExpEnd}</TableCell>
                                                <TableCell align='right'>
                                                    {historyRow.Validfrom}
                                                </TableCell > <TableCell>
                                                    {historyRow.Validto}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData('Lorem Ipsum', 'Internal', " ", " ", 'EUR', " ", " ", " ", "", " ", " "),
    createData('Lorem Ipsum', 'Internal', " ", " ", 'EUR', " ", " ", "", " ", " ", " ")
]
const BillRateTable = () => {
    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell align='right'>Rate Table Name</TableCell>
                        <TableCell align='right'>Category Type</TableCell>
                        <TableCell align='right'>DNV Internal Category</TableCell>
                        <TableCell align='right'>Bill Rate Category</TableCell>
                        <TableCell align='right'>Currency</TableCell>
                        <TableCell align='right'>Bill Rate</TableCell>
                        <TableCell align='right'>Bill Rate Criteria</TableCell>
                        <TableCell align='right'>Exp Start</TableCell>
                        <TableCell align='right'>Exp End</TableCell>
                        <TableCell align='right'>Valid from</TableCell>
                        <TableCell align='right'>Valid to</TableCell>
                    </TableRow>

                </TableHead>
                <TableBody>

                    {rows.map((row) => (
                        <Row key={row.RateTableName} row={row} />

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default BillRateTable;
