import {
  FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, RESET_POSTS,
  
  FETCH_POST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE, RESET_ACTIVE_POST,
  
  EDIT_POST, EDIT_POST_SUCCESS, EDIT_POST_FAILURE,
  
  CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE,
  
  DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE,
  
  CREATE_COMMENT, CREATE_COMMENT_SUCCESS, CREATE_COMMENT_FAILURE,
  
  FETCH_COMMENT, FETCH_COMMENT_SUCCESS, FETCH_COMMENT_FAILURE,
  
  
  FETCH_COMMENTS, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE,
  SORT_COMMENTS_SUCCESS, UPDATE_VOTE_SCORE,
  
} from '../actions/posts'

const INITIAL_STATE = {
  postList: {posts: [], error: null, loading: false},
  newPost: {post: null, error: null, loading: false},
  newComment: {comment: null, error: null, loading: false},
  activePost: {post: null, error: null, loading: false},
  activeComment: {comment: null},
  deletedPost: {post: null, error: null, loading: false},
}

export function posts (state = INITIAL_STATE, action) {
  let error
  switch (action.type) {
    
    case FETCH_POSTS:// start fetching posts and set loading = true
      return {...state, postList: {posts: [], error: null, loading: true}}
    
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        postList: {posts: action.payload, error: null, loading: false},
      }
    
    case FETCH_POSTS_FAILURE:
      error = action.payload
      return {...state, postList: {posts: [], error: error, loading: false}}
    
    case RESET_POSTS:
      return {...state, postList: {posts: [], error: null, loading: false}}
    
    case FETCH_POST:
      return {
        ...state,
        activePost: {...state.activePost, loading: true, voting: false},
      }
    
    case FETCH_POST_SUCCESS:
      return {
        ...state, activePost: {
          ...state.activePost, post: action.payload, error: null,
          loading: false,
        },
      }
    case FETCH_POST_FAILURE:
      return {
        ...state, activePost: {
          ...state.activePost, post: null, error: action.payload,
          loading: false,
        },
      }
      
      
  
  
    case CREATE_POST:
      return {
        ...state, newPost: {
          ...state.newPost, error: null, loading: true,
        },
      }
  
    case CREATE_POST_SUCCESS:
      return {
        ...state, newPost: {
          ...state.newPost, post: action.payload, loading: false,
        },
      }
  
    case CREATE_POST_FAILURE:
      return {
        ...state, newPost: {
          ...state.newPost, post: '', error: action.payload,
          loading: false,
        },
      }
      
    case RESET_ACTIVE_POST:
      return {
        ...state, activePost: {
          ...state.activePost, post: null, error: null, loading: false,
        },
      }
  
    case FETCH_COMMENT:
      return {
        ...state,
        activeComment: {...state.activeComment, loading: true, voting: false},
      }
  
    case FETCH_COMMENT_SUCCESS:
      return {
        ...state, activeComment: {
          ...state.activeComment, comment: action.payload, error: null,
          loading: false,
        },
      }
    case FETCH_COMMENT_FAILURE:
      return {
        ...state, activeComment: {
          ...state.activeComment, comment: null, error: action.payload,
          loading: false,
        },
      }
  
  
    // case RESET_COMMENT:
    //   return {
    //     ...state, activeComment: {
    //       ...state.activeComment, comment: null, error: null, loading: false,
    //     },
    //   }
    
    case FETCH_COMMENTS:
      return {
        ...state, activePost: {...state.activePost, loading: true},
      }
    
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state, activePost: {
          ...state.activePost, comments: action.payload, error: null,
          loading: false,
        },
      }
    
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state, activePost: {
          ...state.activePost, comments: null, error: action.payload,
          loading: false,
        },
      }
    
    case CREATE_COMMENT:
      return {
        ...state, newComment: {
          ...state.newComment, error: null, loading: true,
        },
      }
    
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state, newComment: {
          ...state.newComment, comment: action.payload, loading: false,
        },
      }
    
    case CREATE_COMMENT_FAILURE:
      return {
        ...state, newComment: {
          ...state.newComment, comment: '', error: action.payload,
          loading: false,
        },
      }
    
    case UPDATE_VOTE_SCORE:
      return {
        ...state, activePost: {...state.activePost, voting: action.payload},
      }
    
    case EDIT_POST:
      return {
        ...state,
        activePost: {...state.activePost, editing: true, loading: true},
      }
    
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        activePost: {...state.activePost, editing: false, loading: false},
      }
    
    case EDIT_POST_FAILURE:
      return {
        ...state, activePost: {
          ...state.activePost, editing: false, error: action.payload,
          loading: false,
        },
      }
  
    
    default:
      return state
  }
}