import React from 'react';
import { useNavigate } from 'react-router-dom';



function Table() {
  const navigate=useNavigate();
  function handleClick(){
    navigate("/")
  }
  
  return (

<table >
<tr>
<th>USERNAME</th>
<th>EMAIL</th>
<th>PASSWORD</th>
</tr>

<tr>
<td>sita </td>
<td>abchh@gmail.com</td>
<td>1234</td>
</tr>
<tr>
<td>ram</td>
<td>abchh@gmail.com</td>
<td>1234</td>
</tr>
<tr>
            <td>thara </td>
            <td>abgh@gmail.com</td>
            <td>1234</td>
        </tr>
        <div>
        <button onClick={handleClick}>go to Home login page</button>
      </div>
            

      </table>
      
      
  
  )
}

export default Table;



