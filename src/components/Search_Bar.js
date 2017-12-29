import React, {Component} from  'react';
import axios from 'axios';

class SearchBar extends Component {
    //
    // state = {term: ''};

    constructor(props){
        super(props);

        this.state = { term: ''};
    }

    componentDidMount() {
        this.setState({
            results: []
        });
    }


    handleSubmit = (event) => {
        event.preventDefault();

        const proxyUrl = 'https://vss.now.sh/';
        const targetUrl_1 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}`;
        const targetUrl_2 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+a`;
        const targetUrl_3 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+b`;
        const targetUrl_4 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+c`;
        const targetUrl_5 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+d`;
        const targetUrl_6 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+e`;
        const targetUrl_7 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+f`;
        const targetUrl_8 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+g`;
        const targetUrl_9 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+h`;
        const targetUrl_10 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+i`;
        const targetUrl_11 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+j`;
        const targetUrl_12 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+k`;
        const targetUrl_13 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+l`;
        const targetUrl_14 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+m`;
        const targetUrl_15 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+n`;
        const targetUrl_16 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+o`;
        const targetUrl_17 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+p`;
        const targetUrl_18 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+q`;
        const targetUrl_19 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+r`;
        const targetUrl_20 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+s`;
        const targetUrl_21 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+t`;
        const targetUrl_22 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+u`;
        const targetUrl_23 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+v`;
        const targetUrl_24 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+w`;
        const targetUrl_25 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+x`;
        const targetUrl_26 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+y`;
        const targetUrl_27 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+z`;
        const targetUrl_28 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+0`;
        const targetUrl_29 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+1`;
        const targetUrl_30 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+2`;
        const targetUrl_31 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+3`;
        const targetUrl_32 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+4`;
        const targetUrl_33 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+5`;
        const targetUrl_34 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+6`;
        const targetUrl_35 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+7`;
        const targetUrl_36 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+8`;
        const targetUrl_37 = `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${this.state.term}+9`;


        axios.get(proxyUrl + targetUrl_1)
            .then(resp => {
                this.props.onSubmit(resp.data[1]);
            }).then(
            axios.get(proxyUrl + targetUrl_2)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                }))

         /*   .then(
            axios.get(proxyUrl + targetUrl_3)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_4)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_5)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_6)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_7)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_8)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_9)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_10)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_11)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_12)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_13)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_14)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_15)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_16)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_17)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_18)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_19)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_20)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_21)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_22)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_23)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_24)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_25)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_26)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_27)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_28)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_29)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_30)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_31)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_32)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_33)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_34)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_35)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_36)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                })).then(
            axios.get(proxyUrl + targetUrl_37)
                .then(resp => {
                    this.props.onSubmit(resp.data[1]);
                }))*/


        /* let _this = this;

         function getStuff(i) {
         console.log(i);
         axios.get(proxyUrl + `https://www.google.com/complete/search?output=search&client=chrome&hl=en&gl=us&q=${_this.state.term}+${i}`)
         .then(resp => {
         _this.props.onSubmit(resp.data[1]);
         })
         .catch(function (error) {
         console.log(error);
         });
         }

         const searchArray = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
         let arrayLength = searchArray.length;
         for (let i = 0; i < arrayLength; i++) {
         getStuff(searchArray[i]);
         console.log(searchArray[i]);
         }
         */
    };
    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           value={this.state.term}
                           onChange={ (event) => this.setState({term: event.target.value})}
                           placeholder="Search"/>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }

    // onInputChange(term) {
    //     this.setState({term});
    //     this.props.onSearchTermChange(term);
    // }

}

export default SearchBar;