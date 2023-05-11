import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export type TabProps = {
  label: string,
  Component: JSX.Element // inner component
};

export type CustomTabProps = {
  tabs: TabProps[];
  styles?: { 
    color: string,
    backgroundColor: string,
    selectBackgroundColor: string,
    innerDivBackgroundColor: string,
  };
};

export function CustomTab({ tabs, styles }: CustomTabProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: number) => {
    setValue(newValue);
  };

  const customTabsStyles = {
		color: styles?.color,
		backgroundColor: styles?.backgroundColor,
    borderColor: styles?.selectBackgroundColor ?? "#7B7DB0",
	};

  return (
    <div className='custom-tabs-container'>
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          className='custom-tabs'
          TabIndicatorProps={{
            style: { display: 'none' }
          }}
          style={customTabsStyles}
        >
          {tabs.map(({ label }, i) => (
            <Tab 
              className='custom-tab' 
              label={label} 
              key={i} 
              sx={{ "&.Mui-selected": { backgroundColor: customTabsStyles.borderColor } }}
            />
          ))}
        </Tabs>
      </div>
      {tabs.map(({ Component }, i) => (
        <TabPanel value={value} index={i} key={i} style={{backgroundColor: styles?.innerDivBackgroundColor}} >
          {Component}
        </TabPanel>
      ))}
    </div>
  );
}

type TabPanelProps = {
  value: number,
  index: number,
  children: React.ReactNode,
  style: React.CSSProperties,
  other?: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, style, ...other } = props;

  return (
    <div style={style}>
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

export default CustomTab;