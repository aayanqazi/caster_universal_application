import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';
import {Constants} from 'expo';
import {Spinners} from "../Components/"
import NewsList from "../Container/NewsList"

export default function HomeRender(){
// //   componentWillMount(){
// //     this.props.getNews(this.props.newsRequest.source,this.props.newsRequest.catagories)
// //   }
    return (
        <View>
         {this.props.newsRequest.isProcessing ? <Text>Loading ....</Text> : <NewsList />}
          </View>
        
    );
  }
