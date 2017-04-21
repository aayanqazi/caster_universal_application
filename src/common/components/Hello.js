import Base from "./HelloBase";
import Render from './HelloRender';

export default class Hello extends Base {
    constructor(props){
        super(props);
    }
    render() {
        return Render.call(this,this.props,this.state);
    }
}
