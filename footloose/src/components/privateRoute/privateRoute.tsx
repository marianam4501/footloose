import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms/userState";

import { FC } from "react";
import NotFound from "../notFound/notFound";
import Header from "../header/header";
import Footer from "../footer/footer";

interface PrivateProps {
  //children: React.ReactNode;
  allowedRoles: number[];
}

const PrivateRoutes: FC<PrivateProps> = ({ allowedRoles }) => {
  const user = useRecoilValue(userState);

  const auth = { token: user.token, role: user.role };

  return auth.token ? (
    allowedRoles.includes(Number(auth.role)) ? (
      <Outlet />
    ) : (
      <>
        <Header />
        <NotFound></NotFound>
        <Footer>
          <></>
        </Footer>
      </>
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
