import { FC, PropsWithChildren, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Container, styled } from '@mui/material';
import { useShallowSelector } from 'shared';

import { BgSmall } from './assets';
import { Header } from './header';
import { Footer } from './footer';

const StyledLayout = styled(Box)((props) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  position: 'relative',
  background: props.theme.themeColors.colorBackground,
  zIndex: 1,
  ...(props.className && {
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: props.className === 'withBgSm' ? `url(${BgSmall})  no-repeat` : `url(${BgSmall}) no-repeat`,
      backgroundSize: '100%',
      backgroundBlendMode: 'screen',
      zIndex: '-1',
      [props.theme.breakpoints.down('md')]: {
        background: 'none',
      },
    },
  }),
}));

export enum LayoutBackground {
  Lg = 'withBgLg',
  Sm = 'withBgSm',
}

type LayoutProps = {
  bg?: LayoutBackground;
};

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, bg = null }) => {

  return (
    <StyledLayout className={bg || ''}>
      <Header />
      <Container
        sx={{
          pt: 2,
          flex: 1,
          marginBottom: 4,
          maxWidth: '920px',
        }}
      >
        {children}
      </Container>
      <Footer />
    </StyledLayout>
  );
};
