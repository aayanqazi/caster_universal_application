import React from 'react';
import Store from '../Store/index'
import {connect} from 'react-redux';
import App from "../common/Home";

import newsAction from '../Store/Action/Actions'

function mapStateToProps(state) {
    return {
        newsRequest: state.newsReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getNews: (data) => dispatch(newsAction.getNews(data)),
        Cancell: () => dispatch(newsAction.cancelledRequest())
    };
}



export default connect(mapStateToProps,mapDispatchToProps)(App);