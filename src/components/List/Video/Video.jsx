import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ url, views }) => (
    <div className="item item-video">
        <iframe src={ url } frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <p className="views">Просмотров: { views }</p>
    </div>
);

Video.propTypes = {
    props: PropTypes.shape({
        url: PropTypes.string.isRequired,
        views: PropTypes.string.isRequired
    })
};

export default Video;

