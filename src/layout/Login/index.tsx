import React from "react";
<<<<<<< HEAD
import { Button, FormHelperText, Paper, Tab, Tabs, TextField, Typography } from "@mui/material";
=======
import { Button, Paper, Tab, Tabs, TextField, Typography } from "@mui/material";
>>>>>>> initial commit
import ContainerWrapper from "../../components/ContainerWrapper";
import theme from "../../theme";
import { Box } from "@mui/system";
import NavLink from "../../components/NavLink";
import Link from "next/link";
<<<<<<< HEAD
import axios from "axios";
=======
>>>>>>> initial commit

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Login = () => {
  const [value, setValue] = React.useState(0);
<<<<<<< HEAD
  const [sellerFormData, setSellerFormData] = React.useState({
    sellersEmail: "",
    sellersPassword: "",
  });
  const [sellerError, setSellerError] = React.useState({
    sellersEmail: "",
    sellersPassword: "",
  });

  const [buyerFormData, setBuyerFormData] = React.useState({
    buyersEmail: "",
    buyersPassword: "",
  });

  const [buyerError, setBuyerError] = React.useState({
    buyersEmail: "",
    buyersPassword: "",
  });
=======
>>>>>>> initial commit

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

<<<<<<< HEAD
  function sellerLogin() {
    axios
      .post("http://localhost:3001/api/v1/loginUser", {
        email: "m@m.com",
        password: "manideep1",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    alert("Login Successful");
  }
  function buyerLogin() {}
=======
>>>>>>> initial commit
  return (
    <>
      <ContainerWrapper>
        <Paper
          elevation={6}
          sx={{
            maxWidth: "600px",
            padding: "50px",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              Login
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Login to a new experience
            </Typography>
          </Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              padding: "20px 0 30px 0",
              "& .MuiTabs-flexContainer": { justifyContent: "center" },
            }}
          >
            <Tab
              label={
                <React.Fragment>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    Seller
                  </Typography>
                </React.Fragment>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <React.Fragment>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    Buyer
                  </Typography>
                </React.Fragment>
              }
              {...a11yProps(1)}
            />
          </Tabs>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TabPanel value={value} index={0}>
<<<<<<< HEAD
              <FormHelperText error>{sellerError.sellersEmail}</FormHelperText>
=======
>>>>>>> initial commit
              <TextField
                type="email"
                id="email"
                label="Sellers Email"
                variant="outlined"
<<<<<<< HEAD
                required
                value={sellerFormData.sellersEmail}
                onChange={(e) => {
                  setSellerFormData({
                    ...sellerFormData,
                    sellersEmail: e.target.value,
                  });
                  if (e.target.value === "") {
                    setSellerError({
                      ...sellerError,
                      sellersEmail: "Email is required",
                    });
                  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
                    setSellerError({
                      ...sellerError,
                      sellersEmail: "Invalid Email",
                    });
                  } else {
                    setSellerError({
                      ...sellerError,
                      sellersEmail: "",
                    });
                  }
                }}
=======
>>>>>>> initial commit
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
<<<<<<< HEAD
              <FormHelperText error>{sellerError.sellersPassword}</FormHelperText>
=======
>>>>>>> initial commit
              <TextField
                id="password"
                label="Sellers Password"
                variant="outlined"
                type="password"
<<<<<<< HEAD
                required
                value={sellerFormData.sellersPassword}
                onChange={(e) => {
                  setSellerFormData({
                    ...sellerFormData,
                    sellersPassword: e.target.value,
                  });
                  if (e.target.value === "") {
                    setSellerError({
                      ...sellerError,
                      sellersPassword: "Password is required",
                    });
                  } else if (e.target.value.length < 6) {
                    setSellerError({
                      ...sellerError,
                      sellersPassword: "Password must be at least 6 characters",
                    });
                  } else {
                    setSellerError({
                      ...sellerError,
                      sellersPassword: "",
                    });
                  }
                }}
=======
>>>>>>> initial commit
                sx={{
                  width: "100%",
                  marginBottom: "10px",
                }}
              />
              <NavLink
                styles={{
                  fontSize: "16px",
                  color: theme.palette.primary.main,
                  opacity: 0.9,
                  padding: "0",
                  display: "inline-block",
                }}
                linkPath="/forgotpassword"
              >
                Forgot Password?
              </NavLink>
              <br />
              <Link href="/dashboard/sellerdashboard">
                <Button
                  variant="contained"
<<<<<<< HEAD
                  onClick={sellerLogin}
=======
>>>>>>> initial commit
                  sx={{
                    borderRadius: "4px",
                    margin: "20px 0",
                    width: "100%",
                  }}
                >
                  <Typography variant="subtitle2">
                    <a
                      style={{
                        color: "white",
                        width: "100%",
                        display: "inline-block",
                        textDecoration: "none",
                      }}
                    >
                      Login
                    </a>
                  </Typography>
                </Button>
              </Link>
            </TabPanel>
            <TabPanel value={value} index={1}>
<<<<<<< HEAD
              <FormHelperText error>{buyerError.buyersEmail}</FormHelperText>
=======
>>>>>>> initial commit
              <TextField
                type="email"
                id="email"
                label="Buyers Email"
                variant="outlined"
<<<<<<< HEAD
                required
                value={buyerFormData.buyersEmail}
                onChange={(e) => {
                  setBuyerFormData({
                    ...buyerFormData,
                    buyersEmail: e.target.value,
                  });
                  if (e.target.value === "") {
                    setBuyerError({
                      ...buyerError,
                      buyersEmail: "Email is required",
                    });
                  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
                    setBuyerError({
                      ...buyerError,
                      buyersEmail: "Invalid Email",
                    });
                  } else {
                    setBuyerError({
                      ...buyerError,
                      buyersEmail: "",
                    });
                  }
                }}
=======
>>>>>>> initial commit
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
<<<<<<< HEAD
              <FormHelperText error>{buyerError.buyersPassword}</FormHelperText>

=======
>>>>>>> initial commit
              <TextField
                id="password"
                label="Buyers Password"
                variant="outlined"
                type="password"
<<<<<<< HEAD
                required
                value={buyerFormData.buyersPassword}
                onChange={(e) => {
                  setBuyerFormData({
                    ...buyerFormData,
                    buyersPassword: e.target.value,
                  });
                  if (e.target.value === "") {
                    setBuyerError({
                      ...buyerError,
                      buyersPassword: "Password is required",
                    });
                  } else if (e.target.value.length < 6) {
                    setBuyerError({
                      ...buyerError,
                      buyersPassword: "Password must be at least 6 characters",
                    });
                  } else {
                    setBuyerError({
                      ...buyerError,
                      buyersPassword: "",
                    });
                  }
                }}
=======
>>>>>>> initial commit
                sx={{
                  width: "100%",
                  marginBottom: "10px",
                }}
              />
              <NavLink
                styles={{
                  fontSize: "16px",
                  color: theme.palette.primary.main,
                  opacity: 0.9,
                  padding: "0",
                  display: "inline-block",
                }}
                linkPath="/forgotpassword"
              >
                Forgot Password?
              </NavLink>
              <br />
              <Link href="/dashboard/buyerdashboard">
                <Button
                  variant="contained"
<<<<<<< HEAD
                  onClick={buyerLogin}
=======
>>>>>>> initial commit
                  sx={{
                    borderRadius: "4px",
                    margin: "20px 0",
                    width: "100%",
                  }}
                >
                  <Typography variant="subtitle2">
                    <a
                      style={{
                        color: "white",
                        width: "100%",
                        display: "inline-block",
                        textDecoration: "none",
                      }}
                    >
                      Login
                    </a>
                  </Typography>
                </Button>
              </Link>
            </TabPanel>
            <Typography
              sx={{
                textAlign: "center",
              }}
            >
              Dont have an account yet ?{" "}
              <NavLink
                styles={{
                  fontSize: "16px",
                  color: theme.palette.primary.main,
                  opacity: 0.9,
                  padding: "0",
                  display: "inline-block",
                }}
                linkPath="/register"
              >
                Sign Up
              </NavLink>
            </Typography>
          </Box>
        </Paper>
      </ContainerWrapper>
    </>
  );
};

export default Login;
