import React from 'react';
import Modal from "./leftModalRender";
import Events from "./leftModalEvent";

export default class Modals extends Event {
    render(){  
        return (Modal.call(this,this.props,this.state))
    }
}
