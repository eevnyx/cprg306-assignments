"use client";
import {useEffect, useState} from "react";

const fetchMealIdeas = async (ingredient) =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  } 
  catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
};

export default function MealIdeas({ingredient}) {
  const [meals, setMeals] = useState([]);
  useEffect(() =>{
    if (ingredient) {
      fetchMealIdeas(ingredient).then(setMeals);
    }
  }, [ingredient]);

  return(
    <div className="p-4 bg-zinc-700 text-white rounded-lg max-w-4xl w-full">
      <h2 className="text-2xl font-bold mb-4">Meal Ideas for {ingredient}</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {meals.map((meal) =>(
          <li key={meal.idMeal} className="p-4 border rounded-lg bg-white text-black">
            <h3 className="font-bold">{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-32 object-cover rounded" />
          </li>
        ))}
      </ul>
    </div>
  );
}