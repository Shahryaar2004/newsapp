// import React from 'react';
// import NavBar from './Components/NavBar';  
// import News from './Components/News';
// import NewsItems from './Components/NewsItems';
// export default function App() {
//   return (
//     <div className='bg-secondary' >
//       <NavBar /> 
//       <h2 className='d-flex justify-content-center'>NewsMonkey -Top Headlines</h2>
//       <News/>
      
    
//      </div>
//   );
// }
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import News from './Components/News';

export default function App() {
  return (
    <Router>
      <div className='bg-secondary'>
        <NavBar />
        <h2 className='d-flex justify-content-center'>NewsMonkey - Top Headlines</h2>
        <Routes>
          <Route path="/" element={<News category="general" />} />
          <Route path="/business" element={<News category="business" />} />
          <Route path="/entertainment" element={<News category="entertainment" />} />
          <Route path="/health" element={<News category="health" />} />
          <Route path="/science" element={<News category="science" />} />
          <Route path="/sports" element={<News category="sports" />} />
          <Route path="/technology" element={<News category="technology" />} />
        </Routes>
      </div>
    </Router>
  );
}
