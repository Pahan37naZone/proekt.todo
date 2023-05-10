const AppHeader = ({toDo, done}) =>{
    return (
       <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1>My todo list</h1>
                </div>
                <div className="col-6 mt-3 text-secondary">
                    <h4>{toDo} active, {done} done</h4>
                </div>
            </div>
       </div>
    );
}

const SearchPanel = () =>{
   
    const searchText = 'Ask me everything';
    const searchStyle = {
        frontSize:'20px'
    }

    return (
        <input style={searchStyle}
        placeholder={searchText}
        className="myClass"/>
    )
}

export default AppHeader