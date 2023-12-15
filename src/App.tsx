import {useState} from 'react';

import * as AppUI from './AppUI';

import './App.css';

export function App() {
  let [topAlertIsHidden, setTopAlertIsHidden] = useState(false);
  let [topMenuIsHidden, setTopMenuIsHidden] = useState(false);
  let [topInfoIsHidden, setTopInfoIsHidden] = useState(false);
  let [bottomAlertIsHidden, setBottomAlertIsHidden] = useState(false);
  let [bottomMenuIsHidden, setBottomMenuIsHidden] = useState(false);
  let [bottomInfoIsHidden, setBottomInfoIsHidden] = useState(false);
  let [leftMenuIsHidden, setLeftMenuIsHidden] = useState(false);
  let [leftInfoIsHidden, setLeftInfoIsHidden] = useState(false);
  let [rightInfoIsHidden, setRightInfoIsHidden] = useState(false);
  let [rightMenuIsHidden, setRightMenuIsHidden] = useState(false);

  return (
    <AppUI.Wrapper>
      <AppUI.Panel name="top-alert" isHidden={topAlertIsHidden}>
        TOP ALERT
      </AppUI.Panel>
      <AppUI.Panel name="top-menu" isHidden={topMenuIsHidden}>
        TOP MENU
      </AppUI.Panel>
      <AppUI.Panel name="top-info" isHidden={topInfoIsHidden}>
        TOP INFO
      </AppUI.Panel>
      <AppUI.Panel name="bottom-info" isHidden={bottomInfoIsHidden}>
        BOTTOM INFO
      </AppUI.Panel>
      <AppUI.Panel name="bottom-menu" isHidden={bottomMenuIsHidden}>
        BOTTOM MENU
      </AppUI.Panel>
      <AppUI.Panel name="bottom-alert" isHidden={bottomAlertIsHidden}>
        BOTTOM ALERT
      </AppUI.Panel>
      <AppUI.Panel name="left-menu" isHidden={leftMenuIsHidden}>
        LEFT MENU
      </AppUI.Panel>
      <AppUI.Panel name="left-info" isHidden={leftInfoIsHidden}>
        LEFT INFO
      </AppUI.Panel>
      <AppUI.Panel name="right-info" isHidden={rightInfoIsHidden}>
        RIGHT INFO
      </AppUI.Panel>
      <AppUI.Panel name="right-menu" isHidden={rightMenuIsHidden}>
        RIGHT MENU
      </AppUI.Panel>
      <AppUI.Panel name="body">
        <button onClick={() => setTopAlertIsHidden(!topAlertIsHidden)}>Toggle Top Alert</button>
        <button onClick={() => setTopMenuIsHidden(!topMenuIsHidden)}>Toggle Top Menu</button>
        <button onClick={() => setTopInfoIsHidden(!topInfoIsHidden)}>Toggle Top Info</button>
        <button onClick={() => setLeftMenuIsHidden(!leftMenuIsHidden)}>Toggle Left Menu</button>
        <button onClick={() => setLeftInfoIsHidden(!leftInfoIsHidden)}>Toggle Left Info</button>
        <button onClick={() => setRightInfoIsHidden(!rightInfoIsHidden)}>Toggle Right Info</button>
        <button onClick={() => setRightMenuIsHidden(!rightMenuIsHidden)}>Toggle Right Menu</button>
        <button onClick={() => setBottomInfoIsHidden(!bottomInfoIsHidden)}>Toggle Bottom Info</button>
        <button onClick={() => setBottomMenuIsHidden(!bottomMenuIsHidden)}>Toggle Bottom Menu</button>
        <button onClick={() => setBottomAlertIsHidden(!bottomAlertIsHidden)}>Toggle Bottom Alert</button>
      </AppUI.Panel>
    </AppUI.Wrapper>
  );
}
