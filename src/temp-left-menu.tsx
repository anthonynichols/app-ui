import {externalValue} from './temp-data.js';
import {uiState} from './ui-state.js';

export function TempLeftMenu() {
  return (
    <div>
      <h4>This is the temp left menu</h4>
      <button onClick={uiState.leftInfo.toggleHidden}>Hide Left Info</button>
      <button onClick={() => externalValue.value += 1}>Update external value</button>
    </div>
  )
}
