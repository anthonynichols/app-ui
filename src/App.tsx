import * as AppUI from './AppUI.js';
import {
  BodyPanel,
  BottomAlertPanel,
  BottomInfoPanel,
  BottomMenuPanel,
  LeftInfoPanel,
  LeftMenuPanel,
  RightInfoPanel,
  RightMenuPanel,
  TopAlertPanel,
  TopInfoPanel,
  TopMenuPanel,
} from './panels.js';

import './App.css';

export function App() {
  return (
    <AppUI.Wrapper>
      <TopAlertPanel />
      <TopMenuPanel />
      <TopInfoPanel />
      <BottomInfoPanel />
      <BottomMenuPanel />
      <BottomAlertPanel />
      <LeftMenuPanel />
      <LeftInfoPanel />
      <RightInfoPanel />
      <RightMenuPanel />
      <BodyPanel />
    </AppUI.Wrapper>
  );
}
