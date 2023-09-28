import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from '@mui/material'
import EditColorComponent from './EditColorComponent'
import EditNoteComponent from './EditNoteComponent'
import { INote } from '../../models'
import DeleteNoteComponent from './DeleteNoteComponent'
import FavoriteNoteComponent from './FavoriteNoteComponent'

interface IProps {
  note: INote
}

export default function Note({ note }: IProps) {
  return (
    <Card
      sx={{
        minWidth: 275,
        width: '25%',
        height: '500px',
        mt: 3,
        border: '1px solid gray',
        borderRadius: 4,
        bgcolor: note.color,
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h4">{note.title}</Typography>

          <FavoriteNoteComponent id={note.id} isFavorite={note.favorite} />
        </Box>
        <Divider />
        <Box p={1} width="100%" height="360px">
          <Typography>{note.task}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="space-between" width="100%" p={1}>
          <Box>
            <EditNoteComponent
              id={note.id}
              title={note.title}
              task={note.task}
            />

            <EditColorComponent id={note.id} />
          </Box>
          <Box>
            <DeleteNoteComponent id={note.id} />
          </Box>
        </Box>
      </CardActions>
    </Card>
  )
}
