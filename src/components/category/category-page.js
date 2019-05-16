import React from 'react'

import CategoryForm from './category-form'
import NavLink from '../shared/navlink'
import PageWrapper from '../shared/page-wrapper'
import { TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'

const CategoryPage = (props) => {
    return (
        <PageWrapper searchLabel="categories" {...props}>
            <CategoryLines {...props} />
            <CategoryForm {...props} />
        </PageWrapper>
    )
}

const CategoryLines = ({ categories }) =>
<React.Fragment>
    <TableHead>
        <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">ShortName</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {categories.map(category => (
            <TableRow key={category.id}>
                {category.name}
            </TableRow>
            ), this, 
        )}
    </TableBody>
    </React.Fragment>

export default CategoryPage