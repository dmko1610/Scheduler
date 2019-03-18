import React, {FunctionComponent} from 'react';
import MainPageBody from '@components/content/MainPageBody';
import {MenuItem} from '@models';
import {MainPageHeader} from '@components/headers/MainPageHeader';
import {MainPageFooter} from '@components/footers/MainPageFooter';
import {RouteComponentProps} from 'react-router';
import {PageRouter} from '@components/PageRouter';
import {connect} from 'react-redux';

interface Props extends RouteComponentProps<any> {
}

export const menuItems: MenuItem[] = [
    {
        to: '/',
        title: 'Fits',
        component: MainPageBody,
        default: true,
    },
];

const DefaultLayoutComponent: FunctionComponent<Props> = props => {
    return (
        <>
            <div className="container">
                <MainPageHeader/>
                <PageRouter routes={menuItems}/>
                <MainPageFooter/>
            </div>
        </>

    );
};

export const DefaultLayout = connect()(DefaultLayoutComponent);
