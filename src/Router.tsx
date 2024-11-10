import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { PostPage } from "./pages/PostPage";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/post/:issueNumber" element={<PostPage />} />
      </Route>
    </Routes>
  )
}