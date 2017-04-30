import React from 'react';
import Home from "./HomeRender";
import Events from "./HomeEvents"
import NewsList from "../Container/NewsList";
export default class HomeRender extends Events {
    render(){
        return (Home.call(this,this.props,this.state))
    }
}