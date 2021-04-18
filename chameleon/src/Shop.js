import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './components/HorizontalScroll/HorizontalScroll.css'
import babyclothesImg from './images/babyclothes.jpg';
import signupImg from './images/signup-button.png';
import clothing1 from './images/clothing1.png';
import clothing2 from './images/clothing2.png';
import clothing3 from './images/clothing3.png';
import clothing4 from './images/clothing4.png';
import shopall from './images/shopall.png';
import washingmachines from './images/washingmachines.png';
import sanitationImg from './images/sanitation-button.png';


import Navbar from './components/Navbar/Navbar.js';



export class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          imgPath: clothing1,
          age: "5-6 months",
          type: "Dresses"
        },
        {
          imgPath: clothing2,
          age: "3-4 months",
          type: "Onesies"
        },
        {
          imgPath: clothing3,
          age: "1-2 months",
          type: "Tops"
        },
        {
          imgPath: clothing4,
          age: "1-2 months",
          type: "Tops"
        },
        {
          imgPath: clothing1,
          age: "5-6 months",
          type: "Dresses"
        },
        {
          imgPath: clothing2,
          age: "3-4 months",
          type: "Onesies"
        },
        {
          imgPath: clothing3,
          age: "1-2 months",
          type: "Tops"
        },
        {
          imgPath: clothing4,
          age: "1-2 months",
          type: "Tops"
        },
        {
          imgPath: clothing1,
          age: "5-6 months",
          type: "Dresses"
        },
        {
          imgPath: clothing2,
          age: "3-4 months",
          type: "Onesies"
        },
        {
          imgPath: clothing3,
          age: "1-2 months",
          type: "Tops"
        },
        {
          imgPath: clothing4,
          age: "1-2 months",
          type: "Tops"
        },
        {
          imgPath: clothing1,
          age: "5-6 months",
          type: "Dresses"
        },
        {
          imgPath: clothing2,
          age: "3-4 months",
          type: "Onesies"
        },
        {
          imgPath: clothing3,
          age: "1-2 months",
          type: "Tops"
        },
        {
          imgPath: clothing4,
          age: "1-2 months",
          type: "Tops"
        }
      ],

      //flag = 1 means show, flag = 0 means dont show

      flagTops: 1,
      flagDresses: 1,
      flagOnesies: 1,
      flagBottoms: 1,
      flagShoes: 1,
      flagAccessories: 1,
      clothingType: ['Tops', 'Dresses', 'Onesies', 'Bottoms', 'Shoes', 'Accessories'],

      flag12: 1,
      flag34: 1,
      flag56: 1,
      flag78: 1,
      flag910: 1,
      flag1112: 1,
      clothingAge: ['1-2 months', '3-4 months', '5-6 months', '7-8 months', '9-10 months', '11-12 months']

    }
  }

  //type filter functions
  changeParamTops() {
    
    if (this.state.flagTops == 1) {
      if (this.state.clothingType.length == 6) {
        console.log(this.state.clothingType.length);
        //get rid of everything but this item
        this.setState({ flagDresses: 0, flagOnesies: 0, flagBottoms: 0, flagShoes: 0, flagAccessories: 0})
        this.setState({clothingType: ['Tops']})
      } else if (this.state.clothingType.length == 1){
        //This is the only box that is checked, and you are unchecking it, so you want to show everything again
        this.setState({ flagDresses: 1, flagOnesies: 1, flagBottoms: 1, flagShoes: 1, flagAccessories: 1 })
        this.setState({ clothingType: ['Tops', 'Dresses', 'Onesies', 'Bottoms', 'Shoes', 'Accessories']})
      }else{
        this.setState({ flagTops: 0 })
        var temp = this.state.clothingType;
        var index = temp.indexOf('Tops');
        if (index != -1) {
          temp.splice(index, 1)
          this.setState({ clothingType: temp })
        }
      }
    }
    else if (this.state.flagTops == 0) {
      this.setState({ flagTops: 1 })
      var temp = this.state.clothingType;
      temp.push('Tops');
    }
  }

  changeParamDresses() {
    if (this.state.flagDresses == 1) {
      if (this.state.clothingType.length == 6) {
        console.log(this.state.clothingType.length);
        //get rid of everything but this item
        this.setState({ flagTops: 0, flagOnesies: 0, flagBottoms: 0, flagShoes: 0, flagAccessories: 0 })
        this.setState({ clothingType: ['Dresses'] })
      } else if (this.state.clothingType.length == 1) {
        //This is the only box that is checked, and you are unchecking it, so you want to show everything again
        this.setState({ flagTops: 1, flagOnesies: 1, flagBottoms: 1, flagShoes: 1, flagAccessories: 1 })
        this.setState({ clothingType: ['Tops', 'Dresses', 'Onesies', 'Bottoms', 'Shoes', 'Accessories'] })
      } else {
        this.setState({ flagDresses: 0 })
        var temp = this.state.clothingType;
        var index = temp.indexOf('Dresses');
        if (index != -1) {
          temp.splice(index, 1)
          this.setState({ clothingType: temp })
        }
      }
    }

    else if (this.state.flagDresses == 0) {
      this.setState({ flagDresses: 1 })
      var temp = this.state.clothingType;
      temp.push('Dresses');
    }
  }

  changeParamOnesies() {
    if (this.state.flagOnesies == 1) {
      if (this.state.clothingType.length == 6) {
        console.log(this.state.clothingType.length);
        //get rid of everything but this item
        this.setState({ flagDresses: 0, flagTops: 0, flagBottoms: 0, flagShoes: 0, flagAccessories: 0 })
        this.setState({ clothingType: ['Onesies'] })
      } else if (this.state.clothingType.length == 1) {
        //This is the only box that is checked, and you are unchecking it, so you want to show everything again
        this.setState({ flagDresses: 1, flagTops: 1, flagBottoms: 1, flagShoes: 1, flagAccessories: 1 })
        this.setState({ clothingType: ['Tops', 'Dresses', 'Onesies', 'Bottoms', 'Shoes', 'Accessories'] })
      } else {
        this.setState({ flagOnesies: 0 })
        var temp = this.state.clothingType;
        var index = temp.indexOf('Onesies');
        if (index != -1) {
          temp.splice(index, 1)
          this.setState({ clothingType: temp })
        }
      }
    }

    else if (this.state.flagOnesies == 0) {
      this.setState({ flagOnesies: 1 })
      var temp = this.state.clothingType;
      temp.push('Onesies');
    }
  }

  changeParamBottoms() {
    if (this.state.flagBottoms == 1) {
      if (this.state.clothingType.length == 6) {
        console.log(this.state.clothingType.length);
        //get rid of everything but this item
        this.setState({ flagDresses: 0, flagOnesies: 0, flagTops: 0, flagShoes: 0, flagAccessories: 0 })
        this.setState({ clothingType: ['Bottoms'] })
      } else if (this.state.clothingType.length == 1) {
        //This is the only box that is checked, and you are unchecking it, so you want to show everything again
        this.setState({ flagDresses: 1, flagOnesies: 1, flagTops: 1, flagShoes: 1, flagAccessories: 1 })
        this.setState({ clothingType: ['Tops', 'Dresses', 'Onesies', 'Bottoms', 'Shoes', 'Accessories'] })
      } else {
        this.setState({ flagBottoms: 0 })
        var temp = this.state.clothingType;
        var index = temp.indexOf('Bottoms');
        if (index != -1) {
          temp.splice(index, 1)
          this.setState({ clothingType: temp })
        }
      }
    }

    else if (this.state.flagBottoms == 0) {
      this.setState({ flagBottoms: 1 })
      var temp = this.state.clothingType;
      temp.push('Bottoms');
    }
  }

  changeParamAccessories() {
    if (this.state.flagAccessories == 1) {
      if (this.state.clothingType.length == 6) {
        console.log(this.state.clothingType.length);
        //get rid of everything but this item
        this.setState({ flagDresses: 0, flagOnesies: 0, flagBottoms: 0, flagShoes: 0, flagTops: 0 })
        this.setState({ clothingType: ['Accessories'] })
      } else if (this.state.clothingType.length == 1) {
        //This is the only box that is checked, and you are unchecking it, so you want to show everything again
        this.setState({ flagDresses: 1, flagOnesies: 1, flagBottoms: 1, flagShoes: 1, flagTops: 1 })
        this.setState({ clothingType: ['Tops', 'Dresses', 'Onesies', 'Bottoms', 'Shoes', 'Accessories'] })
      } else {
        this.setState({ flagAccessories: 0 })
        var temp = this.state.clothingType;
        var index = temp.indexOf('Accessories');
        if (index != -1) {
          temp.splice(index, 1)
          this.setState({ clothingType: temp })
        }
      }
    }

    else if (this.state.flagAccessories == 0) {
      this.setState({ flagAccessories: 1 })
      var temp = this.state.clothingType;
      temp.push('BottAccessoriesoms');
    }
  }
  
  changeParamShoes() {
    if (this.state.flagShoes == 1) {
      if (this.state.clothingType.length == 6) {
        console.log(this.state.clothingType.length);
        //get rid of everything but this item
        this.setState({ flagDresses: 0, flagOnesies: 0, flagBottoms: 0, flagTops: 0, flagAccessories: 0 })
        this.setState({ clothingType: ['Shoes'] })
      } else if (this.state.clothingType.length == 1) {
        //This is the only box that is checked, and you are unchecking it, so you want to show everything again
        this.setState({ flagDresses: 1, flagOnesies: 1, flagBottoms: 1, flagTops: 1, flagAccessories: 1 })
        this.setState({ clothingType: ['Tops', 'Dresses', 'Onesies', 'Bottoms', 'Shoes', 'Accessories'] })
      } else {
        this.setState({ flagShoes: 0 })
        var temp = this.state.clothingType;
        var index = temp.indexOf('Shoes');
        if (index != -1) {
          temp.splice(index, 1)
          this.setState({ clothingType: temp })
        }
      }
    }

    else if (this.state.flagShoes == 0) {
      this.setState({ flagShoes: 1 })
      var temp = this.state.clothingType;
      temp.push('Shoes');
    }
  }

  //age filter functions
  changeParam12months() {
    if (this.state.flag12 == 1) {
      if (this.state.clothingAge.length == 6) {
        console.log(this.state.clothingAge.length);
        //get rid of everything but this item
        this.setState({ flag34: 0, flag56: 0, flag78: 0, flag910: 0, flag1112: 0})
        this.setState({ clothingAge: ['1-2 months'] })
      } else if (this.state.clothingAge.length == 1) {
        //This is the only box that is checked, and you are unchecking it, so you want to show everything again
        this.setState({ flag34: 1, flag56: 1, flag78: 1, flag910: 1, flag1112: 1})
        this.setState({ clothingAge: ['1-2 months', '3-4 months', '5-6 months', '7-8 months', '9-10 months', '11-12 months'] })
      } else{
        this.setState({ flag12: 0 })
        var temp = this.state.clothingAge;
        var index = temp.indexOf('1-2 months');
        if (index != -1) {
          temp.splice(index, 1)
          this.setState({ clothingAge: temp })
        }
      }
    }
    else if (this.state.flag12 == 0) {
      this.setState({ flag12: 1 })
      var temp = this.state.clothingAge;
      temp.push('1-2 months');
    }
  }

  changeParam34months() {
    if (this.state.flag34 == 1) {
      this.setState({ flag34: 0 })
      var temp = this.state.clothingAge;
      var index = temp.indexOf('3-4 months');
      if (index != -1) {
        temp.splice(index, 1)
        this.setState({ clothingAge: temp })
      }
    }

    else if (this.state.flag34 == 0) {
      this.setState({ flag34: 1 })
      var temp = this.state.clothingAge;
      temp.push('3-4 months');
    }
  }

  changeParam56months() {
    if (this.state.flag56 == 1) {
      this.setState({ flag56: 0 })
      var temp = this.state.clothingAge;
      var index = temp.indexOf('5-6 months');
      if (index != -1) {
        temp.splice(index, 1)
        this.setState({ clothingAge: temp })
      }
    }

    else if (this.state.flag56 == 0) {
      this.setState({ flag56: 1 })
      var temp = this.state.clothingAge;
      temp.push('5-6 months');
    }
  }

  changeParam78months() {
    if (this.state.flag78 == 1) {
      this.setState({ flag78: 0 })
      var temp = this.state.clothingAge;
      var index = temp.indexOf('7-8 months');
      if (index != -1) {
        temp.splice(index, 1)
        this.setState({ clothingAge: temp })
      }
    }

    else if (this.state.flag78 == 0) {
      this.setState({ flag78: 1 })
      var temp = this.state.clothingAge;
      temp.push('7-8 months');
    }
  }

  changeParam910months() {
    if (this.state.flag910 == 1) {
      this.setState({ flag910: 0 })
      var temp = this.state.clothingAge;
      var index = temp.indexOf('9-10 months');
      if (index != -1) {
        temp.splice(index, 1)
        this.setState({ clothingAge: temp })
      }
    }

    else if (this.state.flag910 == 0) {
      this.setState({ flag910: 1 })
      var temp = this.state.clothingAge;
      temp.push('9-10 months');
    }
  }


  changeParam1112months() {
    if (this.state.flag1112 == 1) {
      this.setState({ flag1112: 0 })
      var temp = this.state.clothingAge;
      var index = temp.indexOf('11-12 months');
      if (index != -1) {
        temp.splice(index, 1)
        this.setState({ clothingAge: temp })
      }
    }

    else if (this.state.flag1112 == 0) {
      this.setState({ flag1112: 1 })
      var temp = this.state.clothingAge;
      temp.push('11-12 months');
    }
  }

  render() {
    return (
      <fragment>




        {/*header*/}
        <div>
          <Navbar ></Navbar>
        </div>

        <div class="buffer"> </div>



        {/*test*/}



        <div class="flex-container-shop">

          <div class="flex-child-shop">
            {/*filters*/}
            <div className="categories-filters">Categories</div>
            <div className="age-type">Age</div>
            <div class="group">
              {/*<button onClick={() => this.changeParam12months()}>1-2 months</button>

              <button onClick={() => this.changeParam34months()}>3-4 months</button>

              <button onClick={() => this.changeParam56months()}>5-6 months</button>*/}

              <input type="checkbox" onClick={() => this.changeParam12months()} id="1-2 Months"/>
              <label for="1-2 Months"> 1-2 Months</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParam34months()} id="3-4 Months"/>
              <label for="3-4 Months"> 3-4 Months</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParam56months()} id="5-6 Months"/>
              <label for="5-6 Months"> 5-6 Months</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParam78months()} id="7-8 Months"/>
              <label for="7-8 Months"> 7-8 Months</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParam910months()} id="9-10 Months"/>
              <label for="9-10 Months"> 9-10 Months</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParam1112months()} id="11-12 Months"/>
              <label for="11-12 Months"> 11-12 Months</label><br></br><br></br>
              
            </div>

            <div className="categories-filters">Filters</div>
            <div className="age-type">Item Type</div>
            <div>
              {/*<button onClick={() => this.changeParamTops()}>Tops</button>

              <button onClick={() => this.changeParamDresses()}>Dresses</button>

              <button onClick={() => this.changeParamOnesies()}>Onesies</button>*/}

              <input type="checkbox" onClick={() => this.changeParamOnesies()} id="onesies" />
              <label for="onesies"> Onesies</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParamDresses()} id="dresses" />
              <label for="dresses"> Dresses</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParamTops()} id="tops" />
              <label for="tops"> Tops</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParamBottoms()} id="Bottoms" />
              <label for="Bottoms"> Bottoms</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParamShoes()} id="Shoes" />
              <label for="Shoes"> Shoes</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParamAccessories()} id="Accessories" />
              <label for="Accessories"> Accessories</label><br></br><br></br>
            </div>

          </div>
          <div class="flex-child-shop:first-child" >
            <div class="view-all">View All</div>
            {this.state.items.filter(item => this.state.clothingType.includes(item.type) && this.state.clothingAge.includes(item.age)).map(filteredItem =>
            (<div class="card">
              <img class="item" src={filteredItem.imgPath}></img>
            </div>))}
          </div>

        </div>


        {/*test button*/}



        {/*{this.state.items.map((value, index) =>
          <div class="card"><img class="item" src={value.imgPath}></img> </div>)}*/}



      </fragment>


    );
  }
}