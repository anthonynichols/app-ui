import {clsx} from 'clsx';
import {ReactNode} from 'react';

import './Panel.css';

type PanelName =
  | 'top-alert'
  | 'top-menu'
  | 'top-info'
  | 'bottom-alert'
  | 'bottom-menu'
  | 'bottom-info'
  | 'left-menu'
  | 'left-info'
  | 'right-info'
  | 'right-menu'
  | 'body';

export interface PanelProps {
  children?: ReactNode;
  isHidden?: boolean;
  isMinimized?: boolean;
  name?: PanelName;
}

export function Panel(props: PanelProps) {
  let className = clsx(
    'AppUI-Panel',
    props.name && `AppUI-Panel--${props.name}`,
    props.isHidden && 'is-hidden',
    props.isMinimized && 'is-minimized',
  );

  return <div className={className}>{props.children}</div>;
}
