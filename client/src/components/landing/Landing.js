import React from 'react'
import PropTypes from 'prop-types'
import { Card, Typography, CardContent } from '@material-ui/core'
import Header from './Header';

const styles = {
  header: {
    color: 'red'
  },
  card: {
    background: 'green',

  }
}

const Landing = props => {
  const { test } = props
  return (
    <div style={styles.card}>
      <Header></Header>
      <Card>
      <CardContent>
        {test}
      <div style={styles.header}>Welcome to awsamber.com hosted with AWS S3</div>
      <Typography>Created by Amber Jones and under construction...</Typography>
      </CardContent>
      </Card>
    </div>
  )
}

Landing.propTypes = {
  test: PropTypes.string
}

export default Landing
