import { Box } from '@mui/material'
import { NoteService } from '../../api/NoteService'

interface IProps {
  id: string
  color: string
}

export default function ColorComponent({ id, color }: IProps) {
  const handleUpdateNoteColor = async () => {
    await NoteService.updateColor(id, color)

    window.location.reload()
  }

  return (
    <Box
      sx={{ cursor: 'pointer' }}
      bgcolor={color}
      width="40px"
      height="40px"
      borderRadius="50%"
      onClick={handleUpdateNoteColor}
    ></Box>
  )
}
