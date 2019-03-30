import React from 'react'
import Layout from '../components/MyLayout.js'

export default class Blog extends React.Component {
      render () {
          return (
            <Layout>
            <h1>My Blog</h1>
            <h2>{this.props.url.query.slug}</h2>
        </Layout>
          )
      }
}