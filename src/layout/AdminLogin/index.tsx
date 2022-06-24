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

const AdminLogin = () => {
  const [value, setValue] = React.useState(0);
<<<<<<< HEAD
  const [agentFormData, setAgentFormData] = React.useState({
    email: "",
    password: "",
  });
  const [adminFormData, setAdminFormData] = React.useState({
    email: "",
    password: "",
  });
  const [facilityFormData, setFacilityFormData] = React.useState({
    email: "",
    password: "",
  });
  const [agentError, setAgentError] = React.useState({
    email: "",
    password: "",
  });
  const [adminError, setAdminError] = React.useState({
    email: "",
    password: "",
  });
  const [facilityError, setFacilityError] = React.useState({
    email: "",
    password: "",
  });
=======
>>>>>>> initial commit

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
                    Managing Agent
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
                    Facility Manager
                  </Typography>
                </React.Fragment>
              }
              {...a11yProps(1)}
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
                    Admin
                  </Typography>
                </React.Fragment>
              }
              {...a11yProps(2)}
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
              <FormHelperText error>{agentError.email}</FormHelperText>
=======
>>>>>>> initial commit
              <TextField
                type="email"
                id="Managing Agent"
                label="Managing Agent Email"
                variant="outlined"
<<<<<<< HEAD
                value={agentFormData.email}
                onChange={(e) => {
                  setAgentFormData({
                    ...agentFormData,
                    email: e.target.value,
                  });
                  if (e.target.value === "") {
                    setAgentError({
                      ...agentError,
                      email: "Email is required",
                    });
                  } else if (
                    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                      e.target.value
                    )
                  ) {
                    setAgentError({
                      ...agentError,
                      email: "Invalid email",
                    });
                  } else {
                    setAgentError({
                      ...agentError,
                      email: "",
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
              <FormHelperText error>{agentError.password}</FormHelperText>
=======
>>>>>>> initial commit
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
<<<<<<< HEAD
                value={agentFormData.password}
                onChange={(e) => {
                  setAgentFormData({
                    ...agentFormData,
                    password: e.target.value,
                  });
                  if (e.target.value === "") {
                    setAgentError({
                      ...agentError,
                      password: "Password is required",
                    });
                  } else {
                    setAgentError({
                      ...agentError,
                      password: "",
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
              <br />
              <Link href="/dashboard/agentdashboard">
                <Button
                  variant="contained"
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
              <FormHelperText error>{facilityError.email}</FormHelperText>
=======
>>>>>>> initial commit
              <TextField
                type="email"
                id="Facility Manager"
                label="Facility Manager Email"
                variant="outlined"
<<<<<<< HEAD
                value={facilityFormData.email}
                onChange={(e) => {
                  setFacilityFormData({
                    ...facilityFormData,
                    email: e.target.value,
                  });
                  if (e.target.value === "") {
                    setFacilityError({
                      ...facilityError,
                      email: "Email is required",
                    });
                  } else if (
                    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                      e.target.value
                    )
                  ) {
                    setFacilityError({
                      ...facilityError,
                      email: "Invalid email",
                    });
                  } else {
                    setFacilityError({
                      ...facilityError,
                      email: "",
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
              <FormHelperText error>{facilityError.password}</FormHelperText>
=======
>>>>>>> initial commit
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
<<<<<<< HEAD
                value={facilityFormData.password}
                onChange={(e) => {
                  setFacilityFormData({
                    ...facilityFormData,
                    password: e.target.value,
                  });
                  if (e.target.value === "") {
                    setFacilityError({
                      ...facilityError,
                      password: "Password is required",
                    });
                  } else {
                    setFacilityError({
                      ...facilityError,
                      password: "",
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
              <br />
              <Link href="/dashboard/facilitydashboard">
                <Button
                  variant="contained"
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
            <TabPanel value={value} index={2}>
<<<<<<< HEAD
              <FormHelperText error>{adminError.email}</FormHelperText>
=======
>>>>>>> initial commit
              <TextField
                type="email"
                id="Admin"
                label="Admin Email"
                variant="outlined"
<<<<<<< HEAD
                value={adminFormData.email}
                onChange={(e) => {
                  setAdminFormData({
                    ...adminFormData,
                    email: e.target.value,
                  });
                  if (e.target.value === "") {
                    setAdminError({
                      ...adminError,
                      email: "Email is required",
                    });
                  } else if (
                    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                      e.target.value
                    )
                  ) {
                    setAdminError({
                      ...adminError,
                      email: "Invalid email",
                    });
                  } else {
                    setAdminError({
                      ...adminError,
                      email: "",
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

              <FormHelperText error>{adminError.password}</FormHelperText>
=======
>>>>>>> initial commit
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
<<<<<<< HEAD
                value={adminFormData.password}
                onChange={(e) => {
                  setAdminFormData({
                    ...adminFormData,
                    password: e.target.value,
                  });
                  if (e.target.value === "") {
                    setAdminError({
                      ...adminError,
                      password: "Password is required",
                    });
                  } else {
                    setAdminError({
                      ...adminError,
                      password: "",
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
              <br />
              <Link href="/dashboard/admindashboard">
                <Button
                  variant="contained"
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
              Dont have an account yet ?
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
                &nbsp;Sign Up
              </NavLink>
            </Typography>
          </Box>
        </Paper>
      </ContainerWrapper>
    </>
  );
};

export default AdminLogin;
