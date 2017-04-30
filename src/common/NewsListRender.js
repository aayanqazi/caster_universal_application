import React from 'react';

import CircularProgress from 'material-ui/CircularProgress';
export default function HomeRender() {
    console.log(this.props)
    return (
        <div> 
            {this.props.newsRequest.catagories?this.renderSource():this.renderNews()}
        </div>

    );
}
