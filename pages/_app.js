import "../styles/globals.css";
import Header from "../components/Header";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import { blue, red } from "@mui/material/colors";

const theme = createTheme({
  status: {
    primary: red[50]
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" className="shadow">
        <Header />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
