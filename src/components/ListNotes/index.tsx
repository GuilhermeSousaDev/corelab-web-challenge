import { Box } from '@mui/material'
import FavoriteNotesComponent from './FavoriteNotesComponent'
import CommonNotesComponent from './CommonNotesComponent'
import { useEffect, useState } from 'react'
import { NoteService } from '../../api/NoteService'
import { INote } from '../../models'
import SearchNotesComponent from './SearchNotesComponent'

interface IProps {
  search: string
}

export default function ListNotes({ search }: IProps) {
  const [favoritesNotes, setFavoritesNotes] = useState<INote[]>([])
  const [commonNotes, setCommonNotes] = useState<INote[]>([])
  const [allNotes, setAllNotes] = useState<INote[]>([])

  useEffect(() => {
    (async () => {
      const notes = await NoteService.getNotes()

      const favorites: INote[] = []
      const commons: INote[] = []
      const all: INote[] = []

      notes.forEach((note) => {
        all.push(note)

        if (note.favorite) {
          favorites.push(note)
        } else {
          commons.push(note)
        }
      })

      setFavoritesNotes(favorites)
      setCommonNotes(commons)
      setAllNotes(all)
    })()
  }, [])

  return (
    <Box display="flex" flexDirection="column" gap={5} width="90%" mb={5}>
      {search ? (
        <SearchNotesComponent
          notes={allNotes.filter(
            (note) => note.title.includes(search) || note.task.includes(search)
          )}
        />
      ) : (
        <>
          <FavoriteNotesComponent notes={favoritesNotes} />

          <CommonNotesComponent notes={commonNotes} />
        </>
      )}
    </Box>
  )
}
