// import React from 'react';
// import {Table} from 'reactstrap';
// import { ReactBsTable,TableHeaderColumn,BootstrapTable }  from 'react-bootstrap-table';
// // import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
//
// const SearchResult = ({result}) => {
//     if (!result) {
//         return <div>Loading...</div>;
//     }
//
//     return (
//         <div className="container">
//             <Table hover>
//                 <tr>
//                     <th>#</th>
//                     <th>Keywords</th>
//                 </tr>
//                 {result.map(function (name, index) {
//                     return <tbody>
//                     <tr>
//                         <th scope="row" >{ index + 1 }</th>
//
//                         <td key={ index }>{name}</td>
//                     </tr>
//                     </tbody>;
//                 })}
//             </Table>
//         </div>
//     );
// };
//
// export default SearchResult;


import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import _ from 'lodash';

export default class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            currPage: 1
        };
        // this.options = {
        //     defaultSortName: 'name',  // default sort column name
        //     defaultSortOrder: 'a'  // default sort order
        // };
    }

    render() {

        const resultArray = this.props.result;

        const products = [];

        _.forEach(resultArray, function (value) {
            products.push({
                name: value,
            });
        });
        //
        // const {
        //     currPage
        // } = this.state;

        const selectRowProp = {
            mode: 'checkbox',
            bgColor: '#bcd5ef',
            clickToSelect: true,
            columnWidth: '60px',
        };

        return (
            <div className="container">
                {products.length > 0 ?
                    <BootstrapTable ref='table' data={ products } selectRow={ selectRowProp } pagination={ false }
                                    options={ this.options } version='4' >
                        <TableHeaderColumn dataField='name' isKey={ true } dataSort>Keywords</TableHeaderColumn>
                    </BootstrapTable> : ''
                }
            </div>
        );
    }
}
