import {clsx} from 'clsx';
import {type ReactNode} from 'react';

import './Wrapper.css';

export interface WrapperProps {
  className?: string;
  children?: ReactNode;
}

export function Wrapper(props: WrapperProps) {
  let className = clsx('AppUI-Wrapper', props.className);
  return <div className={className}>{props.children}</div>;
}
