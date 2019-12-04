import React, {Component} from 'react';
import Posts from './Posts';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';
import {store} from '../store';

class PostHolder extends Component {
  state = {
        posts: []
  }

  componentDidMount() {
    console.log('fectching...')
  }

  dostuff = () => {
    console.log('stuff')

  }
  render () {
      console.log(this.state)
    const PostItems = this.state.posts.map(post => (
      <Posts key={post.id} data={post}/>
    ));
    return (
      <div>
        <h1> Posts </h1>
        <button onClick={this.dostuff} style={{backgroundColor:'grey'}}> DO STUFF </button>
        <div>
            {PostItems}
        </div>
      </div>
    );
  }
}

export default connect (null, {fetchPosts})(PostHolder);

