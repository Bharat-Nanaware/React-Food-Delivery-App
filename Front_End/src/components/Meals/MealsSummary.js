import '../../styles/MealsSummary.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiurl } from '../env/env';

const MealsSummary = () => {

  useEffect(() => {
    loadStaticData();
  }, []);
 
  const [staticData, setstaticData] = useState({});
 
  const loadStaticData = async () => {
    const res = await axios.get(apiurl + "/GetMealSummary");
    setstaticData(res.data);
    console.log(res.data)
    
  };
  return (
    <section className="summary">
      <h2>{staticData.mealSummeryTitle}</h2>
      <p>
        {staticData.mealsummeryDescription_1}
      </p>
      <p>
       {staticData.mealsummeryDescription_2}
      </p>
    </section>
  );
};

export default MealsSummary;