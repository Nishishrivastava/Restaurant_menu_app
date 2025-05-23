import React from "react";

const Menucard = ({menuData}) => {
    // console.log(menuData);

    return (
        <>
        {/* <h1 align='center'>Alba Bistro Cafe Menu</h1> */}
        <section className="main-card-container">
        {menuData.map((curElem)=>{
            return (
              <>
                <div className="card-container" key={curElem.id}>
          <div className="card">
            <div className="card-body">
              <span className="card number card-circle subtle ">{curElem.id}</span>
              <span className="card-author subtle" style={{color: 'grey'}}>{curElem.name}</span>
              <h2 className="card-title">{curElem.name}</h2>
              <span className="card-description subtle">
              {curElem.description}
              </span>
              <div className="card-read">Read</div>
            </div>
            <img src={curElem.image} alt="images" className="card-media"/>
          </div>
        </div>
          </>    
            );
        
           })}; 
        
        

        </section>
        </>
    )
}
export default Menucard;