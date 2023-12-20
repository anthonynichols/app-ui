import {Panel} from './AppUI.js';
import {TempBody} from './temp-body.js';
import {TempLeftMenu} from './temp-left-menu.js';
import {uiState} from './ui-state.js';

function PanelButtons() {
  return (
    <>
      <button onClick={uiState.topAlert.toggleHidden}>Toggle Top Alert</button>
      <button onClick={uiState.topMenu.toggleHidden}>Toggle Top Menu</button>
      <button onClick={uiState.topInfo.toggleHidden}>Toggle Top Info</button>
      <button onClick={uiState.leftMenu.toggleHidden}>Toggle Left Menu</button>
      <button onClick={uiState.leftInfo.toggleHidden}>Toggle Left Info</button>
      <button onClick={uiState.rightInfo.toggleHidden}>Toggle Right Info</button>
      <button onClick={uiState.rightMenu.toggleHidden}>Toggle Right Menu</button>
      <button onClick={uiState.bottomInfo.toggleHidden}>Toggle Bottom Info</button>
      <button onClick={uiState.bottomMenu.toggleHidden}>Toggle Bottom Menu</button>
      <button onClick={uiState.bottomAlert.toggleHidden}>Toggle Bottom Alert</button>
      <button onClick={uiState.rightMenu.toggleMinimized}>Hide Right Menu</button>
    </>
  );
}

export function BodyPanel() {
  return (
    <Panel name="body">
      <div className="main-content">
        <PanelButtons />
        <TempBody />
        {Array.from(Array(100)).map((_thing, index) => <p className="list-thing" key={index}>List item</p>)}
      </div>
    </Panel>
  );
}

export function BottomAlertPanel() {
  return (
    <Panel name="bottom-alert"
      isHidden={uiState.bottomAlert.isHidden.value}
      isMinimized={uiState.bottomAlert.isMinimized.value}
    >
      BOTTOM ALERT
    </Panel>
  );
}

export function BottomInfoPanel() {
  return (
    <Panel name="bottom-info"
      isHidden={uiState.bottomInfo.isHidden.value}
      isMinimized={uiState.bottomInfo.isMinimized.value}
    >
      BOTTOM INFO
    </Panel>
  );
}

export function BottomMenuPanel() {
  return (
    <Panel name="bottom-menu"
      isHidden={uiState.bottomMenu.isHidden.value}
      isMinimized={uiState.bottomMenu.isMinimized.value}
    >
      BOTTOM MENU
    </Panel>
  );
}

export function LeftInfoPanel() {
  return (
    <Panel name="left-info"
      isHidden={uiState.leftInfo.isHidden.value}
      isMinimized={uiState.leftInfo.isMinimized.value}
    >
      LEFT INFO
    </Panel>
  );
}

export function LeftMenuPanel() {
  return (
    <Panel name="left-menu"
      isHidden={uiState.leftMenu.isHidden.value}
      isMinimized={uiState.leftMenu.isMinimized.value}
    >
      <TempLeftMenu />
    </Panel>
  );
}

export function RightInfoPanel() {
  return (
    <Panel name="right-info"
      isHidden={uiState.rightInfo.isHidden.value}
      isMinimized={uiState.rightInfo.isMinimized.value}
    >
      {Array.from(Array(100)).map((_thing, index) => <p className="list-thing" key={index}>List item</p>)}
    </Panel>
  );
}

export function RightMenuPanel() {
  return (
    <Panel name="right-menu"
      isHidden={uiState.rightMenu.isHidden.value}
      isMinimized={uiState.rightMenu.isMinimized.value}
    >
      <div className="right-menu-content">
        {Array.from(Array(10)).map((_thing, index) => <p className="list-thing" key={index}>List item</p>)}
      </div>
    </Panel>
  );
}

export function TopAlertPanel() {
  return (
    <Panel name="top-alert"
      isHidden={uiState.topAlert.isHidden.value}
      isMinimized={uiState.topAlert.isMinimized.value}
    >
      <span className="top-alert-message">This is where top alert messages would go, potentially spanning across the entire app.</span>
      <span className="top-alert-close" onClick={uiState.topAlert.toggleHidden}>X</span>
    </Panel>
  );
}

export function TopInfoPanel() {
  return (
    <Panel name="top-info"
      isHidden={uiState.topInfo.isHidden.value}
      isMinimized={uiState.topInfo.isMinimized.value}
    >
      TOP INFO
    </Panel>
  );
}

export function TopMenuPanel() {
  return (
    <Panel name="top-menu"
      isHidden={uiState.topMenu.isHidden.value}
      isMinimized={uiState.topMenu.isMinimized.value}
    >
      TOP MENU
    </Panel>
  );
}
