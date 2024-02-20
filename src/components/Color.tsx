import React, { FC, useState } from 'react';

interface ColorProps {
    getBackground: (color: string) => void
}

export const Color: FC<ColorProps> = ({getBackground}) => {
    const [color, setColor] = useState('');
    const [rgb, setRgb] = useState('rgb()')

    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        const {value} = e.target;
        setColor(value);

        if(value.trim().length >= 7){
            if(isCorrect(value.trim())){
                setRgb(hexToRGB(value))
                getBackground(value)
            } else {
                setRgb('Ошибка');
                getBackground('red')
            }
        } else {
            setRgb('rgb()')
        }
    }

    function isCorrect (value: string) {
        if(value[0] === '#' && value.length === 7){
            const arr = Array.from(value.slice(1));
            return arr.every(el => el.match(/[0-9a-f]/i))
        }
      return false
    }

    function hexToRGB(hex: string) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        return "rgb(" + r + ", " + g + ", " + b + ")";
    }

  return (
    <div className='container'>
        <input name='color' value={color} onChange={handleChange} className='color'/>
        <div className='rgb'>{rgb}</div>
    </div>
  )
}
