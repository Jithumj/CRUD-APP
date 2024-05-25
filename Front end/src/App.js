
import './App.css';
import {Component} from 'react'

 
class App extends Component{


constructor(props){
  super(props);
  this.state={
    notes:[]
  }
}

API_URL="http://localhost:5251/"

componentDidMount(){
  this.refreshNotes()
}

async refreshNotes(){
  fetch(this.API_URL+"api/Crud/GetNotes").then(response=>response.json())
  .then(data=>{
    this.setState({notes:data})
  })
}
async addClick(){
  var newNotes=document.getElementById("newNotes").value
  const data=new FormData();
  data.append("newNotes",newNotes)

  fetch(this.API_URL+"api/Crud/AddNotes",{
    method:"POST",
    body:data
  }).then(res=>res.json())
  .then((result)=>{
    alert((result))
    this.refreshNotes();
  })
}

async deleteClick(id){
  fetch(this.API_URL+"api/Crud/DeleteNotes?id="+id,{
    method:"DELETE",
  }).then(res=>res.json())
  .then((result)=>{
    alert(result);
    this.refreshNotes()
  })
}
async UpdateClick(){
  var cid=document.getElementById("cid")
  var updescription=document.getElementById("updescription")
  const data=new FormData()
  data.append("cid",updescription)
  data.append("updescription",updescription)
  fetch(this.API_URL+"api/Crud/UpdateNotes?id,description="+cid,updescription,{
    method:"PUT",
  }).then(res=>res.json())
  .then((result)=>{
    alert(result);
    this.refreshNotes()
  })
}


  render() {
    const{notes}=this.state;
    return(
    <div className="App">
      <h2>Simple CRUD App using </h2>
      <h3>React.js,Asp.Net core Web Api and Sql Server </h3><br/>
      <input id="newNotes"/><br/>
        <button onClick={()=>this.addClick()}>Add notes</button><br/><br/><br/>

        <input id="cid" placeholder='enter id to update'/><br/>
        <input id="updescription" placeholder='Description'/><br/>
        <button onClick={()=>this.UpdateClick(notes.id)}>Update notes</button><br/>
      {notes.map(note=>
        <p>
          <b>{note.description}</b>
          <button onClick={()=>this.deleteClick(notes.id)}>Delete Notes</button>
        </p>
      )}
    </div>
  );
}
}


export default App;
