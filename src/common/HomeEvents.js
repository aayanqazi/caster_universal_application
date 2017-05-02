import React from 'react';


export default class HomeEvents extends React.Component{
   constructor(props) {
    super(props);

    this.state = {
      open: false,
      openNext:false
    };
  }

   handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  leftRequestClose = () => {
    this.setState({
      openNext: false,
    });
  };

      componentWillMount(){
    this.props.getNews(this.props.newsRequest.source,this.props.newsRequest.catagories)
  }
}