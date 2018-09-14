import RouterLogin from './Login/Login'
import RouterHome from './Home/Home'
import RouterList from './List/List'

const allRoutes = RouterLogin.concat(
  RouterHome,
  RouterList
);

export default allRoutes;
