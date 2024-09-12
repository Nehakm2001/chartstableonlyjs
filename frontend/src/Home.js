import React from 'react';
import './Home.css'; 
export const Home = () => {

  return (
    <div className="home">
      <h1>Welcome to Highcharts and Data Grid Demo</h1>
      <div className="box">
        <h3>The Only Charting Library You Need</h3>
        <p>
          The Highcharts library comes with all the tools you need to create reliable and secure data visualizations. Built on JavaScript and TypeScript, all our charting libraries work with any back-end database or server stack. We offer wrappers for the most popular programming languages
          (.Net, PHP, Python, R, Java) as well as iOS and Android, and frameworks like Angular, Vue, and React.
        </p>
      </div>
      <div className="box">
        <h3>MUI X Data Grid</h3>
        <p>
          A fast and extendable React data table and React data grid. It's a feature-rich component available with MIT or commercial licenses.
        </p>
        <p>
          The Data Grid component is built with React and TypeScript to provide a smooth UX for manipulating an unlimited set of data. It features an intuitive API for real-time updates as well as theming and custom templates—all with blazing-fast performance.
        </p>
      </div>
    </div>
  );


  }

export default Home;

