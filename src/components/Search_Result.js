import React from 'react';

const SearchResult = ({result}) =>{
    if(!result) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            {result.map(function(name, index){
                return <div key={ index }>{name}</div>;
            })}
        </div>

    );
};

export default SearchResult;