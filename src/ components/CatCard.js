import React, { Component } from 'react';

class CatCard extends Component {
    render() {
        const { cat } = this.props;

        return (
            // XML here
            <div>{cat.name}</div>
        )
    }
}

export default CatCard;