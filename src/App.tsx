import { fakeData } from "./assets/fakeData"
import NotesPage from "./pages/NotesPage"

function App() {
  return (
    <div id={"app"}>
      <NotesPage notes={fakeData} />
    </div>
  )
}

export default App
