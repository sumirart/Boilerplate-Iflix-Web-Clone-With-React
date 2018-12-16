import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        {/* <hr style={{ marginBottom: 0 }}/> */}
        <div className="container" style={{ marginTop: 5 }}>
          <p className="text-muted text-center">Copyright © Elang 4 2018. All rights reserved.</p>
        </div>
      </footer>
    )
  }
}

export default Footer