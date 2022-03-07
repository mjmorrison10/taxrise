import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen overflow-y-hidden container mx-auto shadow p-1">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
