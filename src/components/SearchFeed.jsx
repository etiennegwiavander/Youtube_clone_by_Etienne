import {useState, useEffect} from 'react'
import { Box, Typography} from '@mui/material'
import { Videos} from './'
import { apiFetch } from '../utils/ApiFetch'
import { useParams } from 'react-router-dom'



const searchFeed = () => {

  const [videos, setVideos] = useState([ ])
  const { searchTerm } = useParams()

  useEffect( () => {
    apiFetch(`search?part=snippet&q=${searchTerm}`)
    .then((data)=> setVideos(data.items))
  }, [searchTerm]);


  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2} sx= {{
            color: 'white',
            mx:'20px'
          }}
        >
          Search Results for: <span style={{ color: '#F31503'}}> { searchTerm } </span> Videos
        </Typography>

        <Videos videos={ videos } />

      </Box>
   
  )
}

export default searchFeed