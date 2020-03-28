import React from 'react'

const Footer = () => {
  return (
    <div class='ui horizontal divider'>
      <div class='ui segment basic center aligned'>
        <p>
         Developed with {' '}
          <a href='https://reactjs.org/' target='_blank'>
            <i
              aria-hidden='true'
              class='react icon large'
            />
          </a>
         by {' '}
          <a href='https://github.com/r1oga' target='_blank'>
               @r1oga
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
