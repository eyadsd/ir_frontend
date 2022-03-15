import React, {useState, useEffect, useRef} from 'react';
import {Wrapper, Content} from './SearchBar.styles';

const SearchBar = () => {
    const [state, setState] = useState('');


    return (
        <Wrapper>
            <Content>
                <input
                    type='text'
                    placeholder='Search Documents'
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;