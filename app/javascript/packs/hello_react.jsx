// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Clock = () => {
  const [time, setTime] = useState(new Date())
  const interval = setTimeout(() => setTime(new Date()), 1000)

  return <div>{time.toISOString()}</div>
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Clock />,
    document.body.appendChild(document.createElement('div')),
  )
})
