import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import MyProfile from './components/MyProfile';
import PostDetails from './components/PostDetails';
import ErrorPage from './components/ErrorPage';


function App() {
  return (
    <>

    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/posts/:id' element={<PostDetails />} />
      <Route path='/new-post' element={<NewPost />} />
      <Route path='/profile' element={<MyProfile />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
    
    </>

  );
}

export default App;
