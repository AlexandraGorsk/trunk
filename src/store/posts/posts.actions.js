import * as apiPosts from '../../api/posts';

export const SET_POSTS_REQUEST_STATUS_PENDING =
	'SET_POSTS_REQUEST_STATUS_PENDING';

export const SET_POSTS_REQUEST_STATUS_FAILURE =
	'SET_POSTS_REQUEST_STATUS_FAILURE';

export const SET_POSTS = 'SET_POSTS';

export const SET_POST_REQUEST_STATUS_PENDING =
	'SET_POST_REQUEST_STATUS_PENDING';

export const SET_POST_REQUEST_STATUS_FAILURE =
	'SET_POST_REQUEST_STATUS_FAILURE';

export const SET_POST = 'SET_POST';

export const SET_POST_COMMENTS_REQUEST_STATUS_PENDING =
	'SET_POST_COMMENTS_REQUEST_STATUS_PENDING';

export const SET_POST_COMMENTS_REQUEST_STATUS_FAILURE =
	'SET_POST_COMMENTS_REQUEST_STATUS_FAILURE';

export const SET_POST_COMMENTS = 'SET_POST_COMMENTS';

export const setPostsRequestStatusPending = () => ({
	type: SET_POSTS_REQUEST_STATUS_PENDING,
});

export const setPostsRequestSuccess = (posts) => ({
	type: SET_POSTS,
	payload: posts,
});

export const setPostsRequestStatusFailure = () => ({
	type: SET_POST_REQUEST_STATUS_FAILURE,
});
export const setPostRequestStatusPending = () => ({
	type: SET_POST_REQUEST_STATUS_PENDING,
});

export const setPostRequestSuccess = (post) => ({
	type: SET_POST,
	payload: post,
});

export const setPostRequestStatusFailure = () => ({
	type: SET_POST_COMMENTS_REQUEST_STATUS_FAILURE,
});
export const setPostCommentsRequestStatusPending = () => ({
	type: SET_POST_COMMENTS_REQUEST_STATUS_PENDING,
});

export const setPostCommentsRequestSuccess = (comments) => ({
	type: SET_POST_COMMENTS,
	payload: comments,
});

export const setPostCommentsRequestStatusFailure = () => ({
	type: SET_POST_REQUEST_STATUS_FAILURE,
});

export const getPosts = () => {
	return (dispatch) => {
		dispatch(setPostsRequestStatusPending());

		apiPosts
			.getPosts()
			.then((posts) => dispatch(setPostsRequestSuccess(posts)))
			.catch(() => dispatch(setPostsRequestStatusFailure()));
	};
};
export const getPost = (id) => {
	return (dispatch) => {
		dispatch(setPostRequestStatusPending());

		apiPosts
			.getPost(id)
			.then((posts) => dispatch(setPostRequestSuccess(posts)))
			.catch(() => dispatch(setPostRequestStatusFailure()));
	};
};
export const getComments = (id) => {
	return (dispatch) => {
		dispatch(setPostCommentsRequestStatusPending());

		apiPosts
			.getPostComments(id)
			.then((comments) => dispatch(setPostCommentsRequestSuccess(comments)))
			.catch(() => dispatch(setPostCommentsRequestStatusFailure()));
	};
};
