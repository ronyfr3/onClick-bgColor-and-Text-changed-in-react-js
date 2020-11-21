import React,{useState} from 'react'
import './ChangeColor.css'

function ClickChangeColor() {
    const [color,setColor] = useState('')

    return (
        <div>
            <div className={color?'colorDiv':'changeDiv'}></div>

          <div>
              <button 
               className={color ? 'btn2Style': 'btnStyle'}
               onClick={()=>setColor(!color)}
              >{color ? 'CLICKED': 'CLICK' }</button>
          </div>
        </div>
    )
}

export default ClickChangeColor
