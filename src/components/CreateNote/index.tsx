import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { NoteService } from '../../api/NoteService'

export default function CreateNote() {
  const [noteTask, setNoteTask] = useState('')
  const [noteTitle, setNoteTitle] = useState('')

  const registerNote = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter' && noteTask && noteTitle) {
      NoteService.create({
        title: noteTitle,
        task: noteTask,
      })

      window.location.reload();
    }
  }

  return (
    <Card
      sx={{
        minWidth: 275,
        width: '40%',
        mt: 3,
        mb: 3,
        border: '1px solid gray',
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h4">
            <input
              onChange={(e) => setNoteTitle(e.target.value)}
              onKeyDown={registerNote}
              style={{
                border: 'none',
                outline: 'none',
                height: '50px',
              }}
              placeholder="Título"
            />
          </Typography>
        </Box>
        <Divider />
        <Box p={1} width="100%" height="100%">
          <input
            onChange={(e) => setNoteTask(e.target.value)}
            onKeyDown={registerNote}
            style={{
              border: 'none',
              outline: 'none',
              height: '30px',
            }}
            placeholder="Criar Nota..."
          />
        </Box>
      </CardContent>
    </Card>
  )
}
