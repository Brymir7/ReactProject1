
function Sidebar ({notes, onAddNote, onDeleteNote, activeNote, setActiveNote}) {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)
    return(
    <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h3> Notes </h3>
            <button className="Add-button" onClick={onAddNote}> Add </button>
       </div>
        <div className="app-sidebar-notes">
    
        {sortedNotes.map((note)=> (
            <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={()=> {setActiveNote(note.id)}}>
                <div className="app-sidebar-title">
                    <h5>{note.title && note.title.substr(0,35) + "."}</h5>
                    <button className="Delete-button" onClick={()=> onDeleteNote(note.id)}> Delete</button>
                </div>
                <div className="app-sidebar-content">
                    <p>{note.body && note.body.substr(0, 60) + "..."}</p>
                    <small>Last modified {new Date(note.lastModified).toLocaleDateString("en-GB", {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}</small>
                </div>
            </div>
            ))}
            
        </div>
    </div>
    )
}

export default Sidebar;