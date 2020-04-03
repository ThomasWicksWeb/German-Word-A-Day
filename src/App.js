// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import ContentBody from './components/ContentBody'
import AppFooter from './components/footer';

import 'bulma/css/bulma.css'
import './css/styles.scss';
import './css/darkStyles.scss';

const App = () => {
  const [showCurrentDay, setShowCurrentDay] = useState(true);
  const [DOTY, setDOTY] = useState(0);
  const [viewPrevText, setViewPrevText] = useState("View Yesterday's Word");

  useEffect(() => {
    getDayOfTheYear();
  });

  const getDayOfTheYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    setDOTY(day);
    return day;
  }

  const handleViewPrev = () => {
    if(showCurrentDay === true){
      setDOTY(DOTY - 1);
      setShowCurrentDay(false);
      setViewPrevText("View Today's Word");
    } else {
      setDOTY(DOTY + 1);
      setShowCurrentDay(true);
      setViewPrevText("View Yesterday's Word");
    }
  }

  return (
    <>
      <TopBar
        buttonText={viewPrevText}
        handleViewPrev={handleViewPrev}
      />
      <ContentBody 
        DOTY={DOTY}
      />
      <AppFooter />
    </>
  );

}

// class App extends Component {

//   state = {
//     showCurrentDay: true,
//     DOTY: 0,
//     viewPrevText: "View Yesterday's Word",
//   }

//   componentDidMount(){
//     this.getDayOfTheYear();
//   }

//   getDayOfTheYear = () => {
//     const now = new Date();
//     const start = new Date(now.getFullYear(), 0, 0);
//     const diff = now - start;
//     const oneDay = 1000 * 60 * 60 * 24;
//     const day = Math.floor(diff / oneDay);
//     this.setState({DOTY: day})
//     return day;
//   }

//   handleViewPrev = () => {
//     if(this.state.showCurrentDay === true){
//       this.setState({
//         DOTY: this.getDayOfTheYear() - 1,
//         showCurrentDay: false,
//         viewPrevText: "View Today's Word"
//       })
//     } else {
//       this.setState({
//         DOTY: this.getDayOfTheYear(),
//         showCurrentDay: true,
//         viewPrevText: "View Yesterday's Word"
//       })
//     }
//   }

//   render(){
//     return (
//       <>
//         <TopBar
//           buttonText={this.state.viewPrevText}
//           handleViewPrev={this.handleViewPrev}
//         />
//         <ContentBody 
//           DOTY={this.state.DOTY}
//         />
//         <AppFooter />
//       </>
//     );
//   }
// }

export default App;
