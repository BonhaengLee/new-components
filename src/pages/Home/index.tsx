import { useState, useEffect } from "react";
import "../../styles/Home.module.scss";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        setData(users);
      } catch (err) {
        console.error(err);
        if (err instanceof Error) {
          setError(err.message);
        }
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  console.log("home");

  return (
    <div className="Home">
      <h1>Data Fetching</h1>
      <h2>The React Hooks Way</h2>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          data.map(({ id, name }) => <p key={id}>{name}</p>)
        )}
      </div>
    </div>
  );
}
