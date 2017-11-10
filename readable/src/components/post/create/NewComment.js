import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'

import { CardContent } from 'material-ui/Card'
import { FormControl, FormHelperText } from 'material-ui/Form'

import Avatar from 'material-ui/Avatar'
import Input from 'material-ui/Input'

import { styles } from '../../../styles/post/NewComment'

import { date, username, uuid } from '../../../utils/helper'
import { createNewComment, getComments } from '../../../modules/actions/posts'

class NewComment extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      content: {
        id: '', timestamp: '', body: '', author: '', parentId: '',
      }, date: '', checkValid: false,
    }
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }
  
  componentDidMount = () => {
    this.initForm()
  }
  
  initForm () {
    const postId = uuid()
    const today = Date.now()
    const convertedTimestamp = date(today)
    this.setState({
      ...this.state, content: {
        ...this.state.content,
        author: postId, id: postId,
        timestamp: today,
        parentId: this.props.parentPostID,
        body: '',
      }, date: convertedTimestamp, checkValid: false, isValid: false,
    })
  }
  
  handleBodyChange = (e) => {
    this.setState({content: {...this.state.content, body: e.target.value}})
  }
  
  submitForm = (e) => {
    const {content} = this.state
    
    if (e.charCode === 13) {
      const isValid = this.checkEmptyFields()
      if (isValid) {
        this.props._createNewComment(content, content.parentId).then(()=>
          this.initForm()
        )
      }
    }
  }
  
  checkEmptyFields = () => {
    const {body} = this.state.content
    const isFilled = body ? true : false
    this.setState({checkValid: true})
    if (isFilled) {
      return true
    }
  }
  
  render () {
    const {classes} = this.props
    const {content, checkValid} = this.state
    const body = content.body
    return (
      <CardContent className={classes.root}>
        <Avatar className={classes.avatar}>GU</Avatar>
        <Input
          placeholder="Write a comment..."
          fullWidth="true"
          disableUnderline="true"
          inputProps={{
            'aria-label': 'Description',
          }}
          value={body || ''}
          onKeyPress={this.submitForm}
          onChange={this.handleBodyChange}/>
        {checkValid && !body ? <FormHelperText className={classes.error}>Body is
          empty</FormHelperText> : null}</CardContent>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    parentPostID: state.posts.activePost.post.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _createNewComment: (content, id) => Promise.resolve()
    .then((res) => dispatch(createNewComment(content, id))),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(NewComment))