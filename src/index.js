import './index.css';
import _ from 'lodash';
// import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
// import Page from './components/pagination/page';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
        };

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
                    videos: data[1]
                });
            }).then(() => {
            fetch(proxyUrl + targetUrl_2)
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState(prevState => ({
                        videos: [...prevState.videos, ...responseData[1]]
                    }))
                })
        }).then(() => {
            fetch(proxyUrl + targetUrl_3)
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState(prevState => ({
                        videos: [...prevState.videos, ...responseData[1]]
                    }))
                })
        }).then(() => {
            fetch(proxyUrl + targetUrl_4)
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState(prevState => ({
                        videos: [...prevState.videos, ...responseData[1]]
                    }))
                })
        }).then(() => {
            fetch(proxyUrl + targetUrl_5)
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState(prevState => ({
                        videos: [...prevState.videos, ...responseData[1]]
                    }))
                })
        })



    }

    render() {
        const querySearch = _.debounce((term) => {
            this.querySearch(term)
        }, 400);

        return (
            <div>
                <SearchBar onSearchTermChange={querySearch}/>
                <VideoDetail video={this.state.videos}/>

                {/*<Page />*/}


            </div>
        );
    }
}
;


ReactDOM
    .render(
        <App />,
        document
            .getElementById(
                'root'
            ))
;
registerServiceWorker();
