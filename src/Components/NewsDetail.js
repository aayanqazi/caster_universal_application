import React from 'react';


const NewsDetail = (props) => {
    console.log("NEWS DETAIL KI PROPERTIES HY" )
    return (<div>
    {props.section?"Sports":"Data"}
     </div>)
}

export default NewsDetail;