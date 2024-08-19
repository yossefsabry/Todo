
const SearchInput = () => {
    return (
        <>
            <div className="searchWrapper flex items-center justify-center gap-2">
                <label htmlFor="searchInput" className="font-thin font-2xl">Search</label>
                <input type="text" id="searchInput" className="hover:border-b-[1px] bg-transparent outline-none                       active:border-b-[1px] focus:border-b-[1px] border-l-[1px] hover:border-l-0 focus:border-l-0                        active:border-l-0 font-thin font-2xl  pr-10 py-1 transition"  />
                <i className='bx bx-search hover:bg-cyan-950 p-3 rounded-sm cursor-pointer transition' ></i>

            </div>
        </>
    );
}

export default SearchInput;
