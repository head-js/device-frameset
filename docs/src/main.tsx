import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import DeviceSelectorPage from './pages/DeviceSelectorPage'
import DeviceEmulatorPage from './pages/DeviceEmulatorPage'
const navItems = [
  { path: '/', label: 'DeviceSelector' },
  { path: '/emulator', label: 'DeviceEmulator' },
]

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ fontFamily: 'sans-serif' }}>
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '12px 24px',
        borderBottom: '1px solid #e0e0e0',
        background: '#fafafa',
      }}
    >
      <strong style={{ marginRight: 16 }}>React Device Frameset</strong>
      {navItems.map((item) => (
        <Link key={item.path} to={item.path} style={{ textDecoration: 'none', color: '#333' }}>
          {item.label}
        </Link>
      ))}
      <a
        href="https://github.com/zheeeng/react-device-frameset"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: 'auto', textDecoration: 'none', color: '#333' }}
      >
        Github ⭐
      </a>
    </header>
    <main style={{ padding: 24 }}>{children}</main>
  </div>
)

const App = () => (
  <HashRouter>
  <Layout>
    <Routes>
      <Route path="/" element={<DeviceSelectorPage />} />
      <Route path="/emulator" element={<DeviceEmulatorPage />} />
    </Routes>
  </Layout>
  </HashRouter>
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
