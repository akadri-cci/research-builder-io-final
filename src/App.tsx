import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Wallet from './pages/Wallet'
import Card from './pages/Card'
import FinanceChart from './pages/FinanceChart'
import Transactions from './pages/Transactions'
import Contact from './pages/Contact'
import Settings from './pages/Settings'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/wallet" replace />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="card" element={<Card />} />
          <Route path="finance-chart" element={<FinanceChart />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="contact" element={<Contact />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
