import Popover from '@mui/material/Popover'
import ColorComponent from './ColorComponent'
import { Box } from '@mui/material'
import { ColorLens } from '@mui/icons-material'
import { useState } from 'react'

interface IProps {
  id: string
}

export default function EditColorComponent({ id }: IProps) {
  const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <>
      <ColorLens
        sx={{ cursor: 'pointer' }}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      />

      <div>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Box display="flex" gap={1} p={2} borderRadius={5}>
            <ColorComponent color="purple" id={id} />
            <ColorComponent color="yellow" id={id} />
            <ColorComponent color="brown" id={id} />
            <ColorComponent color="orange" id={id} />
            <ColorComponent color="red" id={id} />
            <ColorComponent color="pink" id={id} />
            <ColorComponent color="blue" id={id} />
            <ColorComponent color="green" id={id} />
            <ColorComponent color="gray" id={id} />
          </Box>
        </Popover>
      </div>
    </>
  )
}
