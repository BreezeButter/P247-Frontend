import { useState } from "react";
import Card from "../components/Card";
import LandingHead from "../components/LandingHead";


export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <div>
        <LandingHead />
      </div>
      <div>
        <div className=" m-16">
          <h1 className=" text-3xl text-primary">
          🖐️ Shopping By Category
          </h1>
        </div>
        <div className="m-16 flex flex-wrap gap-12 items-center justify-between px-16 ">
          <Card
            img="/src/assets/dog-card.jpg"
            pet="DOG"
            type="🍪#Food" />
          <Card
            img="/src/assets/cat-card.jpg"
            pet="CAT"
            type="🍪#Food" />
          <Card
            img="/src/assets/toy-card.jpg"
            pet="PET"
            type="🪀#Toy" />
        </div>
      </div>
  
      <div className="bg-primary ">
      <div className=" m-16">
          <h1 className=" text-3xl text-secondary">
          🏆  Popular Products
          </h1>
        </div>

      <div className="m-16 flex flex-wrap gap-12 items-center justify-between px-16 ">
          <Card
            img="https://www.feedmeplease.com/images/pdimg/2027/1.webp"
            pet="DOG"
            type="🍪#Food" />
          <Card
            img="https://www.feedmeplease.com/images/pdimg/2027/1.webp"
            pet="CAT"
            type="🍪#Food" />
          <Card
            img="https://www.feedmeplease.com/images/pdimg/2027/1.webp"
            pet="PET"
            type="🪀#Toy" />
        </div>
      </div>

    </div>
  )
}
