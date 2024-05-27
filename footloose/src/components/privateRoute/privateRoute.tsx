import { Navigate, Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userState } from '../../atoms/userState'

const PrivateRoutes = () => {
  const user = useRecoilValue(userState);

  const auth = {'token': user.token, 'role': user.role}
  
  return (
    auth.token ? <Outlet/> : <Navigate to='/login'/>
  )

}

export default PrivateRoutes;