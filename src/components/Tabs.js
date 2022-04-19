import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import ScreenOne from "./ScreenOne";
import ScreenTwo from "./ScreenTwo";
import ScreenThree from "./pollvoting/ScreenThree";
import StatusView from './StatusView/StatusView';


const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  font-family: "Poppins", sans-serif;
  border: none;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  min-height: 50px;

  &:hover {
    background: linear-gradient(to left,#7579ff,#b224ef);
  }

  &:focus {
    color: #fff;
    border-radius: 0px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: black;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem; 
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 0px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function UnstyledTabsCustomized() {
    return (
        <TabsUnstyled defaultValue={0}>
            <TabsList>
                <Tab>Pdf</Tab>
                <Tab>Video</Tab>
                <Tab>Poll</Tab>
                <Tab>Alert & News</Tab>

            </TabsList>
            <TabPanel value={0}> <ScreenOne/></TabPanel>
            <TabPanel value={1}><ScreenTwo/></TabPanel>
            <TabPanel value={2}><ScreenThree/></TabPanel>
            <TabPanel value={3}><StatusView/></TabPanel>
        </TabsUnstyled>
    );
}
