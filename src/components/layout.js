import { config } from '@fortawesome/fontawesome-svg-core';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { initFontAwesome } from '../utils/fontawesome';
import { Container } from './BaseComponents/container';
import SEO from './BaseComponents/SEO';
import CookieBanner from './CookieBanner';
import Footer from './Footer';
import NavBar from './Navbar';
// https://github.com/FortAwesome/react-fontawesome/issues/134#issuecomment-471940596
// This ensures that the icon CSS is loaded immediately before attempting to render icons
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

const FixHorizontalScroll = createGlobalStyle`
  body {
    overflow-x: hidden;
  }
`;

const StickyFooterWrapper = styled.div`
  /* sticky footer */
  display: flex;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
`;

// every page uses layout so load fontawesome here
initFontAwesome();

const Layout = ({
  children, noPadding, containerStyle, hideFooter,
}) => (
  <>
    <SEO />
    <FixHorizontalScroll />
    <CookieBanner />
    <StickyFooterWrapper>
      <NavBar
        menuItems={[
          {
            text: "About",
            dropdown: [
              {
                text: "Mission",
                onClick: "/about/mission"
              },
              {
                text: "People",
                onClick: "/coming-soon"
              },
              {
                text: "Press",
                onClick: "/about/press"
              },
              {
                text: "Newsletter",
                onClick: "/coming-soon"
              },
              {
                text: "Finances",
                onClick: "/about/finances"
              },
              {
                text: "Policies",
                onClick: "/about/policies"
              },
            ],
          },
          {
            text: "Donate",
            dropdown: [
              {
                text: "Give",
                onClick: "/donate/give"
              },
              {
                text: "Partners",
                onClick: "/donate/partners"
              }
            ],
          },
          {
            text: "Join",
            dropdown: [
              {
                text: "Careers",
                onClick: "/join/careers"
              },
              {
                text: "Volunteering",
                onClick: "/join/volunteering"
              }
            ],
          },
          {
            text: "Resources",
            dropdown: [
              {
                text: "Job Board",
                onClick: "/resources/job-board"
              }
            ],
          },
        ]}
      />

      <Container noPadding={noPadding} css={containerStyle}>
        {children}
      </Container>

      {hideFooter
        ? null
        : <Footer />}
    </StickyFooterWrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
  noPadding: PropTypes.bool,
  containerStyle: PropTypes.string,
  hideFooter: PropTypes.bool,
};

Layout.defaultProps = {
  children: null,
  noPadding: false,
  containerStyle: '',
  hideFooter: false,
};

export default Layout;
