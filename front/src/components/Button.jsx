import React from 'react'

function Button({ name, callback}) {
  return (
    <main>
      <button
        type="button"
        onClick={callback}
      >
        { name }
      </button>
    </main>
  )
}

export default Button;