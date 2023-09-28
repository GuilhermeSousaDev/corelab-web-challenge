import { Box, Typography, useTheme } from '@mui/material'
import Note from '../Note'
import { INote } from '../../models'

interface IProps {
  notes: INote[]
}

export default function CommonNotesComponent({ notes }: IProps) {
  const theme = useTheme()

  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      sx={{
        [theme.breakpoints.down(700)]: {
          alignItems: 'center'
        },
      }}
    >
      <Typography>Outras</Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={5}
        sx={{
          [theme.breakpoints.down(700)]: {
            justifyContent: 'center',
          },
        }}
      >
        {notes &&
          notes.map((note) => (
            <>
              <Note note={note} />
            </>
          ))}
      </Box>
    </Box>
  )
}
