import { Star, StarBorder } from '@mui/icons-material'
import { Box } from '@mui/material'
import { useState } from 'react'
import { NoteService } from '../../api/NoteService'

interface IProps {
  id: string
  isFavorite: boolean
}

export default function FavoriteNoteComponent({ id, isFavorite }: IProps) {
  const [isStarOnHover, setIsStarOnHover] = useState(false)

  const handleAddNoteToFavorite = async () => {
    await NoteService.addNoteToFavorite(id)

    window.location.reload()
  }

  return (
    <Box
      onMouseOver={() => setIsStarOnHover(true)}
      onMouseLeave={() => setIsStarOnHover(false)}
      onClick={handleAddNoteToFavorite}
      sx={{ cursor: 'pointer' }}
    >
      {isStarOnHover || isFavorite ? <Star sx={{ color: 'orange' }} /> : <StarBorder />}
    </Box>
  )
}
