import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <hr/>
        <div className="container">
          <p className="text-muted text-center">Copyright © Elang 4 2018. All rights reserved.</p>
        </div>
      </footer>
    )
  }
}

export default Footer