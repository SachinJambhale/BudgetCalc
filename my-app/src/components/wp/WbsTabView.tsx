import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import WorkPackagesCollapsible from "./collapsibles/WorkPackagesCollapsible";
import SearchBillRateCollapsible from "./collapsibles/SearchBillRateCollapsible";
import BillRateCollapsible from "./collapsibles/BillRateCollapsible";
import BillRateAssignerCollapsible from "./collapsibles/BillRateAssignerCollapsible";
import ProjectBillRateCollapsible from "./collapsibles/ProjectBillRateCollapsible";
import ObjectivesScopeInputDataDeliverablesCollapsible from "./collapsibles/ObjectivesScopeInputDataDeliverablesCollapsible";
import './tables/WbsTabView.css'
import { Switch } from '@mui/material';
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
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Container maxWidth="xl" className="tab">
        <Box sx={{ width: "100%" }} className="version">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }} className="version">
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
          <Box className="version">
          <><label>Version Description
    </label><br/>
    <textarea></textarea></>
          </Box>
          <Box  className="frozen">
          Frozen<Switch
            checked={checked}
            onChange={() => setChecked(!checked)}
          />

          </Box>
          
          <TabPanel value={value} index={0}>
            <SearchBillRateCollapsible/>
            <BillRateCollapsible />
            <ProjectBillRateCollapsible />
            <WorkPackagesCollapsible checked={checked} />
            <BillRateAssignerCollapsible />
            <ObjectivesScopeInputDataDeliverablesCollapsible />
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
