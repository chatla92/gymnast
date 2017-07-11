// @flow
import React from 'react'
import { Grid, Root, Layout, Col } from 'reflex'
import { loremIpsum } from '../../shared'
import { colors1, colors2, colors3 } from '../../shared/stories.css'
import styles from './report.css'
import {
  bottom,
  horizontal,
  horizontalHalf,
  allHalf,
  rightDouble,
  top,
  vertical,
} from '../../shared/marginTypes'

function P(props) {
  return (
    <Col>
      <p {...props} />
    </Col>
  )
}

function Card({
  children,
  height = 70,
}: {
  children?: any,
  height?: number,
}): React$Element<any> {
  return (
    <Col style={{ height }}>
      <div style={{ height: '100%', width: '100%' }} className={styles.card}>
        <P>
          {children}
        </P>
      </div>
    </Col>
  )
}

export default function() {
  return (
    <Layout type="parent" className={styles.report}>
      <Layout fixed="top">
        <Layout className={styles.header}>
          <Root>
            <Grid padding={vertical} margin={horizontalHalf}>
              <h1>Header</h1>
            </Grid>
          </Root>
        </Layout>
        <Layout className={styles.subheader}>
          <Root>
            <Grid margin={allHalf}>
              <h2>Subheader</h2>
            </Grid>
            <Grid size={10} margin={horizontalHalf}>
              <Grid margin={rightDouble} size="fit">
                <Grid padding={top} className={colors3}>
                  Lorem
                </Grid>
              </Grid>
              <Grid margin={rightDouble} size="fit">
                <Grid padding={top} className={colors3}>
                  ipsum
                </Grid>
              </Grid>
              <Grid margin={rightDouble} size="fit">
                <Grid padding={top} className={colors3}>
                  dolor
                </Grid>
              </Grid>
              <Grid margin={rightDouble} size="fit">
                <Grid padding={top} className={colors3}>
                  sit amet, consectetur
                </Grid>
              </Grid>
            </Grid>
            <Grid margin={horizontalHalf} size={2}>
              <Grid padding={top} className={colors3}>
                sit amet
              </Grid>
            </Grid>
          </Root>
        </Layout>
      </Layout>
      <Layout type="parent" className={`${styles.main} ${colors2}`}>
        <Layout type="stretch">
          <Root>
            <Grid>
              <Grid
                size={1}
                className={styles.nav}
                align="top"
                padding={top}
                margin={horizontalHalf}
              >
                <Grid>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                  </ul>
                </Grid>
              </Grid>
              <Grid
                size={7}
                className={styles.content}
                align="top"
                padding={top}
              >
                <P>Text A</P>
                <Card height={140}>First Block</Card>
                <Card>Second Block</Card>
                <P>Text B</P>
                <Card>Another Block</Card>
                <P>Text C</P>
                <Card>Another Block</Card>
                <P>Text D</P>
                <Card>Another Block</Card>
                <P>Text E</P>
                <Card>Another Block</Card>
                <P>Text F</P>
                <Card height={210}>Final Block</Card>
                <Card>Ok last one</Card>
                <P>
                  {loremIpsum.substr(0, 250)}...
                </P>
              </Grid>
              <Grid size={4} className={styles.clippy} padding={horizontalHalf}>
                <Grid
                  align="top"
                  className={colors1}
                  padding={top}
                  margin={horizontal}
                >
                  <Grid margin={bottom}>Side bar</Grid>
                </Grid>
              </Grid>
            </Grid>
          </Root>
        </Layout>
        <Layout dev={1}>
          <Root>
            <Grid margin={horizontalHalf}>
              <h1>Footer</h1>
            </Grid>
          </Root>
        </Layout>
      </Layout>
    </Layout>
  )
}