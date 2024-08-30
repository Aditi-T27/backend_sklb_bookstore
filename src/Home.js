// import React from "react";
// import App from './App'
// import {Link} from "react-router-dom";

// const Home=()=>{


//     return(
// <>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Navbar</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Features</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Discover</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
 
//     <div id="bgimg">
       
//         <div className="heading">
//             DIGITALIZED READING PLATFORM
//         </div>
//         <div className="search-form">
//             <form className="d-flex">
//                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                 {/* <!-- Optional: Add a search button --> */}
//                 {/* <!-- <button className="btn btn-outline-success" type="submit">Search</button> --> */}
//             </form><br/>
//             <button type="button" className="btn btn-secondary button" >Search</button>
//         </div>
//         <br/><br/><br/><br/><br/>
//         <div className="container text-center">
//           <div className="row">
//             <div className="col">
//               <img src="https://media.istockphoto.com/id/538837909/vector/art-hand-lettering-and-doodles-elements.jpg?s=612x612&w=0&k=20&c=v3fv1ALx6ClHAmQyguKCv4Fq3W-vHd8VacyxvrcK49Y=" alt="" width="250px"/>
//             </div>
//             <div className="col">
//               <img src="https://img.freepik.com/premium-vector/science-word-concept_23-2148525138.jpg?w=1060" alt="" width="250px"/>
//             </div>
//             <div className="col">
//              <img src="https://media.istockphoto.com/id/1264493165/vector/music-school-subjects.jpg?s=170667a&w=0&k=20&c=Ey6gzXhdX4Z0o87X58iPDy-W_RH-FRWrebqZAdyKqFs=" alt="" width="250px"/>
//             </div>
//           </div>
        
//         </div>
  
//      </>
//     )
// }
// export default Home;





// import React from "react";
// import { Link } from "react-router-dom";
// import App from './App'
// const Home = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">Navbar</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link active" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="#">Features</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="#">Discover</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div id="bgimg">
//         <div className="heading">
//           DIGITALIZED READING PLATFORM
//         </div>
      
//         <div className="search-form">
//           <form className="d-flex">
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//             {/* <!-- Optional: Add a search button --> */}
//             {/* <!-- <button className="btn btn-outline-success" type="submit">Search</button> --> */}
//           </form>
//           <br />
//           <button type="button" className="btn btn-secondary button search">Search</button>
//           </div><br /><br />
//       <div className="center">
//       <div classNameName="container text-center">
//   <div className="row box" >
//     <div className="col">
//        <a href=""><img src="https://c8.alamy.com/comp/RP727B/science-illustration-concept-of-hand-drawn-doodle-icons-for-education-and-research-over-textured-paper-RP727B.jpg" alt="" width="150px" /></a>
//     </div>
//     <div className="col">
//       Column
//     </div>
//     <div className="col">
//       Column
//     </div>
//   </div>
// </div>
//         </div>
//         <br /><br />
//         {/* <div className="container text-center">
//           <div className="row">
//             <div className="col">
//               <img src="https://media.istockphoto.com/id/538837909/vector/art-hand-lettering-and-doodles-elements.jpg?s=612x612&w=0&k=20&c=v3fv1ALx6ClHAmQyguKCv4Fq3W-vHd8VacyxvrcK49Y=" alt="" width="130px" />
//             </div>
//             <div className="col">
//               <img src="https://img.freepik.com/premium-vector/science-word-concept_23-2148525138.jpg?w=1060" alt="" width="130px" />
//             </div>
//             <div className="col">
//               <img src="https://media.istockphoto.com/id/1264493165/vector/music-school-subjects.jpg?s=170667a&w=0&k=20&c=Ey6gzXhdX4Z0o87X58iPDy-W_RH-FRWrebqZAdyKqFs=" alt="" width="130px" />
//             </div>
//           </div>
//         </div> */}
   
//       </div>
//     </>
//   );
// };

// export default Home;
import React from "react";
import { Link } from "react-router-dom";
import Sciencefp from './Sciencefp';
import Art from './Art';

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">DigiLibrary</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="Science.js">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/LoginPage">Sign In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="#">Discover</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="bgimg">
        <div className="heading">
          DIGITALIZED READING PLATFORM
        </div>
      
        <div className="search-form">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            {/* <!-- Optional: Add a search button --> */}
            {/* <!-- <button className="btn btn-outline-success" type="submit">Search</button> --> */}
          </form>
          <br />
          <button type="button" className="btn btn-secondary button search">Search</button>
        </div>
        <br /><br />

        <div className="container text-center">
          <div className="row">
            <div className="col image" >
            <Link to="/Sciencefp"><img src="https://img.freepik.com/premium-vector/science-word-concept_23-2148525138.jpg?w=1060" alt="" className="img-fluid" width="350px"/></Link>
            </div>
            <div className="col image" >
              <Link to="/Art"><img src="https://media.istockphoto.com/id/538837909/vector/art-hand-lettering-and-doodles-elements.jpg?s=612x612&w=0&k=20&c=v3fv1ALx6ClHAmQyguKCv4Fq3W-vHd8VacyxvrcK49Y=" alt="" className="img-fluid" width="350px" /></Link>
            </div>
            <div className="col image">
              <Link to="/Music"><img src="https://media.istockphoto.com/id/1264493165/vector/music-school-subjects.jpg?s=170667a&w=0&k=20&c=Ey6gzXhdX4Z0o87X58iPDy-W_RH-FRWrebqZAdyKqFs=" alt="" className="img-fluid" width="350px"/></Link>
            </div>
          </div>
        </div>
   
      </div>
    </>
  );
};

export default Home;

