import React from 'react'
import PropTypes from 'prop-types'
import { Card, Typography, CardContent } from '@material-ui/core'

const styles = {
  header: {
    color: 'red'
  }
}

const Landing = props => {
  const { test } = props
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Pulled from redux: {test}</Typography>
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
