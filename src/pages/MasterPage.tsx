import React from 'react';
import { Layout } from 'antd';
import { Header } from '../components/NavHeader';
import styles from '../styles/MasterPage.module.less';
import { LandingPage } from './LandingPage';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Page404 } from './404Page';
import { PublicationsPage } from './PublicationsPage';
import OurTeamPage from './OurTeamPage';
import ResourcesPage from './ResourcesPage';
import { InternalRoutes } from '../routes';
import MediaPage from './MediaPage';
import { PersistentBanner } from '../components/PersistentBanner';
import { BULogo } from '../assets/assets.index';
import AboutPage from './AboutPage';

/**
 * This component represents the main part of the website. The header, footer, and content
 * are rendered here. Plus, the react router lives here!
 */
export const Main: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Layout className={styles.MasterLayout}>
      <Layout.Header className={styles.MenuHeader}>
        <PersistentBanner />
        <Header />
      </Layout.Header>
      <Layout.Content
        className={
          location.pathname == InternalRoutes.HOME.path
            ? styles.MasterContent
            : styles.MasterContentNotHome
        }
      >
        {/* We put a router directly here so that it only has to re-load the contents
        of the page, not the entire thing! 
         */}
        <Routes>
          <Route path={InternalRoutes.HOME.path} element={<LandingPage />} />
          <Route path={InternalRoutes.PUBLICATIONS.path} element={<PublicationsPage />} />
          <Route path={InternalRoutes.TEAM.path} element={<OurTeamPage />} />
          <Route path={InternalRoutes.RESOURCES.path} element={<ResourcesPage />} />
          <Route path={InternalRoutes.MEDIA.path} element={<MediaPage />} />
          <Route path={InternalRoutes.ABOUT.path} element={<AboutPage />}></Route>
          <Route path="/" element={<Page404 />}>
            {/* <Page404 /> */}
          </Route>
        </Routes>
      </Layout.Content>
      {/* Don't render the footer on the home page */}
      <Layout.Footer className={styles.MasterFooter}>
        <BULogo href="https://www.bu.edu/ceid/" target="_blank" className={styles.FooterLogo} />
        <div className={styles.FooterTextContainer}>
          <a className={styles.FooterText} onClick={() => navigate(InternalRoutes.ABOUT.path)}>
            Contact Us
          </a>
          <a className={styles.FooterText} href="https://twitter.com/vitalstatsintegrity">
            Follow Us on Twitter
          </a>
        </div>
      </Layout.Footer>
    </Layout>
  );
};
