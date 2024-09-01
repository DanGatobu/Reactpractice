import { MouseEvent, useState  } from "react";


interface ShowListProps{
  towns: string[];
  name: string;
  onsltItem: (indx:string) =>void;
}

function ShowList( {towns ,name ,onsltItem}: ShowListProps) {

    
    const handleHs= (event:MouseEvent) => console.log("Hello World");
    const [selectedIndex,setSelectedIndex]=useState(-1);
    



    return (
     <>
     <h1>{name}</h1>
      <ul className="list-group">
        {towns.map((town,index) => (
          <li key={index} 
          className={ selectedIndex===index ? "list-group-item active" : "list-group-item"} 
          onClick={()=> {setSelectedIndex(index)
          onsltItem(town)
          }} 
          >{town} 
          </li>
        ))}
      </ul>
     </>
    );
}

export default ShowList; 
//  Now, we will import the ShowList component in the App.tsx file and use it.