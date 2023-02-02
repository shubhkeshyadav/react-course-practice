import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useState, useEffect } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState({});
  const [error, setError] = useState(false);
  let content = "";

  const getMeals = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + "/meals");

      if (response.status !== 200) {
        throw new Error("Error! Something went wrong");
      }
      const data = await response.json();

      setMeals(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

  if (error) {
    return (
      <section>
        <h1>{error}</h1>
      </section>
    );
  }

  if (meals.length === 0) {
    return (
      <section>
        <h1>Nothing to display</h1>
      </section>
    );
  }

  if (meals.length > 0) {
    content = meals.map((meal) => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
