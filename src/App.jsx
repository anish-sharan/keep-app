// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Note from "./NNote";
// import Data from "./Data"

// function create(noteItem)
// {
//   return (
//     <Note 
//       key={noteItem.key}
//       title={noteItem.title}
//       content={noteItem.content}
//     />
//   );
// }

// function App() {
//   return (
//     <div>
//       <Header />
//       {Data.map(create)};
//       <Footer />
//     </div>
//   );
// }

// export default App;
 

////// final version /////////


import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./NNote";
import CreateArea from "./CreateArea";

function App() {
const [notes,setNotes] = React.useState([]);

  function addNote(newNote)
  {
    setNotes(prevNotes =>{
      return [...prevNotes,newNote]
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem,index)=>{
        return (<Note
        title={noteItem.title}
        content={noteItem.content} 
        key={index}
        id={index}
        onDelete={deleteNote}
        />);
      })}
      <Footer />
    </div>
  );
}

export default App;

