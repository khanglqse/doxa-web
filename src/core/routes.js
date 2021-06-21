import UserContainer from '../containers/user-container'
import LoginContainer from '../containers/login-container'
import RegisterContainer from '../containers/register-container'
import HomeContainer from '../containers/home-container'

const Routes = [
    {
        path: '/',
        component: HomeContainer
    },
    {
        path: '/home',
        component: HomeContainer
    },
    {
        path: '/login',
        component: LoginContainer
    },
    {
        path: '/register',
        component: RegisterContainer
    },
    {
        path: '/profile',
        component: UserContainer
    },
]
export default Routes

