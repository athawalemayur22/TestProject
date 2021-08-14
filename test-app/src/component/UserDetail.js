import './UserDetail.css';
import Border from './Border';

function UserDetail(props) {
  return (
    
      <Border className="border2">
        <p>name : {props.name}</p>
        <p>age : {props.age}</p>
      </Border>
      
    
  );
}

export default UserDetail;