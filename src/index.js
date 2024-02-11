import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import LoginPage from "./pages/LoginPage";
import {
    Friends,
    Groups, Help,
    Map,
    Messenger,
    News,
    OtherServices,
    Profile,
    Shelters, Store,
    Volounteer,
    Wanted, Wiki
} from "./pages/indexPage";

const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <App/>,
        children:[
            {
                path: 'profile',
                element: <Profile/>
            },
            {
                path: 'news',
                element: <News/>
            },
            {
                path: 'map',
                element: <Map/>
            },
            {
                path: 'wanted',
                element: <Wanted/>
            },
            {
                path: 'wiki',
                element: <Wiki/>
            },
            {
                path: 'messenger',
                element: <Messenger/>
            },
            {
                path: 'friends',
                element: <Friends/>
            },
            {
                path: 'groups',
                element: <Groups/>
            },
            {
                path: 'help',
                element: <Help/>
            },
            {
                path: 'store',
                element: <Store/>
            },
            {
                path: 'shelters',
                element: <Shelters/>
            },
            {
                path: 'volounteer',
                element: <Volounteer/>
            },
            {
                path: 'services',
                element: <OtherServices/>
            },

        ]
    },
    {
        path: '/login',
        element: <LoginPage/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />

);

