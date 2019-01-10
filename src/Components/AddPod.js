import React from 'react';

class AddPod extends React.Component{
    render(){
        return(<button className="ui button" onClick={this.props.onClick}>Add Pod</button>);
    }

}

export default AddPod;