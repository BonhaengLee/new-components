import Posts from "../../components/Posts";
import Users from "../../components/Users";

import "../../styles/Home.module.scss";

export default function App() {
  return (
    <div className="App">
      <h1>Query Keys</h1>
      <h2>Example 1</h2>
      <h3>Users</h3>
      <Users />
      <h3>Posts</h3>
      <Posts />
    </div>
  );
}
