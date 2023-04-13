import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export type TabProps = {
  label: string,
  Component: JSX.Element
};

export type CustomTabProps = {
  tabs: TabProps[]
};

export function CustomTab({ tabs }: CustomTabProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          className="custom-tabs"
        >
          {tabs.map(({ label }, i) => (
            <Tab label={label} key={i} />
          ))}
        </Tabs>
      </Box>
      {tabs.map(({ Component }, i) => (
        <TabPanel value={value} index={i} key={i}>
          {Component}
        </TabPanel>
      ))}
    </Box>
  );
}

type TabPanelProps = {
  value: number,
  index: number,
  children: React.ReactNode,
  other?: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div>
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

export default CustomTab;