import React from "react";
<<<<<<< HEAD
import { Box, Typography } from "@mui/material";
import { flexCenter } from "../../../../styles/styles";
=======
import { Box, Button, Typography } from "@mui/material";
import { flexCenter } from "../../../../styles/styles";
import Link from "next/link";
>>>>>>> initial commit

const AddTenders = () => {
  return (
    <>
      <Box
        sx={{
<<<<<<< HEAD
          ...flexCenter,
=======
          padding: "20px 30px",
          maxHeight: "1000px",
          overflowY: "scroll",
          " ::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            backgroundColor: "lightgray",
          },
          "::-webkit-scrollbar": {
            width: "4px",
          },
>>>>>>> initial commit
        }}
      >
        <Typography
          sx={{
<<<<<<< HEAD
            fontSize: "50px",
          }}
        >
          AddTenders
        </Typography>
      </Box>
=======
            fontSize: "20px",
            fontWeight: "bold",
            paddingBottom: "10px",
          }}
        >
          Introduction
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            paddingBottom: "15px",

          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              architecto itaque quam, hic dolorum reprehenderit! Exercitationem
              nam dignissimos distinctio et eum veritatis asperiores, cupiditate
              alias obcaecati, amet fuga corrupti vitae nisi deleniti
              reprehenderit iste voluptates. Voluptates accusamus, dolorem
              delectus veritatis similique magni ratione, libero totam omnis
              saepe, pariatur explicabo nesciunt iure sint aut praesentium
              blanditiis! Odit nostrum dolor dicta totam?
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            paddingBottom: "10px",
            fontWeight: "bold",
          }}
        >
          Features
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            paddingBottom: "15px",

          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              architecto itaque quam, hic dolorum reprehenderit! Exercitationem
              nam dignissimos distinctio et eum veritatis asperiores, cupiditate
              alias obcaecati, amet fuga corrupti vitae nisi deleniti
              reprehenderit iste voluptates. Voluptates accusamus, dolorem
              delectus veritatis similique magni ratione, libero totam omnis
              saepe, pariatur explicabo nesciunt iure sint aut praesentium
              blanditiis! Odit nostrum dolor dicta totam?
        </Typography>

        <Typography
          sx={{
            fontSize: "20px",
            paddingBottom: "10px",
            fontWeight: "bold",
          }}
        >
          Guidlines
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            paddingBottom: "15px",

          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              architecto itaque quam, hic dolorum reprehenderit! Exercitationem
              nam dignissimos distinctio et eum veritatis asperiores, cupiditate
              alias obcaecati, amet fuga corrupti vitae nisi deleniti
              reprehenderit iste voluptates. Voluptates accusamus, dolorem
              delectus veritatis similique magni ratione, libero totam omnis
              saepe, pariatur explicabo nesciunt iure sint aut praesentium
              blanditiis! Odit nostrum dolor dicta totam?
        </Typography>

        <Typography
          sx={{
            fontSize: "20px",
            paddingBottom: "10px",
            fontWeight: "bold",
          }}
        >
          Pricing
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            paddingBottom: "15px",

          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              architecto itaque quam, hic dolorum reprehenderit! Exercitationem
              nam dignissimos distinctio et eum veritatis asperiores, cupiditate
              alias obcaecati, amet fuga corrupti vitae nisi deleniti
              reprehenderit iste voluptates. Voluptates accusamus, dolorem
              delectus veritatis similique magni ratione, libero totam omnis
              saepe, pariatur explicabo nesciunt iure sint aut praesentium
              blanditiis! Odit nostrum dolor dicta totam?
        </Typography>
      </Box>
      <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "50px 0",
        gap: "16px",
      }}>
      <Link href="/tenderGenerator/tenderGenerationdashboard">

      <Button
            sx={{
              backgroundColor:"blue",
              width: "160px"
              

            }}
            variant="contained"
          >
            <Typography variant="subtitle2">Continue</Typography>
          </Button>
          </Link>
          </Box>
>>>>>>> initial commit
    </>
  );
};

export default AddTenders;
