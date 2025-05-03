import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Landing from './Landing Page/Landing.jsx'
import './output.css'
import App from './App.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'
import Signup from './Signup/Signup.jsx'


// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}
import { ClerkProvider } from '@clerk/clerk-react'
//  creating the router points to the App component
const router = createBrowserRouter([
  {
    element: <App />,
    children:
    [
      
      {
        path: '/dashboard',
        element :<Dashboard/>
      }
    ],
  },
  {
    path: '/',
    element:<Landing/>
  },
  {
    path: '/signup',
    element: <Signup />,
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <RouterProvider router={router} /> 
    </ClerkProvider>
  </StrictMode>,
  
)
