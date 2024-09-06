import React, { useEffect, useState } from "react";

const Star = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [starCount, setStarCount] = useState(0); // To store the number of starred repos

  useEffect(() => {
    // Fetch the starred repositories of the user
    fetch("https://api.github.com/users/gj701763/starred")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRepos(data); // Store the repository data
        setStarCount(data.length); // Set the length of the repos array (number of starred repos)
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="starred-repos">
      <p> {starCount}</p>{" "}
    </div>
  );
};

export default Star;
