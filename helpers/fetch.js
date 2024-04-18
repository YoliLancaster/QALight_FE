export async function fetchData() {
  try {
    const response = await axios.get(
      "https://randomuser.me/api/?results=10&inc=id,gender,name,picture,location"
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
