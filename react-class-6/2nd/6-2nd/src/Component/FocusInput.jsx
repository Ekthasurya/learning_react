import React, { useEffect, useRef, useState } from 'react'

const FocusInput = () => {
    const inputfocus = useRef(null);
    const [flag, setFlag] = useState(false);
    useEffect(() => {
      if (flag) {
        inputfocus.current.focus();
      }
    }, [flag]);
  return (
    <div>
    <button onClick={() => setFlag(!flag)}>
      {flag ? "unmount" : "mount"}
    </button>
    {flag && <input ref={inputfocus} type="text" />}
  </div>
  )
}

export default FocusInput