import React from 'react';
import helloWorldNative from './HelloRender.native';

export default function(){
    return helloWorldNative.call(this,this.props,this.state);
}  