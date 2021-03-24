import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/main.scss";
import { ThemeContext } from "utils/context/ThemeColors";
import '@/components/@fake-db'

const App = ({ Component, pageProps }) => (
  <ThemeContext>
    <Component {...pageProps} />
  </ThemeContext>
);

export default App;
