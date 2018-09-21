import RouterLogin from './Login/Login'
import RouterHome from './Home/Home'
import RouterList from './List/List'
import RouterDetail from './Detail/Detail'
import RouterIndex from './Index/Index'
import RouterPhotos from './Photos/Photos'

const allRoutes = RouterLogin.concat(
  RouterHome,
  RouterList,
  RouterDetail,
  RouterIndex,
  RouterPhotos
);

export default allRoutes;
