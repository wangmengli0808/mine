import RouterLogin from './Login/Login'
import RouterHome from './Home/Home'
import RouterList from './List/List'
import RouterDetail from './Detail/Detail'

const allRoutes = RouterLogin.concat(
  RouterHome,
  RouterList,
  RouterDetail
);

export default allRoutes;
