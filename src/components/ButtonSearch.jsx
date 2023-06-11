

export default function ButtonSearch({ array }) {
    const  prod  = array
   

    return (
        <div className="relative">
            <ul className="menu lg:menu-horizontal bg-primary rounded-box  text-white text-xl z-10 flex ">
                <li className=" hover:bg-slate-50 hover:text-primary rounded-xl "><a>Wet Food</a></li>
                <li className=" hover:bg-slate-50 hover:text-primary rounded-xl "><a>Dry Food</a></li>
                <li>
                    <details >
                        <summary className=" hover:bg-slate-50 hover:text-primary rounded-xl ">Brand</summary>
                        <ul className=" text-primary hover:bg-slate-50 hover:text-primary rounded-xl ">
                 {prod.map(el => ( <li key={el.productId} ><a>{el.brand}</a></li> ) )} 
                   </ul>
                    </details>
                </li>
            </ul>
        </div>
    )
}
