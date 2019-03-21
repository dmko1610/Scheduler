import * as React from 'react';
import logo from '../../../assets/images/organize.svg';

interface IProps {
}

interface IState {
}

class MainPageHeaderComponent extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <header className="main-page__header">
                <img src={logo} className="main-page__logo" height="50px" alt="logo"/>
                <h2 className="main-page__title">Scheduler v.0.2</h2>
                <h1>PLAN.EXECUTE.DIVIDE</h1>
                <h3>we've developed it. and have made our best. <br/>
                    cuz' we are professionals</h3>
                <button className="main-page__button">JOIN</button>
            </header>
        );
    }
}

export const MainPageHeader = MainPageHeaderComponent;
