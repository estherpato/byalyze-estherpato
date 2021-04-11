import React, { Component } from 'react';
import CatCard from './CatCard';
import '../styles/CatList.css'

class CatList extends Component {
    render() {
        const { cats } = this.props;

        return (
            <ul className="cards-list">
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