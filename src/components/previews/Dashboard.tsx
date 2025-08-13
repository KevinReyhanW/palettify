'use client';

import './Dashboard.css';

export function Dashboard() {
  const chartData = [30, 60, 45, 80, 65, 90, 70];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="dashboard-title">Analytics Dashboard</div>
        <div className="user-profile">
          <span>Admin User</span>
          <div className="avatar"></div>
        </div>
      </header>

      <aside className="sidebar">
        <nav>
          <div className="nav-item active">📊 Dashboard</div>
          <div className="nav-item">📈 Analytics</div>
          <div className="nav-item">👥 Users</div>
          <div className="nav-item">⚙️ Settings</div>
          <div className="nav-item">📝 Reports</div>
        </nav>
      </aside>

      <main className="main-content">
        <div className="stat-card">
          <div className="stat-title">Total Users</div>
          <div className="stat-value">45.2K</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Revenue</div>
          <div className="stat-value">$86K</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Conversion Rate</div>
          <div className="stat-value">12.3%</div>
        </div>

        <div className="chart-container">
          <h3>Weekly Activity</h3>
          <div className="chart">
            {chartData.map((height, index) => (
              <div
                key={index}
                className="bar"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div className="recent-activity">
          <h3>Recent Activity</h3>
          {[1, 2, 3].map((item) => (
            <div key={item} className="activity-item">
              <div className="activity-icon">📌</div>
              <div>
                <div>Activity {item}</div>
                <small>2 hours ago</small>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
