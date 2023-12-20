import {externalValue} from './temp-data.js';

export function TempBody() {
  return (
    <div>
      <h1>This is the temp body</h1>
      <p>This is some external data: {externalValue.value}</p>
    </div>
  )
}
