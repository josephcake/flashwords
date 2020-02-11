import React , {Component} from 'react'

class TestPathContainer extends Component {
    render(){
        return(
            <div className={"container-fluid test-path-container"}>
                <div className={"ul-container"}>
                    <ul className={"list-group"}>
                        <li className={"list-group-item"}>GRE</li>
                        <li className={"list-group-item"}>SAT</li>
                        <li className={"list-group-item"}>Biology</li>
                        <li className={"list-group-item"}>Chemistry</li>
                        <li className={"list-group-item disabled"}>Physic</li>
                        <li className={"list-group-item"}>Botany</li>
                        <li className={"list-group-item"}>Zoology</li>
                        <li className={"list-group-item"}>Microbiology</li>
                        <li className={"list-group-item"}>OrganicChemistry</li>
                        <li className={"list-group-item"}>Biochemistry</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TestPathContainer