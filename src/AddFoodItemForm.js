import React from "react";

const AddFoodItemForm = (props) => {
  return (
    <form onSubmit={props.addFoodItem} className="col-sm-4">
      <div>
        <h5>Add An Item</h5>
        <div>
          <label className="text-black">Food name:</label>
          <input
            type="text"
            name="food"
            value={props.food}
            onChange={props.handleInputChange}
          />
        </div>
        <div>
          <label className="text-black">Price:</label>
          <input
            type="text"
            name="cost"
            value={props.cost}
            onChange={props.handleInputChange}
          />
        </div>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default AddFoodItemForm;
