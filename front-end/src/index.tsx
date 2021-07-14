import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VideoList from './components/videos/videoList';
import Video from './components/videos/Video';
import VideoForm from './components/videos/VideoForm';
import Navbar from './components/navbar/Navbar';
import 'bulma/css/bulma.min.css';

ReactDOM.render(
  <Router>
    <Navbar />
    <div className='container is-fluid pt-4'>
      <Switch>
        <Route path='/new-video' component={VideoForm} />
        <Route path='/:id' component={Video} />
        <Route path='/' component={VideoList} exact />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
