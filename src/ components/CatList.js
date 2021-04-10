import React, { Component } from 'react';
import CatCard from './CatCard';

class CatList extends Component {
    render() {
        const { cats } = this.props;

        return (
            <ul>
                {cats.map(cat =>
                    <li key={cat.id}>
                        <CatCard
                            cat={cat}
                        ></CatCard>
                    </li>
                )}
            </ul>
        )
    }
}

export default CatList;