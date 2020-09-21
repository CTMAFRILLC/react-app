import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    return (
      <section id="sa_container">
        {this.props.children}
      </section>
    )
  }
}
