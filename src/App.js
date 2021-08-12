import React, { useState, useEffect } from "react";
import './App.css';
import images from './Data';

const TagButton = ({name, handleSetTag}) => {
  return <button className="Button" onClick={()=>handleSetTag(name)}>{name.toUpperCase()}</button>;
};

function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function App() {
  {/*Handles image tags*/}
  const [tag, setTag] = useState('mountain');
  const [filteredImages, setFilteredImages] = useState([]);
 
  {/*Filter handler*/}
  useEffect(()=>{
    setFilteredImages(images.filter(image => image.tag === tag)); 
  }, [tag]);

  return (
    <div className="App" handleSetTag={setTag}>

      {/*Container containing buttons*/}
      <div className="Buttons">
        <TagButton name="mountain" handleSetTag={setTag}/>
        <TagButton name="bird" handleSetTag={setTag}/>
        <TagButton name="food" handleSetTag={setTag}/>
      </div>

      {/*Container containing description of images*/}
      <div className="Description">
        {Capitalize(tag)} Images
      </div>

      {/*Container containing cards of images*/}
      <div className='Container'>
        {filteredImages.map(image=>(
          <div className="Card" key={image.id}>
            <img className='Images' src={`/images/${image.imageName}`} alt=""/>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
