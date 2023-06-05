import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import WorkPackagesCollapsible from "./collapsibles/WorkPackagesCollapsible";
import BillRateCollapsible from "./collapsibles/BillRateCollapsible";
import Stack from "@mui/material/Stack";
import BillRateAssignerCollapsible from "./collapsibles/BillRateAssignerCollapsible";
import ProjectBillRateCollapsible from "./collapsibles/ProjectBillRateCollapsible";
import Table from './collapsibles/Table'
// import './tables/WbsTabView.css'
interface IWbsTabViewProps {}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const WbsTabView: React.FunctionComponent<IWbsTabViewProps> = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="VERSION ONE" />
              <Tab label="VERSION TWO" />
              <Tab label="VERSION THREE" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <BillRateCollapsible/>
            <ProjectBillRateCollapsible/>
            <WorkPackagesCollapsible />
            <BillRateAssignerCollapsible/>
            <Table/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            VERSION TWO
          </TabPanel>
          <TabPanel value={value} index={2}>
            VERSION THREE
          </TabPanel>
        </Box>
      </Container>
    </>
  );
};

export default WbsTabView;


