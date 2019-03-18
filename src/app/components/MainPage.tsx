import * as React from 'react';
import MainPageBody from './content/MainPageBody';
import {MainPageHeader} from '@components/headers/MainPageHeader';
import {MainPageFooter} from '@components/footers/MainPageFooter';

class MainPageComponent extends React.Component {
    public render() {
        return (
            <div className="container">
                <MainPageHeader/>
                <MainPageBody/>
                <MainPageFooter/>
            </div>
        );
    }
}

export const MainPage = MainPageComponent;
