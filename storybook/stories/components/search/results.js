// @flow
import React from 'react'
import { Col, Grid } from 'reflex'
import { times } from 'lodash'
import styles from '../../../shared/stories.css'
import { bottomHalf } from '../../../shared/marginTypes'

export default function SearchResults({
  results = 1,
  pages = 4,
  size,
}: {
  results?: number,
  pages?: number,
  size?: number,
}) {
  return (
    <Grid size={size} dev={5} align="top">
      <Grid>
        <Col size={4}>
          <input placeholder="Sort by..." />
        </Col>
        <Col size={5} />
        <Col size={3} align="center" justify="right">
          <Grid dev={4} size={2}>
            <Grid justify="center">&lt;</Grid>
          </Grid>
          <Grid size={7}>
            <Grid justify="center">Page 1 of 12</Grid>
          </Grid>
          <Grid dev={4} size={2}>
            <Grid justify="center">&gt;</Grid>
          </Grid>
        </Col>
      </Grid>
      {times(results, key =>
        <Grid key={key}>
          <Col size={5}>
            <Grid margin={bottomHalf} dev={1}>
              Orci tempus venenatis
            </Grid>
            <Grid margin={bottomHalf} dev={1}>
              1/6/2017 at 14:50 - 1700 Minor Ave
            </Grid>
            <Grid>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eu ipsum quis mi rhoncus luctus. Quisque eros lorem,
              elementum et...
            </Grid>
          </Col>
          <Col size={4} align="top">
            <Grid margin={bottomHalf} dev={4}>
              status text ipsum
            </Grid>
            <Grid dev={2}>status sub lorem</Grid>
          </Col>
          <Col size="auto">
            <Grid justify="center" align="center" className={styles.image}>
              IMAGE
            </Grid>
          </Col>
        </Grid>
      )}
      <Col justify="center" size="auto">
        <Col marginBottom={0} size="fit">
          <Grid justify="center" className={styles.paginationArrow}>
            &lt;
          </Grid>
        </Col>
        <Col marginBottom={0} size={4} align="center">
          {times(pages, num =>
            <Col marginBottom={0} size="auto" key={num}>
              {num + 1}
            </Col>
          )}
          <Col marginLeft={0} marginBottom={0} size="auto">
            ...
          </Col>
          <Col marginLeft={0} marginBottom={0} size="auto">
            1,485
          </Col>
        </Col>
        <Col marginBottom={0} size="fit">
          <Grid justify="center" className={styles.paginationArrow}>
            &gt;
          </Grid>
        </Col>
      </Col>
    </Grid>
  )
}
