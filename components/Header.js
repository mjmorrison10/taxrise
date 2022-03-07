import React from "react";
import { useState, useEffect } from "react";
import reactDom from "react-dom";
import Btn from "./Btn";
import OpenClose from "./OpenClose";
import { Button, Typography, Modal, Box as div } from "@mui/material";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

// Modal.setAppElement("#root");

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
  "My store",
  "Prices",
  "On-Demand",
  "Live Classes",
  "Testimonials",
  "Contact",
];

function Header() {
  const [menu, setMenu] = useState(true);
  const [isActive, setActive] = useState(false);

  const [ok, setOk] = useState(false);

  // MUI Modal
  const [open, setOpen] = React.useState(false);
  const handleModal = () => {
    console.log("test");
    !open ? setOpen(true) : setOpen(false);
  };

  return (
    <header className=""> 
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
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-2 border-2 border-black shadow-2xl max-w-sm w-11/12 sm:w-full rounded ">
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}

            {buttonsTitle.map((btn, i) => (
              <Btn title={btn} key={i} />
            ))}
          </div>
        </Modal>
        <Button onClick={handleModal}>
          <OpenClose open={open} setOpen={setOpen} />
        </Button>

        <div className="lg:flex hidden justify-center">
          {buttonsTitle.map((btn, i) => (
            <Btn title={btn} key={i} />
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
