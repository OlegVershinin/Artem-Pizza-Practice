import { Card, CardContent, H5, Alert, Button } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";

import s from "./App.module.scss";

import { Icon } from "@mdi/react";
import { mdiAlert } from "@mdi/js";

import { useAuth } from "./AuthContext";

export const Home = () => (
  <div className={s.pages}>
    <Alert type="success">HOME</Alert>
  </div>
);

export const PageAbout = () => (
  <Card loading className={s.pages} width={250}>
    <CardContent>
      <H5 style={{ padding: "6vh 10vh 6vh 10vh" }}>About</H5>
    </CardContent>
  </Card>
);

export const PageArticles = () => (
  <Card loading className={s.pages} width={250}>
    <CardContent>
      <H5 style={{ padding: "6vh 10vh 6vh 10vh" }}>Articles</H5>
    </CardContent>
  </Card>
);

export const PageNotFound = () => (
  <Alert
    rounded
    closable
    type="error"
    border="left"
    visible="true"
    icon={<Icon path={mdiAlert} size={1} />}
  >
    404 Страницы не существует!!!
  </Alert>
);

export const PrivatePage = () => {
  const { logOut } = useAuth();
  return (
    <>
      <Button block onClick={logOut}>
        Log out
      </Button>
      <Card loading className={s.pages} width={250}>
        <CardContent>
          <H5 style={{ padding: "6vh 10vh 6vh 10vh" }}>Private Page</H5>
        </CardContent>
      </Card>
    </>
  );
};

export const Login = () => {
  const { logIn } = useAuth();
  return (
    <Button block onClick={logIn}>
      Log in
    </Button>
  );
};
