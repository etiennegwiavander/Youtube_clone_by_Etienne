import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import {Navbar, ChannelDetail, Feed, SearchFeed, VideoDetail} from './components';

const App = () => (
  <BrowserRouter>
    <Box sx ={{
      background: 'rgb(2,0,36)',
      background: '-moz-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(90,15,161,0.9893207282913166) 55%, rgba(31,5,55,1) 100%)',
      background: '-webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(90,15,161,0.9893207282913166) 55%, rgba(31,5,55,1) 100%)',
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(90,15,161,0.9893207282913166) 55%, rgba(31,5,55,1) 100%)',
      filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#1f0537",GradientType=1)',
    }}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element = { <Feed/>}/>
        <Route path="/video/:id" element = { <VideoDetail />}/>
        <Route path="/channel/:id" element = { <ChannelDetail/>}/>
        <Route path="/search/:searchTerm" element = { <SearchFeed/>}/>
      
      </Routes>

    </Box>
  </BrowserRouter>
)

export default App;
