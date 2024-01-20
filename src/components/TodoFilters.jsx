
function TodoFilters({filter, setFilter, sort, setSort}) {
    return (
        <div className='containerFilter'>
            <div className="filterStatus">
                <p>Status</p>
                <select value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completo</option>
                    <option value="Incomplete">Incompleto</option>
                </select>
            </div>
            <button onClick={() => setSort("ASC")}>ASC</button>
            <button onClick={() => setSort("DESC")}>DESC</button>
        </div>
    )
}

export default TodoFilters