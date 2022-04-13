import React from 'react'
import PropTypes from 'prop-types'

function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} children={children} disabled={isDisabled} className={`btn btn-${version}`}>
        
        {children}
        </button>
  )
}

Button.defaultProps ={
    version:'primary',
    type:'button',
    isDisabled: false,
}

Button.propTypes={
    type: PropTypes.string,
    version: PropTypes.string,
    isDisabled: PropTypes.bool,
    children: PropTypes.node.isRequired, 
}

export default Button