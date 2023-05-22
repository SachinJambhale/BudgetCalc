import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import BillRateTable from "../tables/BillRateTable";
import MuiAccordionSummary, {
    AccordionSummaryProps
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/base";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0
    },
    "&:before": {
        display: "none"
    }
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "#99D9F0"
            : "#99D9F0",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)"
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1)
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(0),
    borderTop: "#99D9F0"
}));

const BillRateCollapsible = () => {
    const [expanded, setExpanded] = React.useState<string | false>("panel1");

    const handleChange = (panel: string) => (
        event: React.SyntheticEvent,
        newExpanded: boolean
    ) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <div>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>BILL RATES</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Button>EDIT</Button>
                    <Button>SHOW INVALID RATES </Button>
                    <BillRateTable />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
export default BillRateCollapsible;