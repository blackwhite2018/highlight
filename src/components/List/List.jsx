import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import New from './New/New';
import Popular from './Popular/Popular';
import Video from './Video/Video';
import Article from './Article/Article';
import './css/index.css';

const List = ({ list }) => {
    const listIds = list.reduce((acc, elem) => {
        return [...acc, {
            _id: shortid.generate(),
            ...elem
        }];
    }, []);
    return listIds.map(item => {
        let itemType;

        switch (item.type) {
            case 'video':
                itemType = <Video key={ item.id } {...item} />;
                break;
            case 'article':
                itemType = <Article key={ item.id } {...item} />;
                break;
        }

        if (item.views < 1000) {
            return <New key={ shortid.generate() }>{ itemType }</New>;
        }

        if (item.views >= 1000) {
            return  <Popular key={ shortid.generate() }>{ itemType }</Popular>;
        }
    });
};

List.propTypes = {
    props: PropTypes.shape({
        list: PropTypes.array.isRequired
    })
};

export default List;

