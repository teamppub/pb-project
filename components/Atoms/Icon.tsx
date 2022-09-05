import styled from '@emotion/styled';
import {
  color,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  ColorProps,
  ShadowProps,
  shadow,
  border,
  BorderProps,
  typography,
  TypographyProps,
  position,
  PositionProps,
  flexbox,
  FlexboxProps,
  background,
  BackgroundProps,
  src,
  SrcProps,
} from 'styled-system';

const Icon = styled.image<
  | SpaceProps
  | LayoutProps
  | ColorProps
  | ShadowProps
  | BorderProps
  | TypographyProps
  | PositionProps
  | FlexboxProps
  | BackgroundProps
  srcProps
>`
  ${space}
  ${layout}
  ${color}
  ${shadow}
  ${border}
  ${typography}
  ${position}
  ${flexbox}
  ${background}
`;

export default Icon;
