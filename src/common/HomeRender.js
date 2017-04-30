import React from 'react';
import NewsList from "../Container/NewsList"
import AppBar from 'material-ui/AppBar';
import RightButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

import Modal from "./ModalsRender";

export default function HomeRender() {
    console.log(this.props)
    return (
        <div>
        <AppBar
                title="NEWS CASTER"
                iconElementRight={<div>
                    <RightButton label="Sources" onTouchTap={(event)=>{ return (event.preventDefault(),this.setState({anchorEl: event.currentTarget,open: true,}))}} style={{ marginRight: 20 }} /><RightButton label="Catagories" />
                </div>}

            />
           
         {this.props.newsRequest.isProcessing ? <CircularProgress size={80} thickness={5} style={{paddingLeft:"450px",paddingTop:"80px"}}/> : <NewsList />}
         {Modal.call(this,this.props,this.state)}

        </div>

    );
}
