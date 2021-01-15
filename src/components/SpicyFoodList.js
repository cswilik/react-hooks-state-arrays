import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [ filterFoods, setFilterFoods] = useState("All")


  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArr = [...foods, newFood]
    setFoods(newFoodArr)
    
  }

  function handleClick(id) {
    //   const newFoodArray = foods.filter((food) => food.id !== id);
    // setFoods(newFoodArray);

    const newFoodArray = foods.map(food => {
      if (food.id === id) {
        return {...food,
        heatLevel: food.heatLevel + 1
        };
      } else {return food }
    })
    setFoods(newFoodArray)
  }

  function handleFilter(evt) {
    // console.log(evt.target.value)
    setFilterFoods(evt.target.value)
  }

  const filteredFoods = foods.filter(food => 
    {
      // debugger
      if (food.cuisine === filterFoods) {
        return food 
      } else if (filterFoods === "All") {
        return true
      }
    })

  console.log(filteredFoods)
  
 

  const renderFoods = filteredFoods.map(food => {
    return <li key={food.id} onClick={() => handleClick(food.id)}>{food.name} | {food.heat}</li>
  })

  return (
    <div>
      <select name="filter" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{renderFoods}</ul>
    </div>
  );
}

export default SpicyFoodList;
