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