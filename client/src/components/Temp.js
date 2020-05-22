import React from 'react'
import {Card, Typography, CardHeader, CardContent} from '@material-ui/core'
import PropTypes from 'prop-types'

const styles = {
  header: {
    color: 'red'
  }
}

const Temp = props => {
  return (
    <Card>
      <CardContent>
      <div style={styles.header}>Welcome to awsamber.com hosted with AWS S3</div>
      <Typography>Created by Amber Jones and under construction...</Typography>
      </CardContent>
    </Card>
  )
}

Temp.propTypes = {

}

export default Temp
