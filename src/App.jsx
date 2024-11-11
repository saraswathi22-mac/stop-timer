import FetchElements from "./components/FetchByAxios/FetchElements";
import Pagination from "./components/Pagination/Pagination";
import SearchUser from "./components/Searching/SearchUser";
import SortByUsername from "./components/Sorting/Sorting";
import StopTimer from "./components/StopTimer/StopTimer";

function App() {
  return (
    <>
      <StopTimer />
      <SortByUsername />
      <FetchElements />
      <Pagination
        apiUrl="https://jsonplaceholder.typicode.com/posts"
        itemsPerPage={10}
      />
      <SearchUser />
    </>
  );
}

export default App;
