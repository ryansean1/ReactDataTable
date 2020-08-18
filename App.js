import React, { Component } from "react";
import "./App.css";
import Toggle2 from "./components/Toggle2";
import Rectangle from "./components/Rectangle";
import D3 from "./components/MapExamples/D3Map";
import PageButtons from "./components/PageButtons";
import FilterRectangle from "./components/Rectangle1";
// import StateForm from "./components/Form";
// import Formcontrol from "./components/Selector";
import ActiveProviders from "./components/Tables/ActiveProviders";
import MarketConcentration from "./components/Tables/MarketConcentration";

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.myRef_Participant = React.createRef();
    this.myRef_Market = React.createRef();
    this.myRef_Budget = React.createRef();
    this.state = {
      filterVal: [],
      stateList: [],
      numberProviders: 10,

      // switchText: "Off"
    };
  }

  makeStateList = (list) => {
    this.setState({ stateList: list });
  };
  updateFilter = (value) => {
    this.setState({ filterVal: value });
  };

  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);
  scrollToMyRef1 = () =>
    window.scrollTo(0, this.myRef_Participant.current.offsetTop);
  scrollToMyRef2 = () =>
    window.scrollTo(0, this.myRef_Market.current.offsetTop);
  scrollToMyRef3 = () =>
    window.scrollTo(0, this.myRef_Budget.current.offsetTop);

  passValue = () => {
    console.log(this.props.numberProviders);
  };

  render() {
    const { filterVal } = this.state;
    const { stateList } = this.state;
    // var dataPath = require("./data/in_data.csv");

    // function App() {
    return (
      <div className="App">
        <header className="App-header">
          <Rectangle />
          <top className="App-buttons">
            <br></br>
            <div>
              <PageButtons
                scrollTo={this.scrollToMyRef}
                scrollToParticipant={this.scrollToMyRef1}
                scrollToMarket={this.scrollToMyRef2}
                scrollToBudget={this.scrollToMyRef3}
                passValue={this.passValue}
              />
            </div>
          </top>

          <br></br>
          <main className="App-main">
            <body className="App-mainheading">
              {/* ---------Active Providers -----------------------------------------------------------------------*/}
              <div style={{ textAlign: "left" }}>Active Providers</div>
            </body>
            <body className="App-subheading">
              <div style={{ textAlign: "left" }}>Select a Category</div>
            </body>
            <body className="App-body">
              <div style={{ textAlign: "left" }}>
                Choose single or multiple categories to filter the <br></br>{" "}
                data displayed on the Active providers section
              </div>
              <br></br>

              <form classname="App-form">
                <ActiveProviders />
              </form>
              <br></br>

              {/* <form className="App-form">{<StateForm />}</form> */}
            </body>
            <br></br>

            <br></br>
            <div></div>

            {/* ---------Participant Data -----------------------------------------------------------------------*/}
            <body className="App-mainheading">
              <div ref={this.myRef_Participant} style={{ textAlign: "left" }}>
                Participant Data
              </div>
            </body>
            <body className="App-subheading">
              <div style={{ textAlign: "left" }}>Select a Category</div>
            </body>
            <body className="App-body">
              <div style={{ textAlign: "left" }}>
                Choose single or multiple categories to filter the <br></br>{" "}
                data displayed on the Active providers section
              </div>
            </body>
            <br></br>
            <FilterRectangle />
            <br></br>
            <body className="App-subheading">
              <div style={{ textAlign: "left" }}>
                Service District Locations
              </div>
            </body>
            <body className="App-body">
              <div style={{ textAlign: "left" }}>
                The map below shows the variation in the number of participants
                across <br></br>
                Service Districts; lighter colours correspond to lower numbers
                and<br></br>
                darker colours corresond to higher numbers based on category
                <br></br>
                selections. Service District boundaries are based on 2011 Local{" "}
                <br></br>
                Government Areas (LGAs).
              </div>
            </body>
            <br></br>
            <D3 />
            <br></br>

            {/* ---------Market Concentration -----------------------------------------------------------------------*/}
            <body className="App-mainheading">
              <div ref={this.myRef_Market} style={{ textAlign: "left" }}>
                Market Concentration
              </div>
            </body>
            <body className="App-subheading">
              <div style={{ textAlign: "left" }}>Select a Category</div>
            </body>
            <body className="App-body">
              <div style={{ textAlign: "left" }}>
                Choose single or multiple categories to filter the <br></br>{" "}
                data displayed on the Active providers section
              </div>
            </body>
            <FilterRectangle />
            <br></br>
            <MarketConcentration />
            <body className="App-subheading">
              <div style={{ textAlign: "left" }}>
                Service District Locations
              </div>
            </body>
            <body className="App-body">
              <div style={{ textAlign: "left" }}>
                The map below shows the variation in the number of participants
                across <br></br>
                Service Districts; lighter colours correspond to lower numbers
                and<br></br>
                darker colours corresond to higher numbers based on category
                <br></br>
                selections. Service District boundaries are based on 2011 Local{" "}
                <br></br>
                Government Areas (LGAs).
              </div>
            </body>
            <br></br>
            <body className="App-body">
              {" "}
              <Toggle2 />{" "}
            </body>

            <br></br>
            {/* -----
            {/* ---------Utilisation of Plan Budgets -----------------------------------------------------------------------*/}
            <body className="App-mainheading">
              <div ref={this.myRef_Budget} style={{ textAlign: "left" }}>
                Utilisation of Plan Budgets
              </div>
            </body>
            <body className="App-subheading">
              <div style={{ textAlign: "left" }}>Select a Category</div>
            </body>
            <body className="App-body">
              <div style={{ textAlign: "left" }}>
                Choose single or multiple categories to filter the <br></br>{" "}
                data displayed on the Active providers section
              </div>
            </body>
            <br></br>
            <FilterRectangle />
            <br></br>
            <body className="App-subheading">
              <div style={{ textAlign: "left" }}>
                Service District Locations
              </div>
            </body>
            <body className="App-body">
              <div style={{ textAlign: "left" }}>
                The map below shows the variation in the number of participants
                across <br></br>
                Service Districts; lighter colours correspond to lower numbers
                and<br></br>
                darker colours corresond to higher numbers based on category
                <br></br>
                selections. Service District boundaries are based on 2011 Local{" "}
                <br></br>
                Government Areas (LGAs).
              </div>
            </body>
            <br></br>
            <D3 />
            <br></br>
            {/* -----

            {/* <Toggle2
              style={{ textAlign: "left" }}
              myData={stateList}
              filterVal={filterVal}
            /> */}
            {/* <br></br>
            <h3 style={{ color: "Red", textAlign: "left" }}>
              Filterable Table - Press CTRL and Click to clear filter -{" "}
              <br></br>select state from dropdown
            </h3>
            <div>
              {filterVal.map((txt) => (
                <>{txt} </>
              ))}
            </div>
            <StateSelect
              name="filterVal"
              stateList={stateList}
              selectionUpdate={(value) => this.updateFilter(value)}
            /> */}
            {/* <StateSelect stateList={stateList} selectionUpdate={(value) => this.updateVar(filterVal, value)} /> */}
            {/* <FilterTable myData={stateList} filterVal={filterVal} />
            <DataOnly
              csvFilePath={dataPath}
              myGetData={(value) => this.makeStateList(value)}
            /> */}
            {/* <StateSelect /> */}
            {/* <h3 style={{ color: "Red", textAlign: "left" }}>
              Number being displayed inside Circle - <br></br>
            </h3> */}
            {/* <NumberSwitch /> */}
          </main>
        </header>
      </div>
    );
  }
}

export default App;
