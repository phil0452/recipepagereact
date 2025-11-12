import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import OmeleteImage from '/images/image-omelette.jpeg'
function App() {
  const [count, setCount] = useState(0)
  const prepTimeArray = [
    { name: "Total",
      description: "Approximately 10 minutes"
    },
    { name: "Preparation",
      description: "5 minutes"
    },
    { name: "Cooking",
      description: "5 minutes"
    }
    
  ];

  const ingredientsArray = [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs"
  ]

  const InstructionsArray = [
    { name: "Beat the eggs",
      description: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."
    },
    { name: "Heat the pan",
      description: "Place a non-stick frying pan over medium heat and add butter or oil."
    },
    { name: "Cook the omelette",
      description: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
    },
    { name: "Add fillings (optional)",
      description: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
    },
    { name: "Fold and serve",
      description: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
    },
    { name: "Enjoy",
      description: "Serve hot, with additional salt and pepper if needed."
    },
    
  ];

  const NutruitionValues = [
    {
      name: "Calories",
      value: "277kcal"
    },
    {
      name: "Carbs",
      value: "0g"
    },
    {
      name: "Protein",
      value: "20g"
    },
    {
      name: "Fat",
      value: "22g"
    }
  ]

  return (
    <>     

    <div class="outer_container">
      
      <img id="omelete_image" src={OmeleteImage} />
    <div class="container">
      <div>
        <h1 class="font_YoungSerif font_weight_400">Simple Omelette Recipe</h1>
        <p class="text_color_Stone_600 line_height">
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
    to perfection, optionally filled with your choice of cheese, vegetables, or meats.
        </p>
      </div>
      <div class="preparation_container bg_Rose_50">
        <h3 class="text_color_Rose_800">Preparation time</h3>
        <ul class="text_color_Stone_600">
          {prepTimeArray.map((item) => (
            <li class="line_height"><strong>{item.name}</strong>: {item.description}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 class="font_YoungSerif text_color_Brown_800 font_weight_400">Ingredients</h2>
        <ul class="text_color_Stone_600">
          {ingredientsArray.map((item) => (
            <li class="line_height">{item}</li>
          ))}
        </ul>

        <hr />
      </div>
      <div>
        <h1 class="font_YoungSerif text_color_Brown_800 font_weight_400">Instructions</h1>
        <ol class="text_color_Stone_600">
          {InstructionsArray.map((item) => (
            <li class="line_height"><strong>{item.name}</strong>: {item.description}</li>
          ))}
        </ol>

        <hr />
      </div>
      <div>
          <h1 class="font_YoungSerif text_color_Brown_800 font_weight_400">Nutrition</h1>

          <p class="text_color_Stone_600 line_height">
            The table below shows nutritional values per serving without the additional fillings.
          </p>
          <table>
            <tbody>
              {NutruitionValues.map((item) => (
              <tr>
                <td class="text_color_Stone_600">{item.name}</td>
                <td class="text_color_Brown_800"><strong>{item.value}</strong></td>
              </tr>
          ))}
            </tbody>            
          </table>
      </div>
    </div>
    </div>

  
  <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Philip Davide - phil0452@yahoo.com</a>.
  </div>
    </>
  )
}

export default App
