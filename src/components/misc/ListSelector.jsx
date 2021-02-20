import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText } from '@material-ui/core';

const ListSelector = (props) => {
    const { items, handleSelect, maxHeight } = props;

    return (
        <List role="list" style={{ maxHeight: maxHeight, overflow: 'auto' }}>
            {
                items.map( item => (
                    <ListItem button divider
                        disableGutters={ true }
                        aria-haspopup="true"
                        aria-label={ item.diplay }
                        onClick={ () => handleSelect(item.value) }
                        role="listitem"
                        key={ item.value }
                        >
                        <ListItemText primary={ item.diplay } secondary={ item.value } />
                    </ListItem>
                ))
            }
        </List>
    );
}

ListSelector.protoTypes = {
    items: PropTypes.array.isRequired,
    handleSelect: PropTypes.func.isRequired,
    maxHeight: PropTypes.string,
}

ListSelector.defaultProps = {
    maxHeight: '100%',
}

export default ListSelector;