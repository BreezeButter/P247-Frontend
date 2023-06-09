import ButtonSearch from "../components/ButtonSearch";
import ProductsList from '../features/product/components/ProductsList'
import { useEffect, useState } from "react";
import * as productService from "../api/product";





export default function DogPage() {

  // const array = [

  //   { img:'https://res-1.cloudinary.com/central-pet-n-me/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/1/1/1101011910001-1.jpg?_i=AB',
  //   brand:'A',productName:'B',price:'C'},

  //   { img:'https://res-1.cloudinary.com/central-pet-n-me/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/1/1/1101011910001-1.jpg?_i=AB',
  //   brand:'A',productName:'B',price:'C'},

  //   { img:'https://res-1.cloudinary.com/central-pet-n-me/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/1/1/1101011910001-1.jpg?_i=AB',
  //   brand:'A',productName:'B',price:'C'},
  //   { img:'https://res-1.cloudinary.com/central-pet-n-me/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/1/1/1101011910001-1.jpg?_i=AB',
  //   brand:'A',productName:'B',price:'C'},
  //   { img:'https://res-1.cloudinary.com/central-pet-n-me/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/1/1/1101011910001-1.jpg?_i=AB',
  //   brand:'A',productName:'B',price:'C'},
  //   { img:'https://res-1.cloudinary.com/central-pet-n-me/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/1/1/1101011910001-1.jpg?_i=AB',
  //   brand:'A',productName:'B',price:'C'}

  // ]

  const [array, setArray] = useState([])

  const Array = async () => {
    try {
      const result = await productService.getAllProductDog()
      setArray(result.data)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    Array();
  }, [])

  console.log(array)



  return (
    <div>

      <div className="flex items-center justify-center mb-12">
        <div className="text-3xl text-primary mt-12 mr-12">
          <h1> 🐶 Dog Products</h1>
        </div>
        <div className="mt-12 z-10">
          <ButtonSearch />
        </div>
      </div>

      <div >
        <ProductsList array={array} />
      </div>

    </div>

  )
}
