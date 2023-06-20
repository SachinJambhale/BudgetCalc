import * as React from "react";
import { IconButton } from "@mui/material";
import DownIcon from "../Icons/DownIcon";
import RightIcon from "../Icons/RightIcon";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchBillRateTable from "../tables/SearchBillRateTable";
import "./WorkPackageCollapsible.css";


interface ISearchBillRateCollapsibleProps {}

const SearchBillRateCollapsible: React.FunctionComponent<
  ISearchBillRateCollapsibleProps
> = (props) => {
  const [open, setOpen] = React.useState(false);
  const [enable, setEnable] = React.useState(false);

  const handleClick = () => {
    setEnable(true);
  };

  return (
    <>
      <div>
        <div className="collapsible" onClick={() => setOpen(!open)}>
          <h4 className="icon">{open ? <DownIcon /> : <RightIcon />} </h4>
          <h4 className="collapseHead">SEARCH BILL RATE TABLE</h4>
        </div>
        {open && <SearchBillRateTable />}
      </div>
    </>
  );
};

export default SearchBillRateCollapsible;
