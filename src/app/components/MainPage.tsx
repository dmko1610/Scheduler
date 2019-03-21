import * as React from 'react';
import {MainPageHeader} from '@components/headers/MainPageHeader';

class MainPageComponent extends React.Component {
    public render() {
        return (
            <div className="container">
                <MainPageHeader/>
            </div>
        );
    }
}

export const MainPage = MainPageComponent;
