import React, { useState } from 'react'
import useRepositories from '../hooks/useRepositories'
import RepositoryListContainer from './RepositoryListContainer'
import { useDebounce } from 'use-debounce'

const RepositoryList = () => {
    const [order, setOrder] = useState({})
    const [search, setSearch] = useState({})
    const [searchQuery] = useDebounce(search, 500)

    const variables = { ...order, ...searchQuery}

    const { repositories } = useRepositories(variables)

    const handleSetOrder = (order) => {
        setOrder(order)
    }

    const handleSetSearch = (searchText) => {
        setSearch({ searchKeyword: searchText })
    }

    return (
        <RepositoryListContainer repositories={repositories} setOrder={handleSetOrder} setSearch={handleSetSearch} />
    )
}

export default RepositoryList