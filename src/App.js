import './App.css'
import Main from './components/Main'
import icon from './img/rysya.jpg'
import bars from './img/bars.jpg'
import bay from './img/bayaaly.jpg'
import beka from './img/beka2.jpg'
import syke from './img/syke2.jpg'
import uluk from './img/uluk.jpg'
let card = [
  {
    id: 'e1',
  	image: icon,
  	age: 16,
  	name: 'Rysya',
  },
  {
    image: bars,
    age:20,
    name:"Beybars"
  },
  {
    image: bay,
    age:19,
    name:"Baiaaly"
  },
  {
    image: beka,
    age:20,
    name:"Bekbolsun"
  },
  {
    image: syke,
    age:23,
    name:"Syimyk"
  },
  {
    image: uluk,
    age:21,
    name:"Uluk"
  },
]
  



function App() {
	return (
		<div className='App'>
			<Main image={card[0].image} age={card[0].age} name={card[0].name} />
      <Main image={card[1].image} age={card[1].age} name={card[1].name} />
      <Main image={card[2].image} age={card[2].age} name={card[2].name} />
      <Main image={card[3].image} age={card[3].age} name={card[3].name} />
      <Main image={card[4].image} age={card[4].age} name={card[4].name} />
      <Main image={card[5].image} age={card[5].age} name={card[5].name} />
		</div>
	)
}

export default App
