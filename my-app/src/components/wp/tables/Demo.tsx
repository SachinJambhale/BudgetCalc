import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number,
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Country
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} size="small" aria-label="collapsible table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell />
    //         <TableCell>ProjectNumber</TableCell>
    //         <TableCell align="right">ProjectName</TableCell>
    //         <TableCell align="right">WPShortName</TableCell>
    //         <TableCell align="right">StartDate</TableCell>
    //         <TableCell align="right">EndDate</TableCell>
    //         <TableCell align="right">Status</TableCell>
    //         <TableCell align="right">Contract</TableCell>
    //         <TableCell align="right">Customer</TableCell>
    //         <TableCell align="right">PM</TableCell>
    //         <TableCell align="right">Service Area/Line</TableCell>
    //         <TableCell align="right"></TableCell>
    //         <TableCell align="right"></TableCell>
    //         <TableCell align="right"></TableCell>
    //         <TableCell align="right"></TableCell>
    //         <TableCell align="right"></TableCell>
    //         <TableCell align="right">Project Type</TableCell>
    //         <TableCell align="right">Bill Rate</TableCell>
    //         <TableCell align="right">Curr.</TableCell>
    //         <TableRow>
    //            <TableCell align="center" colSpan={2}>
    //              Country
    //              <TableCell align="right">Revenue</TableCell>
    //            </TableCell>
    //            <TableCell align="center" colSpan={3}>
    //              Details
    //              <TableCell align="right">Cost</TableCell>
    //            </TableCell>
    //          </TableRow>
    //         <TableCell align="right">Revenue</TableCell>
    //         <TableCell align="right">Cost</TableCell>
    //         <TableCell align="right">Hours</TableCell>
    //         <TableCell align="right">TSA/MSA</TableCell>
    //         <TableCell align="right">Margin</TableCell>
    //         <TableCell align="right">Revenue</TableCell>
    //         <TableCell align="right">Cost</TableCell>
    //       </TableRow>
    //       <TableRow>
    //         <TableCell />
    //         <TableCell>10393537</TableCell>
    //         <TableCell align="right">MORSAL_TC_FA_DN...</TableCell>
    //         <TableCell align="right">MORSAL_TC_FA_DN-586203</TableCell>
    //         <TableCell align="right">2023-04-01</TableCell>
    //         <TableCell align="right">2023-09-30</TableCell>
    //         <TableCell align="right">Active Project</TableCell>
    //         <TableCell align="right">CustRef_text</TableCell>
    //         <TableCell align="right">Aker BP ASA</TableCell>
    //         <TableCell align="right">Per Torjus Einstabland</TableCell>
    //         <TableCell align="right"></TableCell>
    //         <TableCell align="right"></TableCell>
    //         <TableCell align="right"></TableCell>
    //         <TableCell align="right"></TableCell>
    //         <TableCell align="right"></TableCell>
    //         <TableCell align="right"></TableCell>
    //         <TableCell align="right">T&M TTB</TableCell>
    //         <TableCell align="right"></TableCell>
    //         <TableCell align="right">Eur</TableCell>
    //         <TableCell align="right">9000</TableCell>
    //         <TableCell align="right">9475</TableCell>
    //         <TableCell align="right">0</TableCell>
    //         <TableCell align="right">0</TableCell>
    //         <TableCell align="right">60</TableCell>
    //         <TableCell align="right">675.00</TableCell>
    //         <TableCell align="right">-13%</TableCell>
    //         <TableCell align="right">9000</TableCell>
    //         <TableCell align="right">10150</TableCell>
    //       </TableRow>
    //     </TableHead>
    //   </Table>
    // </TableContainer>
  );
}
