import React, { useState } from 'react'
import useRepositories from '../hooks/useRepositories'
import RepositoryListContainer from './RepositoryListContainer'

const RepositoryList = () => {
    const [order, setOrder] = useState()
    
    const { repositories } = useRepositories(order)

    const handleSetOrder = (order) => {
        setOrder(order)
    }

    return (
        <RepositoryListContainer repositories={repositories} setOrder={handleSetOrder} />
    )
}

export default RepositoryList