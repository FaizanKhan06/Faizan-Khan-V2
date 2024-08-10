import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Components/MainLayout/MainLayout";
import MouseTrackingEffect from "./Components/MouseTrackingEffect";
import Error404 from "./Components/Error404/Error404";
import ArchiveProjectSection from "./Components/ArchivedProject/ArchiveProjectSection";

function App() {
  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://faizankhan06.github.io/MyFiles/Portfolio_V2/Portfolio_V2.json"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setJsonData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout data={jsonData} />,
    },
    {
      path: "/archive",
      element: <ArchiveProjectSection data={jsonData} />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);
  return (
    <>
      <div className="__variable_20b187 group/spotlight relative">
        <MouseTrackingEffect />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
