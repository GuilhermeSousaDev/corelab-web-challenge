import { Close, Search } from '@mui/icons-material'
import { Box, InputAdornment, TextField, Typography } from '@mui/material'

export default function Navbar() {
  return (
    <Box width="100%" pb={1.5} pt={1.5} boxShadow="1px 1px 5px grey">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        ml={10}
        mr={10}
      >
        <Box
          display="flex"
          alignItems="center"
          sx={{ minWidth: '100px', mr: 3 }}
        >
          <Typography variant="body1">CoreNotes</Typography>

          <TextField
            sx={{
              boxShadow: '1px 1px 5px grey',
              width: '700px',
              ml: 3,
            }}
            placeholder="Pesquisar Notas"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Close />
      </Box>
    </Box>
  )
}
