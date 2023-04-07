import {useState, useEffect} from 'react'
import { Box, Stack, Typography} from '@mui/material'
import {Sidebar, Videos} from './'
import { APIFetch } from '../utils/ApiFetch'



const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('new')

  useEffect( () => {
    APIFetch(`search?part=snippet&q=${selectedCategory}`)
  }, [selectedCategory]);


  return (
    <Stack sx={{ flexDirection: {sx: "column", md: "row"}}}>
       <Box sx={{ height: { sx: 'auto', md: '93vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
        
        <Sidebar
          selectedCategory ={selectedCategory}
          setSelectedCategory ={selectedCategory}
        />

        <Typography className='copyright'
          variant='body2'
          sx={{ mt:1.5, color: '#fff' }}
        >
          Copyright © 2023 Youtube_Clone_By_Etienne
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2} sx= {{
            color: 'white',
            mx:'20px'
          }}
        >
          {selectedCategory} <span style={{ color: '#F31503'}}> Videos </span>
        </Typography>

        <Videos Videos={[  ]}/>

      </Box>

    </Stack>
   
  )
}

export default Feed