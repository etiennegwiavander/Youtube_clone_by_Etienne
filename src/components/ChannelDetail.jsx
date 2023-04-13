import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { Videos, ChannelCard } from './'
import { apiFetch } from "../utils/ApiFetch"


const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams()
  

  console.log(channelDetail)

  useEffect(()=>{
    apiFetch(`channels?part=snippet&id=${id}`)
      .then((data) =>setChannelDetail(data?.items[0]))


    apiFetch(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) =>setVideos(data?.items))

  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: 'radial-gradient(circle, rgba(84,37,51,1) 49%, rgba(75,7,117,1) 100%)',
            zIndex: 10,
            height: '300px'
          }}  
        />
        <ChannelCard channelDetail={channelDetail} marginTop= '-270px'/>
      </Box> 
      <Box display="flex" p="2">
        <Box sx={{ mr: {sm: '120px'}}}/>
          <Videos videos={videos}/>
        
      </Box>
      

    </Box>
  )
}

export default ChannelDetail