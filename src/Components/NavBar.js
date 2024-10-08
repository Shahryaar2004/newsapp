// import React from 'react';

// function NavBar() {  
//   return (
//     <nav class="navbar navbar-expand-lg navbar-dark bg-dark  ">
//     <div class="container-fluid  ">
//       <a class="navbar-brand" href="#">NewsMonkey</a>
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//           <li class="nav-item">
//             <a class="nav-link active" aria-current="page" href="#">Home</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="#">bussiness</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="#">entertainment</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="#">general</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="#">health</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="#">science</a>
//           </li>
          
//           <li class="nav-item">
//             <a class="nav-link" href="#">sports</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="#">tecnology</a>
//           </li>
        
//         </ul>
     
//       </div>
//     </div>
//   </nav>
//   );
// }

// export default NavBar;  // Ensure the export matches the new component name


import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">Technology</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
