import { connect } from 'react-redux'
import UserWidgetView from '../components/UserWidgetView'

const mapStateToProps = (state) => {
  return {
    username: state.user.name,
    location: state.user.location,
    weather: state.user.weather
  }
}

export default connect(mapStateToProps)(UserWidgetView)
