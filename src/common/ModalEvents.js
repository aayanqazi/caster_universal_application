import React , {Component} from 'react';


class Modals extends Component {
    constructor(props) {
        super(props)
        this.state = { shift: "wirtschafts-woche" ,value: "wirtschafts-woche"};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event, index, value) => this.setState({value});
}
export default Modals;