import { Button } from "antd";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../slice/token";
import "./index.less";

type Props = {};

export default function Home({}: Props) {
  const dispatch: any = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser({}));
    window.location.reload();
  };

  return (
    <div className="main">
      <Button danger type="secondary" onClick={() => handleLogout()}>
        {" "}
        LogOut
      </Button>
    </div>
  );
}
