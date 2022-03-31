
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About/About';
import Friends from './Components/Friends/Friends';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import FriendDetail from './Components/CustomLink/FriendDetail/FriendDetail';
import Posts from './Components/Posts/Posts';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/friends" element={<Friends></Friends>} />
        <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>}></Route>
        <Route path='/posts' element={<Posts></Posts>}>
          <Route path=':postId' element={<PostDetail/>} /> 
        </Route>
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
