import { Box } from '@mui/material'
import CreateNote from './components/CreateNote'
import Navbar from './components/Navbar'
import ListNotes from './components/ListNotes'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('')

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Navbar setSearch={setSearch} />

      <CreateNote />

      <ListNotes search={search} />
    </Box>
  )
}

export default App
