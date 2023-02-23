import {useState} from 'react'
function AddMovie(props){
    const {addNewMovie} = props
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [IMDBRating, setIMDBRating] = useState(5);
    const [hasOscars, setHasOscars] = useState(true);
   
    const handleTitle = e => setTitle(e.target.value)
    const handleDirector = e => setDirector(e.target.value);
 
    const handleRating = e => setIMDBRating(e.target.value);
   
    const handleOscars = e => setHasOscars(e.target.checked);
    // e.target.checked is a boolean value from the `checkbox` input
  

    const handleSubmit = (e) => {        // <==  ADD
        e.preventDefault();
        const newMovie = { title, director, IMDBRating, hasOscars };
        props.addNewMovie(newMovie)


        console.log("Submitted: ", newMovie);
      
        setTitle("");
        setDirector("");
        setIMDBRating(5);
        setHasOscars(true);
          }
     
        return (
        <div className="AddMovie">
        <h4>Add a Movie</h4>
    
        <form onSubmit={handleSubmit}>
          <label>Title: </label>
          <input 
              type="text" 
              name="title" 
              value={title} 
              onChange={handleTitle}
          />
          
    
          <label>Director: </label>
          <input 
              type="text" 
              name="director" 
              value={director} 
              onChange={handleDirector}
          />
    
          <label>IMDB Rating: </label>
          <input 
              type="number" 
              name="IMDBRating" 
              value={IMDBRating} 
              onChange={handleRating}
          />
    
          <label>Won Oscars: </label>
          <input 
              type="checkbox" 
              name="hasOscars" 
              checked={hasOscars} 
              onChange={handleOscars}
          />
          
          <button type="submit">Add a Movie</button>
        </form>
      </div>
      )
  }
   
  export default AddMovie;