import React from 'react'
import '../semantic/dist/semantic.css'

class PodStatus extends React.Component {

    render(){
        return(
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                            <div className="header">
                                POD 5222478
                            </div>
                            <div className="meta">
                                SAT102
                            </div>
                    </div>
                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic green button">START</div>
                            <div className="ui basic red button">STOP</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PodStatus;