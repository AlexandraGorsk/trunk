import React, { useEffect } from 'react';

import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, getComments, getSlice } from '../../store/posts';
import * as Statuses from '../../store/statuses';

const PostDetailWrapper = styled('section')`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	max-width: 800px;
	margin: 8px auto;
	padding: 4px;
	box-sizing: border-box;
`;

const CommentsWrapper = styled('ol')`
	margin: 0px 0px 0px 16px;
	padding: 0px;

	> li {
		border-bottom: 1px solid gray;
		padding: 4px;

		> h5 {
			margin: 0px 0px 8px;
		}

		> span {
			font-size: 12px;
		}

		> p {
			margin: 4px 0px 0px;
		}
	}
`;

const PostDetail = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const { post, postRequestStatus, postComments, postCommentsRequestStatus } =
		useSelector(getSlice);
	useEffect(() => {
		if (params.id) {
			dispatch(getPost(params.id));
			dispatch(getComments(params.id));
		}
	}, [dispatch, params.id]);

	return (
		<PostDetailWrapper>
			{postRequestStatus === Statuses.PENDING && 'loading...'}
			{postRequestStatus === Statuses.FAILURE && 'some error...'}
			{post && (
				<>
					<h1>{post.title}</h1>
					<p>{post.body}</p>
				</>
			)}
			<CommentsWrapper>
				{postComments?.map((comment) => (
					<li key={comment.id}>
						<h5>{comment.name}</h5>
						<span>{comment.email}</span>
						<p>{comment.body}</p>
					</li>
				))}
			</CommentsWrapper>
		</PostDetailWrapper>
	);
};

export default PostDetail;
