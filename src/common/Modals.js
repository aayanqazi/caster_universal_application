import React from 'react';
import Modal from "./ModalsRender";
import Events from "./ModalEvents"


export default class Modals extends Events {
    
    render(){
        return (Modal.call(this,this.props,this.state))
    }
}
