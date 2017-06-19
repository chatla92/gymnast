// @flow
import React from 'react'
import { Grid, Layout } from '../../src'
import { Box, WithExtensions } from '../core'
import styles from './layout.css'

const SIZE = {
  TALL: { height: 200 },
  MEDIUM: { height: 150 },
  SMALL: undefined,
}

export default function() {
  const notes =
    'This example shows a page with multiple cards of different height based off the same top level grid'

  return (
    <WithExtensions notes={notes}>
      <Layout type="parent" className={`${styles.page} ${styles.hasSubheader}`}>
        <Layout fixed="top">
          <Layout className={styles.header}>
            <Grid root>
              <h1>Header</h1>
            </Grid>
          </Layout>
          <Layout
            className={styles.subheader}
            margin="vertical"
            marginSize="half"
          >
            <Grid root margin="horizontal">
              <Box size={2} type="C" />
              <Box size={2} type="C" />
              <Box size={2} type="C" />
              <Box size={2} type="C" />
              <Box size={2} type="C" />
              <Box size={2} type="C" />
            </Grid>
          </Layout>
        </Layout>
        <Layout type="parent" className={styles.main}>
          <Layout type="stretch">
            <Grid root>
              <Grid align="stretch">
                <Box size={10} type="D" style={SIZE.TALL} />
                <Box size={2} type="B" style={SIZE.SMALL} />
                <Box size={12} type="B" style={SIZE.MEDIUM} />
                <Box size={6} type="B" style={SIZE.SMALL} />
                <Box size={6} type="B" style={SIZE.SMALL} />
                <Box size={4} type="B" style={SIZE.TALL} />
                <Box size={4} type="B" style={SIZE.TALL} />
                <Box size={4} type="B" style={SIZE.TALL} />
                <Box size={4} type="B" style={SIZE.TALL} />
                <Box size={4} type="B" style={SIZE.TALL} />
                <Box size={4} type="B" style={SIZE.TALL} />
              </Grid>
            </Grid>
          </Layout>
          <Layout className={styles.footer}>
            <Grid root>
              <h1>Footer</h1>
            </Grid>
          </Layout>
        </Layout>
      </Layout>
    </WithExtensions>
  )
}