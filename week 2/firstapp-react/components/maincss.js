
import '../assets/mystyle.css'
import image from '../assets/image.jpg'

const mystyle={
    color: 'white',
    backgroundColor: 'grey',
    padding: '10px'
  }
  function Maincss(){
    const loggedIn= true;
    const handleclick =()=>{
        alert("Button Clicked")
    }
    const myarray= [{id: 1, name:'user1'}, {id: 2, name: 'user2'}, {id: 3, name: 'user3'}]
    return(
        <div style={mystyle}>
            <h3>Main component</h3>
            <button className='mybtn' onClick={handleclick}>{loggedIn? 'logout': 'login'}</button>
            <img src={image} height='100'/>
            <ul>
                {
                    myarray.map(item=>(
                        <li key={item.id}>item.id</li>
                    ))
                }
            </ul>
        </div>
    );
  }
  
  export default Maincss;