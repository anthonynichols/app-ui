import {ReactNode} from 'react';

import './Wrapper.css';

export interface WrapperProps {
  children?: ReactNode;
}

export function Wrapper(props: WrapperProps) {
  return <div className="AppUI-Wrapper">{props.children}</div>;
}
