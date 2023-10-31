import React ,{ useState } from 'react'
import './Body.css'


const BodyC =() =>{   
    const [ count, setCount ] = useState(0)
    const [ count2, setCount2 ] =useState(0)
    const [ count3, setCount3 ] =useState(0)

    function like() {
        setCount(count + 1);

    } 
    function comment() {
        setCount2(count2 + 1);

    } 
    function subscribe() {
        setCount3(count3 + 1);

    } 
   return (
            <div className='body'>
             <div className='firstdiv'>         
                <p  >
                    hiii
                   </p>
               
            </div>
            <div ClassName='seconddiv'>
                
            <nav>
        <table>
               <tr>
                <th> like:{count}</th>
                <th> comment:{count2}</th>
                <th> subscribe:{count3}</th>
               </tr>

               <tr>
                <td><button onClick={like}>like</button></td>
                <td><button onClick={comment}>comment</button></td>
                <td><button onClick={subscribe}>share</button></td>
               </tr>
               </table>
               </nav>
               </div>
               </div>
             
    )
}
export default BodyC 