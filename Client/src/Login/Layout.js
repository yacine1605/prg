/* eslint-disable jsx-a11y/anchor-has-content */
import { Layout, Menu } from "antd";

import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import fond from "../fond.png";

import axios from "axios";
import "./login.css";
import { Input, Button, Card, Typography } from "antd";

const { Title, Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const Lay = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();
  const submit = async () => {
    const loginResponse = await axios
      .post(`http://localhost:5000/user/login`, {
        username: form.username,
        password: form.password,
      })
      .catch((err) => console.log("Error", err));
    console.log(loginResponse);

    const token = loginResponse.data.data?.access_token;
    const { data } = await axios
      .get("http://localhost:5000/user/info", {
        headers: { Authorization: "Bearer " + token },
      })
      .catch((err) => console.log("Error", err));

    if (data) {
      history.push("/user", { data });
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
  };
  const handel = (e) => {
    const intermediateState = { ...form };
    console.log(e.target.name);
    intermediateState[e.target.name] = e.target.value;
    setForm({ ...intermediateState });
  };

  return (
    <>
      <div>
        <Layout
          style={{
            //	background: '#D0D5DC',
            marginBottom: "10%",
          }}
        >
          <Content
            className="site-layout"
            style={
              {
                //padding: '0 50px',
                //	backgroundImage: ' linear-gradient(to top, #a8edea 0%, #fed6e3 100%',
              }
            }
          >
            <div
              className="site-layout-background"
              //style={{
              //	padding: 24,
              //	minHeight: 380,
              //	height: '90vh',
              //}}
            >
              <div className="body">
                <div
                  className="logo"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "2%",
                  }}
                >
                  <img src={fond} alt="logo" height="400" width="1400" />
                </div>
                <div
                  class="row"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div class="col-lg-12">
                    <h3
                      style={{
                        fontSize: "25px",
                        color: "#97BE0C",
                        fontFamily: [
                          "Cambria",
                          "Hoefler Text",
                          "Liberation Serif",
                          "Times",
                          "Times New Roman",
                          "serif",
                        ],
                      }}
                    >
                      PEOPLE'S DEMOCRATIC REPUBLIC OF ALGERIA
                    </h3>
                    <h4
                      style={{
                        color: "rgba(4,191,31,1.00)",
                        marginLeft: "5%",
                        fontSize: "18px",
                      }}
                    >
                      Ministry of Agriculture, Rural Development and Fisheries
                    </h4>
                    <h3 style={{ color: "#003399", marginLeft: "10%" }}>
                      Directorate General for Fisheries and Aquaculture
                    </h3>
                  </div>
                </div>
                <div>
                  <Header
                    style={{
                      width: "100%",
                      height: "100%",
                      marginBottom: "4%",
                      backgroundColor: "#C4E8E4",
                      boxShadow:
                        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                    }}
                  >
                    <Menu
                      mode="horizontal"
                      defaultSelectedKeys={["1"]}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: "#C4E8E4",
                        width: "100%",
                      }}
                    >
                      <Menu.Item key="1" onClick={() => history.push("/")}>
                        Accueil
                      </Menu.Item>

                      <Menu.Item
                        key="4"
                        onClick={() => {
                          history.push("/data");
                        }}
                      >
                        Graph
                      </Menu.Item>
                      <Menu.Item
                        key="3"
                        onClick={() => {
                          history.push("/espace");
                        }}
                      >
                        Les espace
                      </Menu.Item>
                    </Menu>
                  </Header>
                </div>

                <div className="FormLogin">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    style={{ marginTop: "10%" }}
                  >
                    <div className="container">
                      <Card
                        style={{
                          boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                          background: "#00B4DB",
                          width: "450px",
                          height: "300px",
                        }}
                        title={
                          <Title level={4}>
                            <Text
                              italic
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              Login
                            </Text>
                          </Title>
                        }
                        level={5}
                        bordered={true}
                      >
                        <label>
                          <b>
                            {" "}
                            <Title level={5} className="title">
                              Username
                            </Title>
                          </b>
                        </label>
                        <Input
                          style={{
                            backgroundImage:
                              "linear-gradient(to top, #a8edea 0%, #fed6e3 100%",
                          }}
                          name="username"
                          type="text"
                          placeholder="Enter Username"
                          required
                          onChange={(e) => {
                            handel(e);
                          }}
                        />

                        <label htmlFor="psw">
                          <b>
                            {" "}
                            <Title level={5} className="title">
                              Password
                            </Title>
                          </b>
                        </label>
                        <Input
                          style={{
                            backgroundImage:
                              "linear-gradient(to top, #a8edea 0%, #fed6e3 100%",
                          }}
                          type="password"
                          name="password"
                          placeholder="Enter Password"
                          required
                          onChange={(e) => {
                            handel(e);
                          }}
                        />

                        <div>
                          <Button
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            variant="contained"
                            color="primary"
                            type="primary"
                            onClick={() => {
                              submit();
                            }}
                            style={{
                              marginTop: "10%",
                              display: "flex",
                              justifyContent: "center",
                              alignItem: "center",
                            }}
                          >
                            Login
                          </Button>
                        </div>
                      </Card>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Content>
        </Layout>
        <footer
          role="contentinfo"
          style={{
            //backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',
            backgroundColor: "#CBCCD1",
            height: "73px",
            display: "block",
          }}
        >
          <div className="footer2" style={{ display: "block" }}>
            <div class="generic2Container footer2Container">
              <div class="footer2BlocLinks">
                <ul class="footer2BlocLinks__bloc">
                  <li class="footer2BlocLinks__item">
                    <a
                      style={{ color: "black" }}
                      class="footer2BlocLinks__link"
                      href="http://www.dgpa.gov.dz/algerie/FLOT/fl00_genbranch.php?sesid=sealumblh6ueauds6q6vokfhf6&callphp=flpb11_docs.php"
                    >
                      Actualités
                    </a>
                  </li>
                  <li class="footer2BlocLinks__item">
                    <a
                      style={{ color: "black" }}
                      class="footer2BlocLinks__link"
                      href="/credits"
                    >
                      Crédits
                    </a>
                  </li>

                  <li class="footer2BlocLinks__item">
                    <a
                      style={{ color: "black" }}
                      class="footer2BlocLinks__link"
                      href="/plan-du-site"
                    >
                      Plan du site
                    </a>
                  </li>
                </ul>
              </div>
              <div style={{ marginRight: "1%", width: "20%" }}>
                <a
                  href="www.facebook.com/"
                  style={{ color: "black", fontSize: "20px" }}
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  href="www.twitter.com"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    paddingLeft: "10%",
                  }}
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="www.instagram.com"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    paddingLeft: "10%",
                  }}
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  href="www.snapchat.com"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    paddingLeft: "10%",
                  }}
                >
                  <i class="fab fa-snapchat-ghost"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Lay;
