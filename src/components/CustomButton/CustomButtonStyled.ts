import { Button, ButtonProps, styled } from '@mui/material';
/* import Button, { ButtonProps } from '@mui/material/Button'; */
/* import {styled} from '@mui/material/styles'; */
import React from 'react';

const CustomButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: theme.palette.success.contrastText,
  '&:hover': {
    backgroundColor: "darkgreen"
  },
}))

export default CustomButtonStyled;