

export default function Order(list) {

    const el = list
    console.log('+++++++++', el)

    const sumPrice = (el.list.productAmount) * (el.list.Product.price)

    return (
        <tr>
            <td>{el.list.orderId}</td>
            <td>{el.list.Product.productName}</td>
            <td>{el.list.productAmount}</td>
            <td>{sumPrice}</td>
            <td>{el.list.Product.updatedAt}</td>
            <td><div className="badge badge-outline">default</div></td>
        </tr>

    )
}
