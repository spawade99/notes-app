import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider } from './contexts/ThemeProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './components/auth/SignUp'
import { LogIn } from './components/auth/Login'
import ErrorPage from './components/ErrorPage'
import { MyNoteCard } from './components/MyNoteCard'


const Main = () => (
  <BrowserRouter basename='/notes-app'>
    <Routes>
      <Route path="/" element={<App />} errorElement={<ErrorPage />} />
      {/* <Route path="/notes-app" element={<App />} /> */}
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/notes" element={<App />} />
      {/* <Route path="*" element={<App />} errorElement={<ErrorPage />} /> 404 page */}
    </Routes>
  </BrowserRouter>
);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <MyNoteCard />
    <Main />

  </ThemeProvider>
  // </React.StrictMode>,
)
