import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, views }) => {
    return (
        <div className="item item-article">
            <h3><a href="#">{ title }</a></h3>
            <p className="views">Прочтений: { views }</p>
        </div>
    );
};

Article.propTypes = {
    props: PropTypes.shape({
        title: PropTypes.string.isRequired,
        views: PropTypes.string.isRequired
    })
};

export default Article;

