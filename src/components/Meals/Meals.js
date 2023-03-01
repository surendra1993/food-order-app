import React from "react";

import MealsSummary from "./MealsSummary";
import AvailabelMeals from "./AvailableMeals";

const Meals = () => {
    return (
        <React.Fragment>
            <MealsSummary />
            <AvailabelMeals />
        </React.Fragment>
    );
};

export default Meals;