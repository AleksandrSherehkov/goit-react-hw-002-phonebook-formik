import styled from 'styled-components';
import { color, space, layout, flexbox, border, shadow, grid } from 'styled-system';

export const Box = styled('div')(color, space, layout, flexbox, border, shadow, grid);

Box.defaultProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
