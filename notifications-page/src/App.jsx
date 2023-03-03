import './App.css';
import { dummy_data } from '../src/data/dummy_data';

function App() {
  return (
    <>
      <div className="navbar">
        <div className="notifications-header">
          <h1>Notifications</h1>
          <div className="new-notifications">
            {dummy_data.filter((notification) => notification.isActive).length}
          </div>
        </div>
        <a>Mark all as read</a>
      </div>
      <div className="notifications-container">
        {dummy_data.map((notification, index) => (
          <div
            className={
              notification.isActive
                ? 'notification-card active'
                : 'notification-card'
            }
            key={index}
          >
            <img src={notification.avatar}></img>
            <div className="notification-description">
              <p>
                <span className="notification-name">{notification.name}</span>
                <span className="notification-description">
                  {notification.activity.description}
                </span>
                {notification.activity.type === 'group' ? (
                  <span className="notification-group">
                    {notification.activity.group_name}
                  </span>
                ) : (
                  <span className="notification-details">
                    {notification.activity.details}
                  </span>
                )}
                {notification.isActive ? <div className="red-dot"></div> : ''}
              </p>
              <p className="notification-date">{notification.date}</p>
              {notification.activity.type === 'message' ? (
                <div className="private-message">
                  {notification.activity.message}
                </div>
              ) : (
                ''
              )}
            </div>
            {notification.activity.image !== undefined ? (
              <img src={notification.activity.image}></img>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
