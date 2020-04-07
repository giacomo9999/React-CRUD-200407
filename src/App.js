import React, { Component } from "react";
import AddFoodItemForm from "./AddFoodItemForm";
import EditFoodItemForm from "./EditFoodItemForm";
import FoodItemList from "./FoodItemList";

// https://dev.to/codingnninja/react-made-easy-a-quick-guide-to-making-crud-apps-with-react-3668

class App extends Component {
  state = {
    id: null,
    food: "",
    cost: "",
    foodItem: {},
    foodItems: [],
    editing: false,
  };

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  addFoodItem = (e) => {
    e.preventDefault();
    if (!this.state.food) return;
    const foodItem = {
      id: this.state.foodItems.length + 1,
      food: this.state.food,
      cost: this.state.cost,

    };
    console.log("addFoodItem:", foodItem);

    this.setState({
      food: "",
      cost: "",
      foodItem: foodItem,
      foodItems: [...this.state.foodItems, foodItem],
    });
  };

  editFoodItem = (foodItem) => {
    console.log("editFoodItem here...");
    this.setEditing(true);
    this.setState({
      food: foodItem.food,
      cost: foodItem.cost,
      foodItem: foodItem,
    });
    console.log("editFoodItem here...", this.state);
  };

  setEditing = (value) => {
    console.log("setEditing here...");
    this.setState({ editing: value });
  };

  updateFoodItem = (e) => {
    e.preventDefault();
    const updatedFood = this.state.food;
    const updatedCost = this.state.cost;
    const updatedFoodItem = Object.assign({}, this.state.foodItem, {
      food: updatedFood,
      cost: updatedCost,
    });
    const foodItems = this.state.foodItems.map((foodItem) =>
      foodItem.id === this.state.foodItem.id ? updatedFoodItem : foodItem
    );
    this.setState({ food: "", cost: "", foodItems: foodItems, editing: false });
  };

  deleteFoodItem = (itemToDelete) => {
    console.log("deleteFoodItem deleting...", itemToDelete);
    const foodItems = this.state.foodItems.filter(
      (item) => item.id !== itemToDelete.id
    );
    this.setState({ foodItems: foodItems });
  };

  render() {
    const { cost, food, foodItems, editing } = this.state;
    return (
      <div className="container">
        <div className="App">
          <div className="row App-main">
            <FoodItemList
              foodItems={foodItems}
              deleteFoodItem={this.deleteFoodItem}
              editFoodItem={this.editFoodItem}
            />
          </div>
          <div className="row App-main">
            {editing ? (
              <EditFoodItemForm
                food={this.state.food}
                cost={this.state.cost}
                handleInputChange={this.handleInputChange}
                setEditing={this.setEditing}
                updateFoodItem={this.updateFoodItem}
              />
            ) : (
              <AddFoodItemForm
                food={this.state.food}
                cost={this.state.cost}
                handleInputChange={this.handleInputChange}
                addFoodItem={this.addFoodItem}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
