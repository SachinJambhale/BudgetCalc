import React, { useState } from 'react';
import "./SearchBillRateTable.css";

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

    return (
        <div>
            <table>
                <tr id="tr"> <label>Filter by type</label></tr>
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
                    <div id="icon"><i className="fas fa-search" style={{fontSize:24}}></i>   </div>
                </tr>
                <tr id="tr">
                <label>Filter by source</label>
                </tr>
<tr className="checkbox-container">
    <input type="radio" name="pooja" value="All"/>All
    <input type="radio" name="pooja" value="Frame Agreement"/>Frame Agreement
    <input type="radio" name="pooja" value="Area"/>Area
    <input type="radio" name="pooja" value="Regional"/>Regional
    <input type="radio" name="pooja" value="Responsible Cost Center"/>Responsible Cost Center
</tr>

            </table>
        </div>
    );
};

export default SearchBillRateTable;

