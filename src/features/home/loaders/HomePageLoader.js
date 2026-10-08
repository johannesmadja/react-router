export async function HomePageLoader() {
    const response = await fetch("https://restapi.fr/api/recipes"); 
    if (response.ok) {
        return {
            recipes : await response.json()
        }
    }

    return {};
}