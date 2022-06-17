import "./style.scss";
// components
import Navbar from "./Components/Navbar";
import { Container } from "react-bootstrap";
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
      {authInfo.isAdmin ? (
        <section className="main-area">
          <Navbar authInfo={authInfo} />
        </section>
      ) : (
        nav("/Admin/Login")
      )}
    </>
  );
}
