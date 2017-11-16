import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {
  currentMenu, categories, tabs, setupMenuComplete
} from '../../reducers/menu'
import {posts} from '../../reducers/posts'

export default combineReducers({
  currentMenu,
  categories,
  tabs,
  setupMenuComplete,
  posts,
  routerReducer
})