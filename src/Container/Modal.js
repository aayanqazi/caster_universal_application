
import CounterAction from '../Store/Action/Actions';
import {connect} from 'react-redux';
import Modals from "../common/Modals"

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


export default connect(mapStateToProps,mapDispatchToProps)(Modals)