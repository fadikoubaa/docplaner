import React from 'react';
import Nav from './component/nav'
 import Intro from"./component/intro"
 import Cards from "./component/cards"
 import SvgLinks from "./component/linkssvg"
 import Stats from "./component/stats"
 import Parg from "./component/Parg"
 import Countries from './component/Countries';
 import Footer from './component/Footer';


import './App.css';
 

const CardService = [
  {class:"patient-card",
  title: "For patients",
  description: "Find a doctor, book a visit and solve any health-related doubt",
  image: "https://www.docplanner.com/img/screen-marketplace@2x.png" ,
  bgcolor:"#00ccb1",
  select:['CHOOSE COUNTRY','tunis','algerie']

},
 {class:"doctor-card",
  title: "For doctors",
  description: "Save time managing visits and  cut no-shows by half ",
  image: "https://www.docplanner.com/img/screen-saas@2x.png",
  bgcolor:"#3d83df",

}]

const Boxes=[
  {svg:"https://www.docplanner.com/img/flag.png",
title:"Leader in 10 countries",
des:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"},

  {svg:"https://www.docplanner.com/img/visits.png",
title:"1.5 million appointments",
des:"booked last month"},

  {svg:"https://www.docplanner.com/img/patients.png",
title:"30 million unique patients",
des:"visit us every month"},

  {svg:"https://www.docplanner.com/img/doctors.png",
title:"2 million active doctors",
des:"trust in our solutions"}
]

const Countrie =[
  {
   image : "https://www.docplanner.com/images/warsaw.png",
   pays: "Warsaw"   
  },
  {image: "https://www.docplanner.com/images/barcelona.png",
  pays :"Barcelona"
},
  {image: "https://www.docplanner.com/images/istanbul.png",
  pays:"Istanbul"
},
  {image: "https://www.docplanner.com/images/rome.png",
  pays: "Rome"
},
  {image: "https://www.docplanner.com/images/mexico-city.png",
  pays: "Mexico"
},
  {image: "https://www.docplanner.com/images/curitiba.png",
  pays: "Curtiba"
}]



function App() {
  return (
    <div className="App">

    <Nav/>
<Intro />
    <Cards x={CardService} />
    
  <SvgLinks />
  <Stats y={Boxes}/>
  <Parg/>
  <Countries c={Countrie}/>
  <Footer/>
    </div>
  );
}

export default App;