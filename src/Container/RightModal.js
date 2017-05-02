
import CounterAction from '../Store/Action/Actions';
import {connect} from 'react-redux';
import leftModals from "../common/leftModals"

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