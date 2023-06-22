import React, { useState } from 'react';
import "./SearchBillRateTable.css";
import { Button } from "@mui/material";
interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} onChange={handleChange} />
                {label}
            </label>
        </div>
    );
};

const SearchBillRateTable: React.FC = () => {
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>("");

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleCheckbox1Change = (checked: boolean) => {
        setCheckbox1(checked);
        console.log("checkbox1 meth");
    };

    const handleCheckbox2Change = (checked: boolean) => {
        setCheckbox2(checked);
        console.log("checkbox2 meth");
    };

    const handleCheckbox3Change = (checked: boolean) => {
        setCheckbox3(checked);
        console.log("checkbox3 meth");
    };
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
        console.log("called radio method");
    };
    const handleButton = () => {
        console.log("clicked on button");
    }
    return (
        <div>
            <table>
                <hr />
                <tr id="tr"> <label>Filter by type</label></tr>
                <br />
                <tr className="checkbox-container">
                    <Checkbox label="Favourites" checked={checkbox1} onChange={handleCheckbox1Change} />
                    <Checkbox label="Bill Rates" checked={checkbox2} onChange={handleCheckbox2Change} />
                    <Checkbox label="Mixed Rates" checked={checkbox3} onChange={handleCheckbox3Change} />

                    <input
                        type="text"
                        id="input"
                        placeholder="Filter by keywords.."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <div id="icon"><i className="fas fa-search" style={{ fontSize: 24 }}></i>   </div>
                </tr>
                <br />
                <tr id="tr">
                    <label>Filter by source</label>
                </tr> <br />
                <tr className="checkbox-container">
                    <input type="radio" name="pp" value="All" onChange={handleRadioChange} />All
                    <input type="radio" name="pp" value="Frame Agreement" onChange={handleRadioChange} />Frame Agreement
                    <input type="radio" name="pp" value="Area" onChange={handleRadioChange} />Area
                    <input type="radio" name="pp" value="Regional" onChange={handleRadioChange} />Regional
                    <input type="radio" name="pp" value="Responsible Cost Center" onChange={handleRadioChange} />Responsible Cost Center
                </tr>
                <hr />
                <tr id="tr">
                    <Button
                        className="custombtn"
                        sx={{ margin: "10px" }}
                        onClick={handleButton}
                    >
                        Show Search Results
                    </Button>
                </tr>
                <br /> <tr>No Search Results Found</tr>

                <br />
                <table>
                    <tr id="tr">
                        <th>Bill Rates</th>
                        <th>Mixed Bill Rates</th>
                    </tr>
                </table>
            </table>
        </div>
    );
};

export default SearchBillRateTable;

