

export default function Card({ img,pet,type, btn ="Buy"}) {
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl hover:scale-110 duration-200 ">
                <figure className="px-10 pt-10 ">
                    <img src={img} alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
            
                    <h2 className="card-title text-primary">{pet} <span className=" text-gray-500">{type}</span></h2>
                    <div className="card-actions">
                        <button className="btn btn-primary">{btn}</button>
                    </div>
                </div>
            </div>
        </div>  
    )
}
