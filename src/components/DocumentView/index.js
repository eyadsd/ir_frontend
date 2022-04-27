

import React, {useState, useEffect, useRef} from 'react';
import {Wrapper, Content} from './DocumentView.styles';

const DocumentView = (props) => {
    const [state, setState] = useState('');

    return (
        <Content>
            <div id="wrapper">

            <form id="paper" method="get" action="">

                <h3>Document name: </h3>
                <textarea placeholder="" id="text" name="text" rows="4" value={props.selectedDocument}></textarea>  
                <br/>                
            </form>
</div>
        </Content>
    );
};


export default DocumentView;