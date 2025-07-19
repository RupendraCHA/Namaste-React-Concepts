import React from "react"
import ReactDOM from "react-dom/client"
import Header, { Footer } from "./components/Header"
import Body from "./components/Body"


// const heading1 = React.createElement("h1", {className: "heading1", id: "classHeading1"}, "Thi is Heading1.")
//       const para1 = React.createElement("p", {className: "para1",key: "key5"}, "This is Para1")
//       const container1 = React.createElement("div", {className: "container1",key: "key4"}, heading1, para1)

//       const heading2 = React.createElement("h1", {className: "heading2",key: "key8"}, "This is Heading2.")
//       const para2 = React.createElement("h2", {className: "para2",key: "key6"}, "This is Para2.")
//       const container2 = React.createElement("div", {className: "container2"}, heading2, para2)

      
//     //   console.log(container)
      
//       const container3 = React.createElement("div", {}, [
//           React.createElement("h1", {key: "key2"}, "Hello1"),
//           React.createElement("h1", {key: "key3"}, "Hello2"),
//         ])
//       const container = React.createElement("div", {className: "container"}, container1, container2, container3)

//       const bgContainer = <div>
//         {container}
//       </div>

// const Title = () => {
//   return (  
//     <h1>Title for Component</h1>
//   )}

//   function Heading() {
//           return <h1>This is a Rupendra Heading Component.</h1>
//         }
  
//         const getElement = () => {
//           return React.createElement("h1", {id: "heading1"}, "This is a Rupendra Element.")
//         }

// const HeadingComponent = () => {
//   return (
//     <div id="bgContainer">
//       <Title/>
//       <div>
//         { 
//           Title()
//         }
//         <Heading />
//       </div>
//       <h1 className="heading1" id="classHeading1">
//         This is a Functional HeadingComponent.
//       </h1>
//     </div>
//   )
// }








      const AppLayout = () => {


        return(
          <div className="app">
            <Header />
            <Body/>
            <Footer/>
          </div>
        )
      }


      const root = ReactDOM.createRoot(document.getElementById("root"))
      root.render(<AppLayout />)



// Heading()