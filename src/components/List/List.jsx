import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import New from './New/New';
import Popular from './Popular/Popular';
import Video from './Video/Video';
import Article from './Article/Article';
import withWrapper from '../withWrapper/withWrapper';
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

        const Wrapper = withWrapper(item);

        return <Wrapper>{ itemType }</Wrapper>
    });
};

List.propTypes = {
    props: PropTypes.shape({
        list: PropTypes.array.isRequired
    })
};

export default List;

