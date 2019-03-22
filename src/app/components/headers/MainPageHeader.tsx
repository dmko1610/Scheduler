import * as React from 'react';
import logo from '../../../assets/images/organize.svg';
import {connect} from 'react-redux';
import {Thunks} from '@store/app';
import {getVisibility} from '@store/app/app.selectors';
import {DispatchThunk} from '@store';
import {JoinForm} from '../auth/JoinForm';

interface IProps {
    toggleForm?: any;
    visible: boolean;
}

interface IState {
}

class MainPageHeaderComponent extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    toggleVisibility = () => {
        this.props.toggleForm();
    };

    public render() {
        return (
            <header className="main-page__header">
                <img src={logo} className="main-page__logo" height="50px" alt="logo"/>
                <h2 className="main-page__title">Scheduler v.0.2</h2>
                <h1>PLAN.EXECUTE.DIVIDE</h1>
                <h3>we've developed it. and have made our best. <br/>
                    cuz' we are professionals</h3>
                <button className="main-page__button" onClick={this.toggleVisibility}>JOIN</button>
                {
                    this.props.visible ? <JoinForm/> : null
                }
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        visible: getVisibility(state),
    };
};

const mapDispatchToProps = (dispatch: DispatchThunk) => ({
    toggleForm: () => {
        dispatch(Thunks.toggleVisibility());
    },
});
export const MainPageHeader = connect(mapStateToProps, mapDispatchToProps)(MainPageHeaderComponent);
