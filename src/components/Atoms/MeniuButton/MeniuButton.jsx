import './MeniuButton.css'

function MeniuButton({avatarImg , rounded , active}) {
  return (
      <div className={`sidebar-meniu-button ${active ? 'active' : ""}`}>
        <img src={avatarImg}  className={`${rounded ? 'rounded' : ""}`}/>
      </div>
  );
}

export default MeniuButton;