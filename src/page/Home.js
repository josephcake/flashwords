import React, {Component} from 'react'
import CarouselContainer from '../container/CarouselContainer'
import InfoContainer from '../container/InfoContainer'
import WelcomeContainer from '../container/WelcomeContainer'
import TechContainer from '../container/TechContainer'
import FixedBackgroundContainer from '../container/FixedBackgroundContainer'
import ExpressionContainer from '../container/ExpressionContainer'
import TeamContainer from '../container/TeamContainer'
import AboutUs from '../container/AboutUs'
import ConnectContainer from '../container/ConnectContainer'
import FooterContainer from '../container/FooterContainer'

class Home extends Component {
    render(){
        return(
            <div>
                <CarouselContainer/>
                <InfoContainer/>
                <WelcomeContainer/>
                <TechContainer/>                
                <FixedBackgroundContainer/>
                <ExpressionContainer/>
                <TeamContainer/>
                <AboutUs/>
                <ConnectContainer/>
                <FooterContainer/>
            </div>
        )
    }
}
export default Home