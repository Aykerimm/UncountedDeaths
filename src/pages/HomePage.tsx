import React from 'react';
import { Row, Col, Layout, Button } from 'antd';
import styles from '../styles/HomePage.module.less';
import { useNavigate } from 'react-router-dom';
import { InternalRoutes, ExternalRoutes } from '../routes';
import { CircleEmail, DevPost, Github } from '../assets/assets.index';
interface Props {}
export const HomePage: React.FC<Props> = () => {
  let navigate = useNavigate();
  return (
    <Layout.Content>
      <Row justify="center">
        <Col className={styles.HomePageBanner}>
          <p className={styles.HomePageBannerContent}>
            This website was created as part of the <a href="https://theresiliencychallenge.devpost.com/">Resiliency Challenge hackathon.</a> The data analyses presented here are
            an example use-case for the <a href="">CRANE Python package</a> we are developing as a continuation to the Resiliency challenge. Please visit our
            <a href="https://github.com/CRANE-toolbox"> Github repository</a> for more information.
          </p>
        </Col>
      </Row>
      <Row justify="center">
        <Col className={styles.HomePageColumnContent}>
          <h1 className={styles.h1}>Tracking Racism Around COVID-19 on Twitter</h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col className={styles.HomePageColumnContent}>
          <p>
            Project CRANE is monitoring real-time racist rhetoric on Twitter. There is evidence that online hate speech predicts hate crime and human rights groups have argued that
            exposure to online hate speech normalizes such hatred for majority groups.
          </p>
        </Col>
      </Row>
      <Row justify="center" className={styles.ActionButtonsRow}>
        <Col>
          <Button
            size="large"
            className={styles.ActionButtonData}
            onClick={() => {
              navigate(InternalRoutes.DATA.path);
            }}
          >
            See Data
          </Button>
        </Col>
        <Col>
          <Button
            size="large"
            className={styles.ActionButtonSupport}
            onClick={() => {
              navigate(InternalRoutes.SUPPORT.path);
            }}
          >
            Get Support
          </Button>
        </Col>
      </Row>
      <div style={{ paddingTop: '3rem' }} />
      <Row justify="center" className={styles.SocialIconsRow}>
        <Col className={styles.HomeSocialIcons}>
          <CircleEmail />
        </Col>
        <Col className={styles.HomeSocialIcons}>
          <DevPost />
        </Col>
        <Col className={styles.HomeSocialIcons}>
          <Github  />
        </Col>
      </Row>
    </Layout.Content>
  );
};
