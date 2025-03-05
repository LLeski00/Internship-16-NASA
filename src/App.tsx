import "@/styles/App.css";
import NasaRouter from "@/router/NasaRouter";
import { ThemeProvider } from "./contexts/theme";
import { MarsRoverProvider } from "./contexts/mars-rover";

function App() {
    return (
        <ThemeProvider>
            <MarsRoverProvider>
                <NasaRouter />
            </MarsRoverProvider>
        </ThemeProvider>
    );
}

export default App;
