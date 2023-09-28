import { Box } from "@mui/material"
import CreateNote from "./components/CreateNote"
import Navbar from "./components/Navbar"
import ListNotes from "./components/ListNotes"

function App() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Navbar />

      <CreateNote />

      <ListNotes />
    </Box>
  )
}

export default App
