import React from 'react'

function TodoSearch({search, setSearch}) {
    return (
        <form>
            <input type='text' placeholder='Pesquisar' value={search} onChange={e => setSearch(e.target.value)}/>
            {/* <input type='submit' value={"Pesquisar"} /> */}
        </form>
    )
}

export default TodoSearch