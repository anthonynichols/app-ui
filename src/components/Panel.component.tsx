import {clsx} from 'clsx';
import {ReactNode} from 'react';

import './Panel.css';

export interface PanelProps {
    children?: ReactNode;
    isHidden?: boolean;
    isMinimized?: boolean;
    name?: string;
}

export function Panel(props: PanelProps) {
    let className = clsx(
        'AppUI-Panel',
        props.name && `AppUI-Panel--${props.name}`,
        props.isHidden && 'is-hidden',
        props.isMinimized && 'is-minimized',
    );

    return (
        <div className={className}>{props.children}</div>
    );
}