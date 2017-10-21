import './index.css';
import _ from 'lodash';
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

    querySearch(term) {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl_1 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${term}`;
        const targetUrl_2 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=a+${term}`;
        const targetUrl_3 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=b+${term}`;
        const targetUrl_4 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=c+${term}`;
        const targetUrl_5 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=d+${term}`;

        fetch(proxyUrl + targetUrl_1)
            .then(respone => respone.json())
            .then(data => {
                this.setState({
                    results: data[1]
                });
            }).then(() => {
            fetch(proxyUrl + targetUrl_2)
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState(prevState => ({
                        results: [...prevState.results, ...responseData[1]]
                    }))
                })
        }).then(() => {
            fetch(proxyUrl + targetUrl_3)
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState(prevState => ({
                        results: [...prevState.results, ...responseData[1]]
                    }))
                })
        }).then(() => {
            fetch(proxyUrl + targetUrl_4)
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState(prevState => ({
                        results: [...prevState.results, ...responseData[1]]
                    }))
                })
        }).then(() => {
            fetch(proxyUrl + targetUrl_5)
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState(prevState => ({
                        results: [...prevState.results, ...responseData[1]]
                    }))
                })
        })


    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({pageOfItems: pageOfItems});
    }

    render() {
        const querySearch = _.debounce((term) => {
            this.querySearch(term)
        }, 400);


        return (
            <div>
                <div className="text-center">
                    <SearchBar onSearchTermChange={querySearch}/>
                    <SearchResult result={this.state.pageOfItems}/>
                    <Pagination items={this.state.results} onChangePage={this.onChangePage}/>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
