import { useContext } from "react";
import productsContext from "../context/productsContext"

let HomeComponent = () => {

    let {products,setProducts} = useContext(productsContext)

    return (
        <>
        
            <div className="homeComponentContainer" >

            {products.map(el => <div className="itemCard" >{el.name} <img className="productImages" src="./" /> R{el.price} <br /> <input type="button" value="Buy" /></div> )}
            </div>

            <div className="homeComponentContainer">

                <div className="homeComponentContent">
                    <h1>
                        Give us a shoutout
                    </h1>
                    <p>
                        804 Village 1
                    </p>
                    <p>
                        804cosmetics@gmail.com
                    </p>
                    <p>
                        0747501290
                    </p>
                </div>
                <div className="homeComponentContent">
                    <label htmlFor="">Name</label> <input type={"text"} name={"firstName"} /> <br />
                    <label htmlFor="">Address</label><input type={"text"} /><br />
                    <label htmlFor="">Email</label><input type={"text"} /><br />
                    <label htmlFor="">Phone</label><input type={"text"} />
                    <label htmlFor="">Subject</label><input type={"text"} /><br />

                    <label htmlFor="">Message</label> <textarea ></textarea> <br />
                    <input type="submit" className="homeBTN" value="Submit"/>


                </div>
            </div>
        </>)

}

export default HomeComponent;