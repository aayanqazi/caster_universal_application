import React from 'react';
import {Text,ScrollView} from 'react-native';


export default function newsList() {
    return (
        <ScrollView>
            {this.props.newsRequest.catagories?this.renderSource():this.renderNews()}
            </ScrollView>
    )
  }