import { Edit } from '@mui/icons-material'
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { NoteService } from '../../api/NoteService'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

interface IProps {
  id: string
  title: string
  task: string
}

export default function EditNoteComponent({ id, title, task }: IProps) {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const [newTask, setNewTask] = useState(task)

  const handleUpdateNote = async () => {
    if (newTitle && newTask) {
      await NoteService.update({
        id,
        title: newTitle,
        task: newTask,
      })

      window.location.reload()
    }
  }

  return (
    <>
      <Edit
        sx={{ mr: 1, cursor: 'pointer' }}
        onClick={() => setIsOpenEditModal(true)}
      />

      <Modal open={isOpenEditModal} onClose={() => setIsOpenEditModal(false)}>
        <Box sx={style}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Editar Nota
          </Typography>

          <Box display="flex" flexDirection="column" gap={3}>
            <TextField defaultValue={title} onChange={(e) => setNewTitle(e.target.value)} />
            <TextField defaultValue={task} onChange={(e) => setNewTask(e.target.value)} />

            <Button variant="contained" onClick={handleUpdateNote}>
              Editar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}
