import React from 'react'

const Footer = () => {
  return (
    <div className='ui horizontal divider'>
      <div className='ui segment basic center aligned'>
        <p>
          <a href='https://sripwoud.xyz/' target='_blank'>
            sripwoud
          </a>
            {' '} - {' '}
            <a href='https://github.com/sripwoud/markdown-previewer' target='_blank'>
                <i
                    aria-hidden='true'
                    className='github icon large'
                />
            </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
