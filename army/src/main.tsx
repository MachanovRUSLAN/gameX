
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/router.tsx'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.tsx'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>

        <RouterProvider router={router}/>
    </Provider>
)
