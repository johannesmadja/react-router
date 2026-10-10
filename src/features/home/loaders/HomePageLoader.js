import { getRecipes } from "../../../services/api";

export async function HomePageLoader() {
  const recipes = await getRecipes();

  return { recipes };
}
