import React, { useState } from 'react';
import './Profile.css';
import Profilepic from "../images/Profilepic.png"

const Profile = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('Spanish');

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <div className="profile-container">
      <div className="left-panel">
        <div className="user-card">

            <img src={Profilepic} alt="Foto de perfil" className= "profile-pic" />

          <div className="user-info">
            <h4>Omweear</h4>
            <p>Administrator</p>
            <p className="email">adminomweear@gmail.com</p>
          </div>
        </div>

        <div className="settings">
          <div className="theme-toggle">
            <p>Theme</p>
            <div className="toggle-options">
              <label>
                <input
                  type="radio"
                  name="theme"
                  checked={theme === 'light'}
                  onChange={() => handleThemeChange('light')}
                />
                Light 
              </label>
              <label>
                <input
                  type="radio"
                  name="theme"
                  checked={theme === 'dark'}
                  onChange={() => handleThemeChange('dark')}
                />
                Black 
              </label>
            </div>
          </div>

          <div className="language-select">
            <p>Language</p>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="Spanish">Spanish</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>
      </div>

      <div className="right-panel">
        <div className="info-grid">
          <div>
            <label>Gender</label>
            <p>Female</p>
          </div>
          <div>
            <label>BirthDay</label>
            <p>16/02/2007</p>
          </div>
          <div>
            <label>Hire date</label>
            <p>17/02/2025</p>
          </div>
          <div>
            <label>Phone Number</label>
            <p>7789-3456</p>
          </div>
          <div>
            <label>DUI</label>
            <p>12134356-7</p>
          </div>
          <div>
            <label>ISSS</label>
            <p>236786738</p>
          </div>
        </div>

        {/*<button className="submit-btn" disabled>
            Guardar cambios
        </button>*/}

      </div>
    </div>
  );
};

export default Profile;