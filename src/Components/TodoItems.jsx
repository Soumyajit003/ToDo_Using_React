import './CSS/TodoItems.css'
import tick from './Assets/tick.png'
import cross from './Assets/cross.png';
import not_tick from './Assets/not_tick.png'

const TodoItems = ({no,display,text,setTodos}) => {

  const deleteData = (no)=>{
    let data = JSON.parse(localStorage.getItem("todos"))
    data = data.filter((task)=>task.no != no);
    setTodos(data);
  }

  const toggle = (no)=>{
    let data = JSON.parse(localStorage.getItem("todos"))
    for(let i=0;i<data.length;i++){
      if(data[i].no === no){
        if(data[i].display === ""){
          data[i].display = "line-through";
        }else{
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  }



  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
        {display === ""? <img src={not_tick} alt="" className='icons'/>:<img src={tick} alt="" className='icons'/>}
        <div className="todoites-text">{text}</div>
      </div>
      <img className="todoitems-cross-icon icons" onClick={()=>{deleteData(no)}} src={cross} alt="" />
    </div>
  )
}

export default TodoItems