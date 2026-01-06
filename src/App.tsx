import { GlobalContextProviders } from './components/GlobalContextProviders'
import LandingPage from './pages/LandingPage'
import './styles/global.css'
import './App.css'

import { SmoothScroll } from './components/SmoothScroll'
import { CustomCursor } from './components/CustomCursor'

function App() {
  return (
    <GlobalContextProviders>
      <SmoothScroll>
        <CustomCursor />
        <LandingPage />
      </SmoothScroll>
    </GlobalContextProviders>
  )
}

export default App
