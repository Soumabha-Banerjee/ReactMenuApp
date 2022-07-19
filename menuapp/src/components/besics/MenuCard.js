import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
    return (
    <>
        <section className='main-card--cointainer'>
        { menuData.map((currElm) => {
            return(
                <>
                    <div className="card-container" key={currElm.id}>
                            <div className="card ">
                            <div className="card-body">
                                <span className="card-number card-circle subtle"> {currElm.id} </span>
                                <span className="card-author subtle"> {currElm.category} </span>
                                <h2 className="card-title"> {currElm.name} </h2>
                                <span className="card-description subtle">
                                    {currElm.description}
                                </span>
                                <div className="card-read">Read</div>
                            </div>
                            <img src={currElm.image} alt="images" className='card-media'/>
                            <span className="card-tag  subtle">Order Now</span>
                            </div>
                    </div>
                </>
            )
        }) 
        }
        </section>
    </>
  )
}

export default MenuCard