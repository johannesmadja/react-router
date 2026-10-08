import { useNavigate } from "react-router";

function ProfileOverview() {
  const navigate = useNavigate();

  function navigateToData() {
    navigate("data");
  }

  return (
    <h2>
      {" "}
      Profile Overview <button onClick={navigateToData}>To Data</button>{" "}
    </h2>
  );
}

export default ProfileOverview;
