import React from 'react';
import Store from '../Store/index'
import NewsList from "../common/NewsList"
import {connect} from 'react-redux';

import CounterAction from '../Store/Action/Actions'

function mapStateToProps(state) {
    return {
        newsRequest: state.newsReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getNews: (data) => dispatch(CounterAction.getNews(data))
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(NewsList);