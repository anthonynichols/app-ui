import {signal, useSignal} from '@preact/signals-react';

import {externalValue} from './temp-data.js';

let localData1 = signal(0);

export function TempBody() {
  let localData2 = useSignal(0);
  return (
    <div>
      <h1>This is the temp body</h1>
      <p>This is some external data: {externalValue.value}</p>
      <p>This is some local data 1: {localData1.value} <button onClick={() => localData1.value++}>+</button></p>
      <p>This is some local data 2: {localData2.value} <button onClick={() => localData2.value++}>+</button></p>
    </div>
  )
}
