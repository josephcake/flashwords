import React, {Component} from 'react'

class CarouselContainer extends Component{
    render(){
        return (
            <div id="slides" className={"carousel"} data-ride={"carousel"}>
                {/*
                <ul className={"carousel-indicators"}>
                    <li data-target={"#slides"} data-slide-to={"0"} className={"active"}></li>
                    
                    <li data-target={"#slides"} data-slide-to={"1"} ></li>
                    <li data-target={"#slides"} data-slide-to={"2"} ></li>
                    
                </ul>
                */}
                <div className={"carousel-inner"}>
                    <div className={"carousel-item active"}>
                        <img alt={"carousel_1"} src={require("../image/view.jpg")}/>
                        <div className={"carousel-caption"}>
                            <h1 className={"display-2"}>Flashwords</h1>
                            <h3>vocabularies for all exams</h3>
                            <button type={"button"} className={"btn btn-outline-light btn-lg"}>ANGEL</button>
                            <button type={"button"} className={"btn btn-primary btn-lg"}>DEMON</button>
                        </div>
                    </div>
                    {/*
                    <div className={"carousel-item"}>
                        <img alt={"carousel_2"} src={require("../image/water-rock.jpg")}/>
                    </div>
                    <div className={"carousel-item"}>
                        <img alt={"carousel_3"} src={require("../image/mountain.jpg")}/>
                    </div>
                    */}
                </div>
            </div>
        )
    }
}
export default CarouselContainer