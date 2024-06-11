import "./SearchBar.css"
import searchIcon from "../../../img/searchIcon.png"
import cancelSearch from "../../../img/close.png"


function SearchBar({searchingValue , searchFunction , clearSearch}) {
  return (
   <div className="search-box-background">
    <div className="search-wrapper">
        <input className="search-box" onChange={(e)=>searchFunction(e)} value={searchingValue}/> 
       {!searchingValue ? <img src={searchIcon}/> : <img className="clearSearch" src={cancelSearch} onClick={clearSearch}/>}  
    </div>
   </div>
  );
}

export default SearchBar;
