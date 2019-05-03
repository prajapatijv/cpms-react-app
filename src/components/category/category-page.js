import React from 'react'

import CategoryForm from './category-form'
import NavLink from '../shared/navlink'
import PageWrapper from '../shared/page-wrapper'

const CategoryPage = (props) => {
    return (
        <PageWrapper searchLabel="categories" {...props}>
            <CategoryLines {...props}/>
            <CategoryForm {...props} />
        </PageWrapper>
    )
}

const CategoryLines = ({ categories }) => 
    categories.map((category) => 
        <NavLink key={category.id} 
            to={`/categories/${category.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action"
            >{category.name} {category.shortName}
        </NavLink>
    )

export default CategoryPage