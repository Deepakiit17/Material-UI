import React from 'react'
import { ButtonGroup, Button } from "@mui/material"

function practic1() {
  return (
    <div>
      <h1>MUI | ButtonGroup</h1>
      <ButtonGroup
      orientation='vertical'
      variant='outlined'
      color='primary'
      >
      <Button>one</Button>
      <Button>two</Button>
      <Button>three</Button>
      </ButtonGroup>
    </div>
  )
}

export default practic1
