import "@/styles/App.css";
import NasaRouter from "@/router/NasaRouter";
import { ThemeProvider } from "./contexts/theme";

function App() {
    return (
        <ThemeProvider>
            <NasaRouter />
        </ThemeProvider>
    );
}

export default App;
