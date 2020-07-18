import React from 'react'

export default function CategoryButton(props) {
    const {handleCategoryButtonClick, category} = props;
    return (
        <button data-testid="button" onClick={() => handleCategoryButtonClick(category)}>{category}</button>
    )
}
