import React, { Component } from 'react';
import '../styles/CatCard.css';

class CatCard extends Component {
    render() {
        const { cat } = this.props;
        const image = cat.image && cat.image.url ? cat.image.url : 'assets/images/cat-default.png';
        const description = cat.description.length > 150 ? cat.description.substring(0, 150) + '...' : cat.description;
        const link = cat.vcahospitals_url ? cat.vcahospitals_url : cat.wikipedia_url;

        return (
            <article className="card">
                <img className="card-image" src={image} alt={cat.name}></img>
                <h2 className="card-title">{cat.name}</h2>
                <p className="card-description">{description}</p>
                <a className="card-link" href={link} target="_blank" rel="noreferrer">Saber más</a>
            </article>
        )
    }
}

export default CatCard;