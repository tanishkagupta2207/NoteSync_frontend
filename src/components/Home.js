import React from "react";
import Notes from "./Notes";

const Home = (props) => {
  return (
    <div>
      <h1 style={{'textAlign': 'center', marginTop: '70px'}}>NOTESYNC</h1>
        <Notes showAlert={props.showAlert}/>
    </div>
  );
};

export default Home;