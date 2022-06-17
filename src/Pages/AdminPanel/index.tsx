import "./style.scss";
// components
import Sidebar from "./Components/Sidebar";
// hooks
import { useSelector } from "react-redux";

// redux info
import {
  rootListType,
  authInfoReducerType,
} from "../../ReduxManager/ReduxMain";
import { useNavigate } from "react-router-dom";
export default function AdminPanel() {
  const authInfo: authInfoReducerType = useSelector(
    (s: rootListType) => s.authInfoReducer
  );
  const nav = useNavigate();
  return (
    <>
      <section className="main-area">
        <Sidebar authInfo={authInfo} />
      </section>
      {/* {authInfo.isAdmin ? (
        <section className="main-area">
          <Sidebar authInfo={authInfo} />
        </section>
      ) : (
        nav("/Admin/Login")
      )} */}
    </>
  );
}
