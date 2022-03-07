import Head from "next/head";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import styles from "../styles/Home.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { Button as Btn } from "@mui/material";
import Btn from "../components/Btn";
import { Box } from "@mui/material";

const height = 'h-[90vh] sm:h-[80vh]'

export default function Home(props) {

  const items = [
    {
      name: "Test1",
      desc: "test1desc",
      button: "btn",
      image: `/images/trainer1.jpg`,
    },
    {
      name: "Test2",
      desc: "test2desc",
      button: "btn",
      image: `/images/rope-exercise.jpg`,
    },
  ];

  return (
    <Carousel className={height}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      {/* <h1 className="text-3xl font-bold underline">Goodbye world!</h1> */}
    </Carousel>
  );
}

function Item(props) {
  console.log(props.item.image)
  return (
    <Box className={`bg-white/50 ${height} w-full flex flex-col relative`}>
      <img src={props.item.image} className="object-cover absolute top-0 right-0 h-full w-full -z-10"/>

      <h2>{props.item.name}</h2>
      <p>{props.item.desc}</p>

      <div className="flex justify-end items-center w-4/5 mx-auto">
        <Btn title={props.item.button} />
      </div>
    </Box>
  );
}

