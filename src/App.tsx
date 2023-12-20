import * as AppUI from './AppUI';
import {uiState} from './ui-state';

import './App.css';

uiState.bottomAlert.isHidden.value = true;
uiState.bottomMenu.isHidden.value = true;
uiState.rightInfo.isHidden.value = true;
uiState.rightMenu.isHidden.value = true;
uiState.leftInfo.isHidden.value = true;
uiState.topInfo.isHidden.value = true;

export function App() {
  return (
    <AppUI.Wrapper>
      <AppUI.Panel name="top-alert" isHidden={uiState.topAlert.isHidden.value}>
        <span className="top-alert-message">This is where top alert messages would go, potentially spanning across the entire app.</span>
        <span className="top-alert-close" onClick={uiState.topAlert.toggleHidden}>X</span>
      </AppUI.Panel>
      <AppUI.Panel name="top-menu" isHidden={uiState.topMenu.isHidden.value}>
        TOP MENU
      </AppUI.Panel>
      <AppUI.Panel name="top-info" isHidden={uiState.topInfo.isHidden.value}>
        TOP INFO
      </AppUI.Panel>
      <AppUI.Panel name="bottom-info" isHidden={uiState.bottomInfo.isHidden.value}>
        BOTTOM INFO
      </AppUI.Panel>
      <AppUI.Panel name="bottom-menu" isHidden={uiState.bottomMenu.isHidden.value}>
        BOTTOM MENU
      </AppUI.Panel>
      <AppUI.Panel name="bottom-alert" isHidden={uiState.bottomAlert.isHidden.value}>
        BOTTOM ALERT
      </AppUI.Panel>
      <AppUI.Panel name="left-menu" isHidden={uiState.leftMenu.isHidden.value}>
        LEFT MENU
      </AppUI.Panel>
      <AppUI.Panel name="left-info" isHidden={uiState.leftInfo.isHidden.value}>
        LEFT INFO
      </AppUI.Panel>
      <AppUI.Panel name="right-info" isHidden={uiState.rightInfo.isHidden.value}>
        RIGHT INFO
      </AppUI.Panel>
      <AppUI.Panel name="right-menu" isHidden={uiState.rightMenu.isHidden.value}>
        RIGHT MENU
      </AppUI.Panel>
      <AppUI.Panel name="body">
        <div className="main-content">
          {Array.from(Array(100)).map(() => <ListThing />)}
        </div>
      </AppUI.Panel>
    </AppUI.Wrapper>
  );
}

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
    </>
  );
}

function ListThing() {
  return (
    <p className="list-thing">List item</p>
  )
}
