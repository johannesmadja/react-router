export async function getRecipes() {
  const response = await fetch("https://restapi.fr/api/recipes?delay=4");
  return response.json();
}