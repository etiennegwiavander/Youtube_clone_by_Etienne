import { Link } from "react-router-dom"
import { Card, CardMedia, CardContent, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl, demoChannelTitle, demoVideoTitle, demoVideoUrl, demoChannelUrl } from "../utils/constants"

const  VideoCard = ({ video: { id: { videoId }, snippet }}) => {
  return (
    <Card sx={{ width:{ xm: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: '0'}}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <CardMedia 
                image={ snippet?.thumbnails?.high?.url }
                alt={ snippet?.title }
                sx={{ width: {
                    xs: '100%',
                    sm:'358px',
                    md:'320px'
                }, height: 180}} 
                component= 'div'
            />
        </Link>
        <CardContent sx={{ backgroundColor: '#1e1e1e', height: 106}} >
            <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="white">
                    { snippet?.title.slice(0, 70) || demoVideoTitle.slice(0,70)}
                </Typography>
            </Link>
            <Link to={snippet.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight="bold" color="gray">
                    { snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px'}} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard