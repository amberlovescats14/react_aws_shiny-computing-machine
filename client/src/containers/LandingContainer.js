import Landing from '../components/landing/Landing'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  test: state.test
})

const mapDispatchToPropps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToPropps)(Landing)