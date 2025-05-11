import { Route, Routes, HashRouter, useLocation } from "react-router";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

const RouteManager = () => {
  const { pathname } = useLocation();
  if (pathname === "/") {
    return <Home />;
  }
  return <NotFound />;
};

function App() {
  return (
    <>
      <Toaster />
      <HashRouter>
        <Routes>
          <Route path="*" element={<RouteManager />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
