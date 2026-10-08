import { useLoaderData } from "react-router";

function HomePage() {
  const { recipes } = useLoaderData();

  return (
    <>
      <h2> Home</h2>
      {recipes && (
        <ul>
          {recipes.map(({_id, title}) => (
            <li key={_id}> {title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default HomePage;
