import './App.css';
import Profile from './profile/Profile';

function App() {
  return (
    <div className="App">
      <Profile fullName='Mohamed Skib' bio='my cv' profession='emplyee'>
        <img src='https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg' width='200px' height='200px' style={{borderRadius:'35%'}}></img>
      </Profile>
    </div>
  );
}

export default App;
