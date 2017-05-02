import React from 'react';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const NewsDetail = (props) => {
    console.log("NEWS DETAIL KI PROPERTIES HY")
    return (<div style={{ display: 'inline-block', marginBottom: "50px" }}>
        {props.section ? <Paper style={style} zDepth={5}><Card>
            <CardHeader
                style={{ height: "90px" }}
                title={props.data.title}
                subtitle={"By " + props.data.author}
                avatar={props.data.urlToImage}
            />
            <CardMedia
                overlay={<CardTitle title={props.data.title} subtitle={props.data.author} />}
            >
                <img style={{ height: "300px" }} src={props.data.urlToImage} />
            </CardMedia>
            <CardActions>
                <a href={props.data.url} target="_blank">
                    <FlatButton label="Detail" />
                </a>
            </CardActions>
        </Card></Paper> : <Paper style={style} zDepth={5}><Card>
            <CardHeader
                title={props.data.description}
                subtitle={"Source: " + props.data.name}
            />
            <CardActions>
                <a href={props.data.url} target="_blank">
                    <FlatButton label="Detail" />
                </a>
            </CardActions>
        </Card></Paper>}
    </div>)
}
const style = {
    width: 500,
    margin: 20,
    textAlign: 'left',
    display: 'inline-block',
};
export default NewsDetail;