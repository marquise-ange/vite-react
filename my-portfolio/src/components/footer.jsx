import '../styles/Footer.css';
function Footer() {

  const year = new Date().getFullYear();
   
  return (
    <footer className="footer">
      <div className="container">
        <h3>
          MyPortfolio
        </h3>
        <p>
          Building Modern websites with React.js
        </p>
        
        <p className="copyright">
          {year} MyPortfolio. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer