import React, {Component} from 'react';

class Posts extends Component {

    render() {
        return (
            <div>
                <h3>{this.props.data.id}</h3>
                <h4>{this.props.data.title}</h4>
            </div>
        );
    }
}

export default Posts;