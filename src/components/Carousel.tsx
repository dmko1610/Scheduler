import * as React from 'react'
import { Carousel }  from 'react-responsive-carousel'

export default class BodyCarousel extends React.Component {
    public render() {
        return (
            <Carousel showThumbs={false} >
                <div>
                    <p className="legend">Legend 1</p>
                </div>
                <div>                
                    <p className="legend">Legend 2</p>
                </div>
                <div>                
                    <p className="legend">Legend 3</p>
                </div>
                <div>                
                    <p className="legend">Legend 4</p>
                </div>
                <div>                
                    <p className="legend">Legend 5</p>
                </div>
                <div>                
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        )
    }
}