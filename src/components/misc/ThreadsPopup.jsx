import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MultiSelectChecks from '../misc/MultiSelectChecks';
import { updateThreadFilterState } from '../../redux/actions/listProducts';

const ThreadsPopup = () => {
    const dispatch = useDispatch();

    const selected_threads = useSelector( state => state.listProducts.selected_values_thread_filter );

    const disabled_options = useSelector( state => state.listProducts.disabled_options_thread_filter );

    const threads = {
        valid_english: ['NF', 'NC'],
        valid_metrics: ['MM', 'MMF', '0.5', '0.75', '1.0', '1.25', '1.5', '1.75', '2.0']
    };
    
    const handleStatusUpdateThreads = (e) => {
        dispatch( updateThreadFilterState(e.target.value) );
    }

    return (
        <MultiSelectChecks
            value={ selected_threads }
            heading="Roscas"
            options={ [ ...threads.valid_english, ...threads.valid_metrics ] }
            disabled_options={ disabled_options }
            handlerChangeEvent={ handleStatusUpdateThreads }
            />
    )
}

export default ThreadsPopup;