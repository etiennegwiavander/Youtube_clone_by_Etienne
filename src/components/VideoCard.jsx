import { Link } from "react-router-dom"
import { Card, CardMedia, CardContent, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl, demoChannelTitle, demoVideoTitle, demoVideoUrl, demoChannelUrl } from "../utils/constants"

const  VideoCard = ({ video: { id: { videoId }, snippet }}) => {
  return (
    <Card>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <CardMedia 
                image={ snippet?.thumbnails?.high?.url }
                alt={ snippet?.title }
                sx={{ width: 358, height: 180}}
                component= 'div'
            />
        </Link>
        <CardContent sx={{ backgroundColor: '#1e1e1e', height: 106}} >

        </CardContent>
    </Card>
  )
}

export default VideoCard