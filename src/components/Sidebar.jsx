import { Stack, Box } from '@mui/material'
import { categories } from '../utils/constants'
import React from 'react'

const selectedCategory = 'New'

const Sidebar = () => (
    <Stack direction='row'
    sx={{
        overflow: 'auto',
        height: {sx: 'auto', md: '93%'},
        WebkitFlexDirection: { md: 'column'}
    }}>
        {categories.map((category) =>(
            <button
                className='category-btn'
                style={{
                    background: category.name === selectedCategory && '#FC1503',
                    color: 'white'
                }}
                
                key={ category.name }
            >
                <span
                    style={{ color: category.name === selectedCategory ? 'white': 'red', marginRight: 
                '20px'}}
                >{category.icon}</span>
                <span
                    style={{ opacity: category.name === selectedCategory ?  '1' : '0.8'}}
                >{category.name}</span>
                
            </button>
        ))}
    </Stack>
)

export default Sidebar