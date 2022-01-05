import ReactMarkdown from "react-markdown";

function Main({ activeNote, onUpdateNote, changeTheme }) {
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        })
    }
    if (!activeNote) return (
        <div className="no-note">
            <div className="app-main-no-note">No note selected</div>
            <button>X</button>
            <div className="app-main-navigation-bar">
                <button onClick={() => changeTheme('#000000', '#000000', '#000000')} className="app-main-theme-button-one">Theme one</button>
                <button onClick={() => changeTheme('#000000', '#000000', '#000000')} className="app-main-theme-button-one">Theme one</button>
                <button onClick={() => changeTheme('#000000', '#000000', '#000000')} className="app-main-theme-button-one">Theme one</button>
                <button onClick={() => changeTheme('#000000', '#000000', '#000000')} className="app-main-theme-button-one">Theme one</button>
            </div>
        </div>
    )
    return (
        <div className="app-main">
            <button className="app-main-theme-button">X</button>
            <div className="app-main-navigation-bar">
                <button onClick={() => changeTheme('#000000', '#000000', '#000000')} className="app-main-theme-button-one">Theme one</button>
                <button onClick={() => changeTheme('#000000', '#000000', '#000000')} className="app-main-theme-button-one">Theme one</button>
                <button onClick={() => changeTheme('#000000', '#000000', '#000000')} className="app-main-theme-button-one">Theme one</button>
                <button onClick={() => changeTheme('#000000', '#000000', '#000000')} className="app-main-theme-button-one">Theme one</button>
            </div>
            <div className="app-main-edit">
                <input
                    type="text"
                    id="title"
                    value={activeNote.title}
                    autoFocus
                    onChange={(e) => onEditField("title", e.target.value)}
                />
                <textarea
                    placeholder="Write your note here"
                    value={activeNote.body}
                    onChange={(e) => onEditField("body", e.target.value)}
                />
            </div>
            <div className="app-main-preview">
                <div className="app-main-preview-title">{activeNote.title}</div>
                <div className="app-main-preview-body"><ReactMarkdown>{activeNote.body}</ReactMarkdown></div>
            </div>
        </div>
    )
}

export default Main;