import { 
  Home, 
  PieChart, 
  Users, 
  Settings, 
  Bell, 
  Search, 
  Plus,
  ChevronDown,
  Menu
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../../styles/components/previews/Dashboard.css';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 1000 },
];

export function Dashboard() {
  return (
    <div className="dashboard-preview">
      {/* Mobile Header */}
      <header className="mobile-header">
        <button className="menu-button">
          <Menu size={24} />
        </button>
        <h1>Dashboard</h1>
        <button className="notification-button">
          <Bell size={24} />
        </button>
      </header>

      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <div className="dashboard-title">Dashboard</div>
        <nav>
          <ul>
            <li className="active">
              <Home size={20} />
              <span>Overview</span>
            </li>
            <li>
              <PieChart size={20} />
              <span>Analytics</span>
            </li>
            <li>
              <Users size={20} />
              <span>Users</span>
            </li>
            <li>
              <Settings size={20} />
              <span>Settings</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="content">
        {/* Desktop Header */}
        <div className="desktop-header">
          <div className="search-bar">
            <Search size={20} />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="user-profile">
            <div className="avatar"></div>
            <span>John Doe</span>
            <ChevronDown size={16} />
          </div>
        </div>

        <div className="main-content-wrapper">
          {/* Dashboard Cards */}
          <div className="cards-container">
            <div className="card">
              <h3>Total Revenue</h3>
              <p>$12,345</p>
              <div className="card-icon">
                <PieChart size={24} />
              </div>
            </div>
            <div className="card">
              <h3>New Users</h3>
              <p>245</p>
              <div className="card-icon">
                <Users size={24} />
              </div>
            </div>
            <div className="card">
              <h3>Pending Tasks</h3>
              <p>12</p>
              <div className="card-icon">
                <Settings size={24} />
              </div>
            </div>
          </div>

          {/* Data Visualization Section */}
          <div className="data-visualization-section">
            <div className="chart-section">
              <h2>Revenue Overview</h2>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--secondary-color)" />
                    <XAxis 
                      dataKey="name" 
                      stroke="var(--foreground-color)"
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      stroke="var(--foreground-color)"
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'var(--background-color)',
                        borderColor: 'var(--secondary-color)',
                        borderRadius: '8px',
                        color: 'var(--foreground-color)'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="var(--primary-color)" 
                      strokeWidth={2}
                      dot={{ fill: 'var(--primary-color)' }}
                      activeDot={{ r: 6, fill: 'var(--accent-color)' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="activity-section">
              <div className="section-header">
                <h2>Recent Activity</h2>
                <button className="primary-button">
                  <Plus size={16} />
                  <span className="button-text">Add New</span>
                </button>
              </div>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon">
                    <Users size={16} />
                  </div>
                  <div className="activity-content">
                    <p>New user registered</p>
                    <small>2 minutes ago</small>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">
                    <PieChart size={16} />
                  </div>
                  <div className="activity-content">
                    <p>Monthly report generated</p>
                    <small>1 hour ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}