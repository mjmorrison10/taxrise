import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import reactDom from "react-dom";
import Btn from "./Btn";
import OpenClose from "./OpenClose";
import {
  Button,
  Typography,
  Modal,
  Box,
  AppBar,
  Toolbar,
  CssBaseline,
  Container,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const buttonsTitle = [
  "get started",
  "services",
  "resolved cases",
  "resources",
  "about",
  "clients",
];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function Header(props) {
  const [menu, setMenu] = useState(true);
  const [isActive, setActive] = useState(false);

  const [ok, setOk] = useState(false);

  // MUI Modal
  const [open, setOpen] = React.useState(false);
  const handleModal = () => {
    console.log("test");
    !open ? setOpen(true) : setOpen(false);
  };

  function capWords(arr) {
    return arr.map((el) => {
      return el.charAt(0).toUpperCase() + el.substring(1).toLowerCase();
    });
  }

  const capTitle = capWords(buttonsTitle);

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className="bg-blue-200">
          <Toolbar>
            <header className="w-full">
              <nav className="flex justify-between">
                <div className="flex items-end">
                  <div className="h-16 w-16">
                    <img
                      className="h-full w-full object-cover"
                      src="/images/logo.png"
                      alt="logo"
                    />
                  </div>
                  <div className="ml-1">
                    <div className="text-md">Daniel Elfo</div>
                    <div className="text-xs">Personal Trainer</div>
                  </div>
                </div>

                <Modal
                  open={open}
                  onClose={handleModal}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 bg-white p-2 border-2 border-black shadow-2xl max-w-sm w-11/12 sm:w-full rounded ">
                    {capTitle.map((btn, i) => (
                      <Btn title={btn} key={i} />
                    ))}
                  </Box>
                </Modal>
                <Button onClick={handleModal}>
                  <OpenClose open={open} setOpen={setOpen} />
                </Button>

                <Box className="lg:flex hidden justify-center">
                  {/* {capTitle.map((btn, i) => (
                    <Btn title={btn} key={i} />
                  ))} */}
                  {
                  capTitle.map((btn) => (
                    <Button variant="contained" color="primary">{btn}</Button>
                  ))
                  }
            
                </Box>
              </nav>
            </header>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}></Box>
      </Container>
    </React.Fragment>
  );
}

export default Header;
