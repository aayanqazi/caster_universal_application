import React from 'react';
import NewsDetail from '../Components/NewsDetail';


export default class NewsEvents extends React.Component {
    renderNews() {
        return this.props.newsRequest.isError ? <Text>ERROR!!!!</Text> : this.props.newsRequest.news.articles.map(arr => <NewsDetail key={arr.title} section={true} data={arr} />)
    }
    renderSource() {
        return this.props.newsRequest.isError ? <Text>ERROR!!!!</Text> : this.props.newsRequest.news.sources.map(arr => <NewsDetail key={arr.name} section={false} data={arr} />)
    }
}