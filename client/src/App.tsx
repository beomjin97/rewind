import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Auth from "./routes/Auth";
import Main from "./routes/Main";
import Update from "./routes/Update";
import Upload from "./routes/Upload";
import PostDetail from "./routes/PostDetail";
import UserDetail from "./routes/UserDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="user/:userId" element={<UserDetail />} />
        <Route path="upload" element={<Upload />} />
        <Route path="update/:postId" element={<Update />} />
      </Route>
      <Route path="auth" element={<Auth />} />
      <Route path="post/:postId" element={<PostDetail />} />
    </Routes>
  );
};

export default App;
