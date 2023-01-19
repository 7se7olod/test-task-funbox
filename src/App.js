import './App.scss';
import Characteristics from "./data/Characteristics.module.js";
import CardsList from "./components/CardsList";

const catFood = [
    {
        title: Characteristics.feedTitle.dish,
        name: 'Нямушка',
        taste: Characteristics.taste.fuaGra,
        portions: Characteristics.portions.ten,
        mouse: Characteristics.mouse.one,
        kg: Characteristics.feedWeight.halfOne,
        description: Characteristics.feedDescriptions.fuagra,
        countProduct: 10,
    },
    {
        title: Characteristics.feedTitle.dish,
        name: 'Нямушка',
        taste: Characteristics.taste.fish,
        portions: Characteristics.portions.fourty,
        mouse: Characteristics.mouse.two,
        kg: Characteristics.feedWeight.two,
        description: Characteristics.feedDescriptions.fish,
        countProduct: 3,
    },
    {
        title: Characteristics.feedTitle.dish,
        name: 'Нямушка',
        taste: Characteristics.taste.chicken,
        portions: Characteristics.portions.oneHundred,
        mouse: Characteristics.mouse.five,
        kg: Characteristics.feedWeight.five,
        description: Characteristics.feedDescriptions.chicken,
        countProduct: 0,
    },
];

function App() {
  return (
    <div className="App">
      <CardsList catFood={catFood}/>
    </div>
  );
}

export default App;
