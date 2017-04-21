import React,{Component} from "react";

class BaseWork extends Component {
    constructor(props){
        super(props)
        this.increment_Button = this.increment_Button.bind(this);
        this.state={increment:0}
    };
    increment_Button(){
        this.setState({increment:this.state.increment+1})
    }
};
module.exports = BaseWork;