import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './search.css';
import { Link } from 'react-router-dom';
import List from './List'
import data from "./ListData.json"
import { BsSearch } from 'react-icons/bs'

function Search(props) {
    const history = useHistory();
    const [input, setInput] = useState("");
    const clickHandler=()=>{
        props.onSearchListener(input)
    }
    return (
        <div className="search-container">

            <div class="input-group">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control" list='input' placeholder='search' onChange={(e)=>{setInput(e.target.value);
                    console.log(e.target.value)}}/>
                    {/* <List/> */}
                    <datalist id="input">
                        {
                            data.map((item) => {
                                return (
                                    <option value={item.text}>{item.text}</option>
                                )
                            })
                        }
                    </datalist>



                </div>
                <button className="btn btn-primary" onClick={clickHandler}>
                    <BsSearch />
                </button>
            </div>
        </div>
    );
}

export default Search;