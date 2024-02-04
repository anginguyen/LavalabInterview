import '../css/Nav.css';
import profile_picture from '../img/profile-picture.jpeg'

export default function Nav() {
    return (
        <div className='nav-container'>
            <p className='hive-name'>hive</p>
            <button className='nav-profile-btn' onClick={() => alert("Profile clicked")}><img src={profile_picture} alt='Profile' className='nav-profile-img' /></button>
        </div>
    )
}