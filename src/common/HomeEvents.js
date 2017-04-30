import React from 'react';


export default class HomeEvents extends React.Component{
   constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

   handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

      componentWillMount(){
    this.props.getNews(this.props.newsRequest.source,this.props.newsRequest.catagories)
  }
}