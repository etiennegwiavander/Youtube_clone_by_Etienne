import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography, Box, Stack } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Videos } from './'
import { apiFetch } from "../utils/ApiFetch"


const VideoDetail = () => {
  
  const [videoDetial, setVideoDetial] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(()=>{
    apiFetch(`videos?part=snippet,statistics&id=${id}`)
      .then((data)=> setVideoDetial(data.items[0]));

    apiFetch(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data)=> setVideos(data.items))
  }, [id])
  
  //  this is the area that will carry the skeleton loading
  if(!videoDetial?.snippet) return 'Loading...'

  const { snippet:{ title, channelId, channelTitle }, statistics: {viewCount, likeCount}} = videoDetial

  return (
    <Box minHeight='95vh' mt="-8px">
      <Stack direction={{xs: 'column', md: 'row'}} >
        <Box flex={1} >
          <Box  sx={{ width: '100%', position: 'sticky', top: '79px'}} >
            <ReactPlayer 
              
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Box height='15vh' backgroundColor="black" sx={{ opacity: 0.8}}>
              <Typography color="white" variant="h5" sx={{ opacity: 1}} p={2} fontWeight='bold'>
                { title }
              </Typography>
              <Stack direction="row" justifyContent="space-between" sx={{
                color: 'white'}} py={1} px={2}>
              
                <Link to={`/channel/${channelId}`}>
                  <Typography variant={{ sm: 'subtitle1', md: 'h6' }}  color= 'white'  >
                    {channelTitle}
                    <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '10px'}} />
                  </Typography>
                </Link>
                <Stack direction='row' gap='20px'>
                  <Typography variant="body1" sx={{ opacity: 0.8}}>
                    {parseInt(viewCount).toLocaleString( )} Views 
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.8}}>
                    {parseInt(likeCount).toLocaleString( )} Likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
          <Box px={2} py={{md: 1, xs: 5}} justifyContent="center" alignItems="center" >
            <Videos videos={videos} direction="column"/>
          </Box>
      </Stack>
    </Box>

    
  )
}

export default VideoDetail