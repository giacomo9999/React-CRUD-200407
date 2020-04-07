import React from "react";

const FoodItemList = (props) => {
  console.log(props.foodItems);
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Food</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.foodItems.length > 0 ? (
          props.foodItems.map((foodItem) => (
            <tr key={foodItem.id}>
              <td>{foodItem.id}</td>
              <td>{foodItem.food}</td>
              <td>{foodItem.cost}</td>
              <td>
                <button
                  className="btn btn-primary ml-2"
                  onClick={() => props.editFoodItem(foodItem)}
                >
                  Edit Item
                </button>
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => props.deleteFoodItem(foodItem)}
                >
                  Delete Item
                </button>
                {/* <button
                  className="btn btn-info ml-2"
                  onClick={() => props.boughtFoodItem(foodItem)}
                >
                  {foodItem.status ? "bought" : "pending"}
                </button> */}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No items </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default FoodItemList;
