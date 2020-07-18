import React from 'react'

export default function CategoryButton(props) {
    const {handleCategoryButtonClick, category} = props;
    return (
        <button onClick={() => handleCategoryButtonClick(category)}>{category}</button>
    )
}
