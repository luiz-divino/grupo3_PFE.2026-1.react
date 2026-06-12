import { Router } from "./routes";
import { ToastProvider } from "./components/Toast/ToastProvider.jsx";

function App() {
    return (
        <ToastProvider>
            <Router />
        </ToastProvider>
    );
}

export default App;
