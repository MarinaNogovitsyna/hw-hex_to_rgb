import React, { useState } from 'react'
import { Color } from './Color';

export const Wrapper = () => {
    const [background, setBackground] = useState('#777777');

    const getBackground = (color: string) => {
        setBackground(color)
    }

  return (
    <div 
        style={{background: `${background}`}}
        className='wrapper'
    >
        <Color getBackground={getBackground}/>
    </div>
  )
}
