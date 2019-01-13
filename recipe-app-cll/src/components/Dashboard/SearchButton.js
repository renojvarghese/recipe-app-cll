import React, { Component } from 'react';

export class SearchButton extends Component {
    render() {
        return (
        
            <div class="search">
                <form>
                <label>
                    <input type="text" placeholder="Search"/>
                </label>
                <button class="srch-btn" input="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchButton;