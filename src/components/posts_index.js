import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index'

class PostsIndex extends Component {
  // lifecycle method called automatically whenever component is about to be rendered for the FIRST TIME
  componentWillMount() {
    console.log('this would be a good time to call an action creator to fetch posts');
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
