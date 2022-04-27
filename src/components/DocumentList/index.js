import React, {useState, useEffect, useRef} from 'react';
import {Wrapper, Content} from './DocumentList.styles';
import DocumentDetails from './../DocumentDetails';

const DocumentList = (props) => {
    const [state, setState] = useState('');

    function handleClick(name) {
        // Send data to the backend via POST
        fetch(`http://127.0.0.1:8000/view-document`, {
          method: 'POST', 
          mode: 'cors', 
          body: JSON.stringify({'document_name': name}),
          headers: {
            'Content-Type': 'application/json',
          }
        }).then((res) => res.json())
        .then((json) => {
            let text = json['document_text']
            props.parentCallback(text);
        })
        
      }
    return (
        <Content>
            <h3>Results: </h3>
            <ul>
                {props.data && props.data.map(item => <li onClick = {() => handleClick(item.document_name)}>{item.document_name}</li>)}
            </ul>
            {!props.data && "No results found"}

        </Content>
    );
};

export default DocumentList;