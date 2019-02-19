import * as React from 'react'
import listAdd from '../images/list-add.svg'
import listEdit from '../images/list-edit.svg'
import listRemove from '../images/list-remove.svg'

class MainPageBody extends React.Component {
    public render() {
        return (
            <div className="main-page__body">
                <h1>PLAN</h1>
                <h3>Add some activities, that you want to do.</h3>
                    {listAdd}
                    {listRemove}
                    {listEdit}
            </div>
        )
    }
}

export default MainPageBody
