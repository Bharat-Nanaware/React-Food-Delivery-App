import '../../styles/AvailableMeals.css';
import Card from '../Layouts/Card';
import MealItem from './MealItem/MealItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiurl } from '../env/env';


const AvailableMeals = () => {

  useEffect(() => {
    loadFoods();
  }, []);

  const [foods, setFoodList] = useState([]);

  const loadFoods = async () => {
    const res = await axios.get(apiurl);
    setFoodList(res.data);

  };


  const mealsList = foods.map((meal) => (
    <MealItem
      id={meal.foodID}
      key={meal.foodID}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className="meals">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;