import React , { useState }from 'react'
import { list} from "../../data";
import "./Hospitals.css"


const Hospitals = () => {
    const [bank, setBank] = useState(list);
    return (
        <div className="centres">
            <div className="where">
            <h3>Choose a donor centre from the list or search for a different venue below:</h3>
            </div>
            <hr/>
            <div className="Listbank">
                {bank.map((el, i) => (<div className="banks" key={i}  style={{backgroundImage: `url(${el.img})`,backgroundRepeat: "no-repeat",backgroundSize: "cover", borderRadius: '15px'}}> <div className="banksPr"><h2>{el.name}</h2><p>Phone : {el.tel}</p><p>Adress : {el.adress}</p></div></div>))}
                </div> 
           
        </div>
    )
}

export default Hospitals
