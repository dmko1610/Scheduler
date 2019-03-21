import React, {FunctionComponent} from 'react';

import {MainPageHeader} from '@components/headers/MainPageHeader';
import {RouteComponentProps} from 'react-router';
import {connect} from 'react-redux';

interface Props extends RouteComponentProps<any> {
}

const DefaultLayoutComponent: FunctionComponent<Props> = props => {
    return (
        <>
            <div className="container">
                <MainPageHeader/>
            </div>
        </>

    );
};

export const DefaultLayout = connect()(DefaultLayoutComponent);
