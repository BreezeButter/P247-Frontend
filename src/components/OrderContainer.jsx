import Order from "./Order"


export default function OrderContainer({ orderList }) {

    const list = orderList
    console.log("------->", list)

    return (
        <div className="overflow-x-auto">
            <table className="table table-lg table-pin-rows table-pin-cols text-2xl">
                <thead className=" text-lg">
                    <tr>
                        <td>OrderId</td>
                        <td>ProductName</td>
                        <td>Amount</td>
                        <td>Price</td>
                        <td>Order Date-Time</td>
                        <td>Status</td>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(el => (<Order list={el} key={el.orderItemId} />) )}
                </tbody>
            </table>
        </div>
    )
}
