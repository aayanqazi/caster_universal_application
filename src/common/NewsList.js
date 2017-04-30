import React from 'react';
import NewsList from "./NewsListRender";
import Events from "./newsEvents"

export default class NewsRender extends Events {
    render(){
        return (NewsList.call(this,this.props,this.state))
    }
}