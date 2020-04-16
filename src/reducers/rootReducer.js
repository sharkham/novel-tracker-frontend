// import manageRestaurants from './manageRestaurant'
// import manageReviews from './manageReview'
import { combineReducers } from 'redux'
import users from './users'
import novels from './novels'
import badges from './badges'
import currentUser from './currentUser'
import loginForm from './loginForm'

const rootReducer = combineReducers({
  users,
  currentUser,
  loginForm,
  novels,
  badges
  // restaurants: manageRestaurants,
  // reviews: manageReviews
})

export default rootReducer;
