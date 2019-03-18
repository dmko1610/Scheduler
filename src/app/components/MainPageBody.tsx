import * as React from 'react';
import listAdd from '../../assets/images/list_add.svg';
import listEdit from '../../assets/images/list_edit.svg';
import listRemove from '../../assets/images/list_remove.svg';
import '../../assets/styles/MainPageBody.less';

// import BodyCarousel from './Carousel'

class MainPageBody extends React.Component {
    public render() {
        return (
            <ul className="main-page__body">
                <li className="body__plan">
                    <h1>PLAN</h1>
                    <h3>Add some activities, that you want to do.</h3>
                    <img src={listAdd} alt="add" width="150px"/>
                </li>
                <li className="body_execute">
                    <h1>EXECUTE</h1>
                    <h3>Do some activities, that you added in your schedule.</h3>
                    <img src={listRemove} alt="add" width="150px"/>
                </li>
                <li className="body__divide">
                    <h1>DIVIDE</h1>
                    <h3>Divide not finished activities, if you don't have enough time to do them.</h3>
                    <img src={listEdit} alt="add" width="150px"/>
                </li>
            </ul>
        );
    }
}

export default MainPageBody;
