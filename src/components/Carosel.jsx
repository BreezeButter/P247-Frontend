

export default function Carosel() {
  return (
    <div className="carousel w-full h-full">
    <div id="slide1" className="carousel-item relative w-full">
      <img src="https://images.pexels.com/photos/4422098/pexels-photo-4422098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle btn-primary hover:scale-125 duration-200">❮</a> 
        <a href="#slide2" className="btn btn-circle btn-primary  hover:scale-125 duration-200">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src="https://images.pexels.com/photos/1546911/pexels-photo-1546911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle btn-primary hover:scale-125 duration-200">❮</a> 
        <a href="#slide1" className="btn btn-circle btn-primary hover:scale-125 duration-200">❯</a>
      </div>
    </div>
  </div>
  )
} 
