import {clsx} from 'clsx';
import {ReactNode} from 'react';

import './Panel.css';

type PanelName =
  | 'body'
  | 'bottom-alert'
  | 'bottom-info'
  | 'bottom-menu'
  | 'left-info'
  | 'left-menu'
  | 'right-info'
  | 'right-menu'
  | 'top-alert'
  | 'top-info'
  | 'top-menu';

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
