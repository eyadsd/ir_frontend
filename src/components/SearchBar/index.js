import React, {useState,} from 'react';
import { Content} from './SearchBar.styles';


const Algorithms  = {
  BooleanModel: 1,
  VectorSpaceModel: 2,
  ExtendedBoolean: 3
}

const SearchBar = (props) => {
    
    const [searchInput, setSearchInput] = useState("");
    const [data, SetData] = useState(null);
    const [searchAlgorithm, setSearchAlgorithm]  = useState(Algorithms.BooleanModel);

    function handleClick() {
      if (searchAlgorithm == Algorithms.BooleanModel) {

        fetch(`http://127.0.0.1:8000/boolean-search?query=${searchInput}`, {
          method: 'GET', 
          mode: 'cors', 
        }).then((res) => res.json())
        .then((json) => {
            SetData(json);
            props.parentCallback(json.result);
        })
      }
      else if (searchAlgorithm == Algorithms.VectorSpaceModel){
        console.log(searchInput)

        fetch(`http://127.0.0.1:8000/vsm-search?query=${searchInput}`, {
          method: 'GET', 
          mode: 'cors', 
        }).then((res) => res.json())
        .then((json) => {
            SetData(json);
            props.parentCallback(json.result);
        })
      }

      else if (searchAlgorithm == Algorithms.ExtendedBoolean){
        console.log(searchInput)

        fetch(`http://127.0.0.1:8000/extended-boolean-search?query=${searchInput}`, {
          method: 'GET', 
          mode: 'cors', 
        }).then((res) => res.json())
        .then((json) => {
            SetData(json);
            props.parentCallback(json.result);
        })
      }
      }
    function  handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleClick(); 
        }
    }

    return (
            <Content>
                <input onKeyUp={handleKeyPress.bind(this)}
                    type='text'
                    placeholder='Search Documents'
                    onChange={event => setSearchInput(event.currentTarget.value)}
                    value={searchInput}
                />
                <div class="select">
                  <select id="standard-select" onChange={(e) => {setSearchAlgorithm(e.target.value)}}>
                    <option value={Algorithms.BooleanModel}>Boolean Model</option>
                    <option value={Algorithms.VectorSpaceModel}>Vector Space Model</option>
                    <option value={Algorithms.ExtendedBoolean}>Extended Boolean Model</option>

                  </select>
                </div>
                <button onClick={handleClick}>Search</button>
            </Content>    
    );
    
};


export default SearchBar;