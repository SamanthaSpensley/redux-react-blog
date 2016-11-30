import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index'
import { Link } from 'react-router';

class PostsIndex extends Component {
  // lifecycle method called automatically whenever component is about to be rendered for the FIRST TIME
  componentWillMount() {
    console.log('this would be a good time to call an action creator to fetch posts');
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={ post.id }>
          <Link to={"posts/" + post.id} >
          <span className="pull-xs-right">{ post.categories }</span>
          <strong>{ post.title }</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          <li>{ this.renderPosts }</li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all}
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsIndex);