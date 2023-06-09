

export default function Search({className}) {
    return (

        <div className={`form-control ${className}`}>
            <div className="input-group justify-center">
                <input type="text" placeholder="Search…" className="input input-bordered input-primary text-primary placeholder:text-primary w-[480px] h-[60px]" />
                <button className="btn btn-square btn-primary h-[60px]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 28 30" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
        </div>
    )
}
