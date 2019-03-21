import { ComponentType } from 'react';

export interface MenuItem {
    to: string;
    title: string;
    default?: boolean;
    component?: ComponentType;
    hideInMenu?: boolean;
}
