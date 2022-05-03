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
import {useEffect} from "react";
import darkstyles from '../darkstyles';
import { Checkbox } from '@material-ui/core';
import ToggleSwitch from './ToggleSwitch.css';


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
  
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
  color: white;
  cursor: pointer;
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
    background: linear-gradient(to left,#7579ff, blue);
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
  font-family: "Poppins", sans-serif;
  
`;

const TabsList = styled(TabsListUnstyled)`
  margin-top: 100px;
  min-width: 320px;
  background-color: black;
  border-radius: 0px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export default function UnstyledTabsCustomized() {
    useEffect(() => {
        window.scrollTo(0,100)
    });
    return (
        <TabsUnstyled defaultValue={0}>
            <TabsList>
                <Tab>Pdf</Tab>
                <Tab>Video</Tab>
                <Tab>Poll</Tab>
                <Tab>Alert & News</Tab>
                             
            </TabsList>
            <TabPanel value={0}><ScreenOne/></TabPanel>
            <TabPanel value={1}><ScreenTwo/></TabPanel>
            <TabPanel value={2}><ScreenThree/></TabPanel>
            <TabPanel value={3}><StatusView/></TabPanel>
        </TabsUnstyled>
    );
}
