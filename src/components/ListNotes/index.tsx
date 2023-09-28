import { Box } from '@mui/material'
import FavoriteNotesComponent from './FavoriteNotesComponent'
import CommonNotesComponent from './CommonNotesComponent'
import { useEffect, useState } from 'react'
import { NoteService } from '../../api/NoteService'
import { INote } from '../../models'

export default function ListNotes() {

  const [favoritesNotes, setFavoritesNotes] = useState<INote[]>([])
  const [commonNotes, setCommonNotes] = useState<INote[]>([])

  useEffect(() => {
    (async () => {
      const notes = await NoteService.getNotes()

      const favorites: INote[] = []
      const commons: INote[] = []

      notes.forEach((note) => {
        if (note.favorite) {
          favorites.push(note)
        } else {
          commons.push(note)
        }
      })

      setFavoritesNotes(favorites)
      setCommonNotes(commons)
    })()
  }, [])

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={5}
      width="90%"
      mb={5}
    >
      <FavoriteNotesComponent notes={favoritesNotes} />

      <CommonNotesComponent notes={commonNotes} />
    </Box>
  )
}
