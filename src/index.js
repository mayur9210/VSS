import './index.css';
import registerServiceWorker from './registerServiceWorker';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/Search_Bar';
import SearchResult from './components/Search_Result';
import Pagination from './components/Pagination';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            pageOfItems: []
        };

        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({pageOfItems: pageOfItems});
    }

    addSearch = (searchinfo) => {
        this.setState({results: searchinfo});
    };

    render() {
        return (
            <div className="container">
                    <SearchBar onSubmit={this.addSearch}/>
                    <SearchResult result={this.state.pageOfItems}/>
                    <Pagination items={this.state.results} onChangePage={this.onChangePage}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
