import React from "react";

const EditFoodItemForm = (props) => {
  return (
    <form className="col-sm-4">
      <div>
        <h5>Edit An Item</h5>
        <div>
          <label className="text-black">Food Name:</label>
          <input
            type="text"
            name="food"
            value={props.food}
            onChange={props.handleInputChange}
          />
        </div>
        <div>
          <label className="text-black">Food Price</label>
          <input
            type="text"
            name="cost"
            value={props.cost}
            onChange={props.handleInputChange}
          />
        </div>
      </div>
      <button onClick={props.updateFoodItem}>Update</button>
      <button onClick={() => props.setEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditFoodItemForm;
