import React from 'react'
import "./Form.css";
const Forma = () => {
  return (
    <div className='Form'>
        <div className='IN'>
        <form>
            
        <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" value="John"/>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" value="Doe"/>
  <input type="submit" value="Submit"></input>
  
        </form>
        </div>
        </div>
  )
}

export default Forma