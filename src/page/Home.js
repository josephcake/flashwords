import React, {Component} from 'react'
import CarouselContainer from '../container/CarouselContainer'
import InfoContainer from '../container/InfoContainer'
import WelcomeContainer from '../container/WelcomeContainer'

class Home extends Component {
    render(){
        return(
            <div>
                <CarouselContainer/>
                <InfoContainer/>
                <WelcomeContainer/>
            </div>
        )
    }
}
export default Home