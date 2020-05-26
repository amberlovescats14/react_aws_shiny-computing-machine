import React from 'react'
import PropTypes from 'prop-types'
import { Card, Typography, CardContent } from '@material-ui/core'
import Header from './Header';

const styles = {
  header: {
    color: 'red'
  }
}

const Landing = props => {
  const { test } = props
  return (
    <Card>
      <Header></Header>
      <CardContent>
        {test}
      <div style={styles.header}>Welcome to awsamber.com hosted with AWS S3</div>
      <Typography>Created by Amber Jones and under construction...</Typography>
      </CardContent>
    </Card>
  )
}

Landing.propTypes = {
  test: PropTypes.string
}

export default Landing
