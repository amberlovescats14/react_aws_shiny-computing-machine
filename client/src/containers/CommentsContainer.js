import Comments from '../components/Comments'
import { connect } from 'react-redux'
import { getComments } from '../redux/Actions'

const mapStateToProps = state => ({
  commentsData: state.commentsData
})

const mapDispatchToProps = dispatch => ({
  getComments: () => dispatch(getComments())
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments)


