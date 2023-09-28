import { Close } from '@mui/icons-material'
import { NoteService } from '../../api/NoteService'

interface IProps {
  id: string
}

export default function DeleteNoteComponent({ id }: IProps) {
  const handleDeleteNote = async () => {
    await NoteService.delete(id)

    window.location.reload()
  }

  return (
    <>
      <Close sx={{ cursor: 'pointer' }} onClick={handleDeleteNote} />
    </>
  )
}
