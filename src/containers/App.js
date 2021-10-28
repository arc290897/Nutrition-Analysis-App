import React from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import Body from '../components/Body';

class App extends React.Component{
	constructor(){
		super();
		this.state={
			newFood:false,
			input:"",
			calories:"",
			totalWeight:"",
			TotalFat:"",
			SaturatedFat:"",
			TransFat:"",
			Cholestrol:"",
			Sodium:"",
			TotalCarb:"",
			Fibre:"",
			Protein:"",
			Vitamin_D:"",
			Calcium:"",
			Iron:"",
			Potassium:""
		}
	}

	newFoodButton = () => {
		if(this.state.input === ""){
			alert("enter food");
			return;
		}
		this.setState({newFood:true});
		let url="https://api.edamam.com/api/nutrition-data?app_id=867c94d1&app_key=d42d591b45908f25fd924ed83151e267&ingr=";
		fetch(url+this.state.input)
		.then(resp => resp.json())
		.then(output => {this.setState({calories:output.calories,totalWeight:output.totalWeight,TotalFat:output.totalNutrients.FAT.quantity,
			SaturatedFat:output.totalNutrients.FASAT.quantity,TransFat:output.totalNutrients.FAPU.quantity,
			Cholestrol:output.totalNutrients.CHOLE.quantity,Sodium:output.totalNutrients.NA.quantity,
			TotalCarb:output.totalNutrients.CHOCDF.quantity,Fibre:output.totalNutrients.FIBTG.quantity,Protein:output.totalNutrients.PROCNT.quantity,
			Vitamin_D:output.totalNutrients.VITD.quantity,Calcium:output.totalNutrients.CA.quantity,Iron:output.totalNutrients.FE.quantity,
			Potassium:output.totalNutrients.K.quantity})})
		.catch(error => console.log(error))
	}

	reload = () =>{
		window.location.reload();
	}


	onChange = (e) =>{
		this.setState({input:e.target.value});
	}
	render(){
		return (
			<div>
			    <Navbar />
			    <Body newFood={this.state.newFood} newFoodButton={this.newFoodButton} reload={this.reload} onChange={this.onChange}
			    calories={this.state.calories} totalWeight={this.state.totalWeight} TotalFat={this.state.TotalFat} 
			    SaturatedFats={this.state.SaturatedFat} TransFat={this.state.TransFat} Cholestrol={this.state.Cholestrol}
			    Sodium={this.state.Sodium} Carb={this.state.TotalCarb} Fibre={this.state.Fibre} Protein={this.state.Protein}
			    Vitamin_D={this.state.Vitamin_D} Calcium={this.state.Calcium} Iron={this.state.Iron} Potassium={this.state.Potassium}/>
		    </div>
  		)
	}
}

export default App;