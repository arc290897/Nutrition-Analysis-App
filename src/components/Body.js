import React from 'react';
import './Body.css';



const Body = ({newFood,newFoodButton,reload,onChange,calories,totalWeight,TotalFat,SaturatedFats,TransFat,Cholestrol,Sodium,Carb,Fibre,Protein,Vitamin_D,Calcium,Iron,Potassium}) =>{
	return(
		<div className="outer-body">
			<div className="inside-div">
				<h1>Nutritional Analysis</h1>
				<p>Enter an ingredient list list for what you are cooking, like "1 egg,1 kg of beans,1 kg of wheat, 10 oz chickpeas", etc.</p>
				<div className="main-div">
					<div>
						<div><input onChange={onChange}/></div>
						<button onClick={newFoodButton} type="button" class="btn btn-primary mt-5">Analyze</button>
						{newFood?<button onClick={reload} type="button" class="btn btn-primary ms-2 mt-5">New Food</button>:""}
						<p className="para">We cannot calculate the nutrition of some ingredients.Please check the ingredient spelling or you
						have entered a quantities for the ingredients.</p>
						{newFood?<div className="boxing"><p>Total calories-{calories}</p></div>:""}
						{newFood?<div className="boxing"><p>Total Weight-{totalWeight}</p></div>:""}
					</div>
					<div>
						<div className="show"></div>
						{newFood?<div className="nutri-show">
							<h1>Nutrition facts</h1>
							<div className="maxwidth"></div>
							<div className="div300">
								<p style={{float:"left"}}>Amount Per Serving</p>
								<div className="flex" style={{clear:"left"}}>
									<h3>Calories</h3>
									<p>{calories}</p>
								</div>
								<div className="midwidth"></div>
								<p style={{float:"right"}}>% Daily Value*</p>
								<div className="minwidth"></div>
								<div className="flex">
									<p>Total Fat</p>
									<p>{TotalFat}g</p>
								</div>
								<div className="minwidth"></div>
								<div className="flex">
									<p>Saturated Fat</p>
									<p>{SaturatedFats}g</p>
								</div>
								<div className="minwidth"></div>
								<div className="flex">
									<p>Trans fat</p>
									<p>{TransFat}g</p>
								</div>
								<div className="minwidth"></div>
								<div className="flex">
									<p>Cholestrol</p>
									<p>{Cholestrol}g</p>
								</div>
								<div className="minwidth"></div>
								<div className="flex">
									<p>Sodium</p>
									<p>{Sodium}g</p>
								</div>
								<div className="minwidth"></div>
								<div className="flex">
									<p>Total Charbohydrate</p>
									<p>{Carb}g</p>
								</div>
								<div className="minwidth"></div>
								<div className="flex">
									<p>Dietary Fibre</p>
									<p>{Fibre}g</p>
								</div>
								<div className="minwidth"></div>
								<div className="flex">
									<p>Total sugar</p>
									<p>g</p>
								</div>
								<div className="minwidth"></div>
								<div className="flex">
									<p>Include-Added Sugar</p>
									<p>g</p>
								</div>
								<div className="minwidth"></div>
								<div className="flex">
									<p>Protein</p>
									<p>{Protein}g</p>
								</div>
								<div className="minwidth"></div>
								<div className="flex">
									<p>Vitamin D</p>
									<p>{Vitamin_D}g</p>
								</div>
								<div className="minwidth"></div>
								<div className="flex">
									<p>Calcium</p>
									<p>{Calcium}g</p>
								</div>
								<div className="minwidth"></div>
								<div className="flex">
									<p>Iron</p>
									<p>{Iron}g</p>
								</div>
								<div className="minwidth"></div>
								<div className="flex">
									<p>Pottasium</p>
									<p>{Potassium}g</p>
								</div>
							</div>
						</div>:""}
					</div>
				</div>
			</div>
		</div>
		)
};

export default Body;