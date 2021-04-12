import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import FrontPage from "./containers/FrontPage";

const queryClient = new QueryClient();

// Normally with multiple pages this page would host Router component that renders are pages.
// Now I just inserted FrontPage here.
const App = () => (
  <QueryClientProvider client={queryClient}>
    <FrontPage />
  </QueryClientProvider>
);

export default App;
