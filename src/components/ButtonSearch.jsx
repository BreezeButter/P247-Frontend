

export default function ButtonSearch() {
    return (
        <div className="relative">
            <ul className="menu lg:menu-horizontal bg-primary rounded-box  text-white text-xl z-10 flex ">
                <li className=" hover:bg-slate-50 hover:text-primary rounded-xl "><a>Wet Food</a></li>
                <li className=" hover:bg-slate-50 hover:text-primary rounded-xl "><a>Dry Food</a></li>
                <li>
                    <details >
                        <summary className=" hover:bg-slate-50 hover:text-primary rounded-xl ">Brand</summary>
                        <ul className=" text-primary hover:bg-slate-50 hover:text-primary rounded-xl ">
                            <li ><a>SMART HEART</a></li>
                            <li><a>BUZZ</a></li>
                            <li><a>ROYAL CANIN</a></li>
                            <li><a>PETDIGREE</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    )
}
