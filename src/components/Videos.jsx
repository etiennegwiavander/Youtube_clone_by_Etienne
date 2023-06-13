import { Stack, Box} from '@mui/material'
import { useState } from 'react'
import { VideoCard, ChannelCard} from './'
import Skeleton from '@mui/material/Skeleton'



const Videos = ({ videos, direction}) => {
    // console.log(videos)
    const [isLoading, setIsLoading] = useState(true)

    const n = 9

     //  this is the area that will carry the skeleton loading
    if(!videos?.length) return(
        <Stack direction='row' sx={{ xs: {direction: 'column', ml: '70px' }}} flexWrap='wrap' gap={2}> 

            {[...Array(n)].map((e, i) =>
                <Stack>
                    <Skeleton max={6} variant='rectangle' sx={{ backgroundColor: 'silver', width: '300px', height:'200px'}}  animation='wave' />
                    <Skeleton  sx={{ backgroundColor: 'silver'}}  animation='wave' />
                    <Skeleton  sx={{backgroundColor: 'silver' }}  animation='wave' />
                </Stack> 
            )}

        </Stack>
    )

    return(
        <Stack direction= { direction || 'row' } flexWrap= 'wrap' justifyContent= 'start' gap={2}>
           {videos.map((item, idx)=>(
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}

                </Box>

           ))}
        </Stack>
    )
}

export default Videos