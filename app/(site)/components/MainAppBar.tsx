"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "../../../public/logo.jpeg";
import { Grid, IconButton, useTheme } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";

export default function MainAppBar({
  elevation = false,
}: {
  elevation?: boolean;
}) {
  const theme = useTheme();
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  const path = usePathname().split("/")[1];
  console.log(path);
  const [docsHover, setDocsHover] = useState(false);
  console.log(path);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          alignSelf: "center",
          background: "white",
          color: "black",
          zIndex: "1",
          p: 2,
          pl: matchesBreakpoint ? 0 : 5,
          pr: matchesBreakpoint ? 0 : 5,
          m: 0,
          boxShadow: elevation ? "1px 1px 3px #e1e1e1 !important" : "none",
        }}
      >
        <Grid
          container
          sx={{ height: "100%" }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item pl={2} display={{ xs: "flex", md: "none", lg: "none" }}>
            <IconButton sx={{ hieght: "40px", width: "40px" }}>
              <MenuIcon />
            </IconButton>
          </Grid>

          <Grid item flex={1}>
            <Button
              disableRipple
              onClick={() => router.push("/")}
              sx={{
                color: "#1C1E21",
                textTransform: "none",
                ":hover": {
                  background: "white",
                },
              }}
            >
              <Image
                src={logo}
                style={{
                  width: "50px",
                  height: "50px",
                  position: "relative",
                  objectFit: "fill",
                }}
                alt="none"
              />
              <Typography
                variant="body1"
                component="div"
                fontWeight={600}
                sx={{ flexGrow: 1, pl: 2, fontSize: "28px" }}
              >
                Studiquo
              </Typography>
            </Button>
          </Grid>

          <Grid
            item
            flex={1}
            display={{ xs: "none", md: "flex", lg: "flex" }}
          ></Grid>

          <Grid
            item
            flex={2}
            alignItems={"center"}
            display={{ xs: "none", md: "flex", lg: "flex" }}
          >
            <Grid
              container
              sx={{
                "& .MuiButtonBase-root": {
                  color: "#1C1E21",
                  fontSize: "15px",
                  ml: 3,
                  textTransform: "none",
                  ":hover": {
                    background: "white",
                    color: "#66d988",
                  },
                },
              }}
            >
              <Button
                disableRipple
                sx={{
                  color: `${path === "" ? "#66d988" : "black"} !important`,
                }}
                onClick={() => router.push("/")}
              >
                Home
              </Button>
              <Button
                disableRipple
                sx={{
                  color: `${
                    path === "about-us" ? "#66d988" : "black"
                  } !important`,
                }}
                onClick={() => router.push("/about-us")}
              >
                About us
              </Button>
              <Button
                disableRipple
                sx={{
                  color: `${
                    path === "resources" ? "#66d988" : "black"
                  } !important`,
                }}
                onClick={() => router.push("/resources")}
              >
                Free Resources
              </Button>
            </Grid>
          </Grid>

          <Grid
            item
            flex={1}
            display={{ xs: "none", md: "flex", lg: "flex" }}
          ></Grid>
          <Grid display={{ xs: "none", md: "flex", lg: "flex" }}>
            <Button
              disableRipple
              sx={{
                background: "#97FCB5",
                textTransform: "none",
                color: "black",
                pt: 1.5,
                pb: 1.5,
                pl: 3,
                pr: 3,
                borderRadius: "8px",
                ":hover": {
                  background: "#97FCB5",
                },
              }}
            >
              Join Us
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}
