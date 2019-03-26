import React, { Component } from 'react';

export class SearchButton extends Component {
    render() {
        return (
        
            <div className="search">
                <form>
                <label>
                    <input type="text" placeholder="Search"/>
                </label>
                <button className="srch-btn" input="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchButton;