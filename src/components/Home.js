import React, {useState, useEffect, useRef}  from 'react';
import SearchBar from './SearchBar'
import DocumentList from './DocumentList'
import styled from 'styled-components';
import DocumentView from './DocumentView';


export const Content = styled.div`
background: yellow;
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;

#top {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 50%;
    background-color:#000000;
    text-align:center;
}

#bottom-left {
    position: absolute;
    top: 50%;
    right: 50%;
    left: 0;
    bottom: 0;
    background-color:#000000;
    text-align:center;
    color:#FFFFFF;
}

#bottom-right {
    position: absolute;
    top: 50%;
    right: 0;
    left: 50%;
    bottom: 0;
    background-color:#000000;
    text-align:center;
    color:#FFFFFF;
}
`;


const Home = () => {
    const [documents, setDocuments] = useState([]);
    const [selectedDocument, setSelectedDocument] = useState('');

    function handleSelectedListItem(text){
        setSelectedDocument(text)
    }

    function handleCallback(childData){
        setDocuments(childData)
    }
    return (
        <Content>
            <div id="top">
                <SearchBar parentCallback = {handleCallback} />
            </div>
            <div id="bottom-left">
                <DocumentList data={documents} parentCallback = {handleSelectedListItem}/>
            </div>
            <div id="bottom-right">
            <DocumentView selectedDocument={selectedDocument}/>

            </div>
        </Content>

    )
}

export default Home;