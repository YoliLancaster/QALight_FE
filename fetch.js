async function fetchData() {
  try {
    const {
      data: { results },
    } = await axios.get(
      "https://randomuser.me/api/?results=10&inc=id,gender,name,picture"
    );
    console.log(results);
  } catch (error) {
    console.error("Ошибка при запросе:", error);
  }
}

fetchData();
