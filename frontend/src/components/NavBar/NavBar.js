import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/view-page">Job Tracker</a>

  <div>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/view-page">Jobs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/skills-page">Skills</a>
      </li>
    </ul>
  </div>
</nav>



    
//     <nav className="navbar navbar-expand-lg py-4 navbar-dark bg-dark">
//   <a className="navbar-brand" href="/view-page">
//        Job Tracker
//   </a>
//   <button
//     className="navbar-toggler"
//     type="button"
//     data-toggle="collapse"
//     data-target="#navbarNavDropdown"
//     aria-controls="navbarNavDropdown"
//     aria-expanded="false"
//     aria-label="Toggle navigation"
//   >
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavDropdown">
//     <ul className="navbar-nav">
//       <li className="nav-item">
//         <a className="nav-link" href="/view-page">
//           Jobs
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/contacts-page">
//           Contacts
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/skills-page">
//           Skills
//         </a>
//       </li>
//       </ul>
//   </div>
// </nav>
  );
};

export default NavBar;









// const NavBar = () => {
//   return (
//     <div>
//       <h5>Job Tracker</h5>
//       <ul>
//         <li><Link to="/view-page">Home</Link></li>
//         <li><Link to="/=">Auth</Link></li>
//      	</ul>
//       <hr />
//     </div>
//   );
// };

// export default NavBar;