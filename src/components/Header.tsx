import React from 'react'

export const  Header = () => {
    return (
      
       <header className="col-12 sa-header">
      <div className ="container">
        <div className ="row align-items-center justify-content-between">
          <div className ="d-flex align-items-center">
            <a href="index.html"><img src="assets/icons/png/Logo Placement.png" className="sa-logo mr-3" alt="" /></a>
          </div>
          <div>
            <a href="signin.html" className ="btn sa-btn">sign in</a>
          </div>
        </div>
      </div>
    </header> 
    
    )
}

