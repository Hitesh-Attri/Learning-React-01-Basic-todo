import { useState } from "react";
// import data from '../data.json'
import ElementMaker from "./myComps/ElementMaker";

export default function Inputs() {
  const [arr, setArr] = useState([]);

  const [name, setName] = useState("n_name");
  const [desc, setDesc] = useState("d_desc");
  const [price, setPrice] = useState(99);
  const [quantity, setQuantity] = useState(9);
  const [cmnt, setCmnt] = useState("c_cmnt");

  const [fullName, setFullName] = useState("Joe Abraham");
  const [showInputEle, setShowInputEle] = useState(false);

  function saveData() {
    // arr.push(str1, str2, str3);
    setArr([...arr, { name: name, desc: desc, price: price, quantity: quantity, cmnt: cmnt }, ]);

    // reset inputs =>
    //
    // setName("")
    // setDesc("")
    // setPrice(0)
    // setQuantity(0)
    // setCmnt("")
    //
  }

  const onInputChange1 = (event) => setName(event.target.value);
  const onInputChange2 = (event) => setDesc(event.target.value);
  const onInputChange3 = (event) => setPrice(event.target.value);
  const onInputChange4 = (event) => setQuantity(event.target.value);
  const onInputChange5 = (event) => setCmnt(event.target.value);

  // console.log(arr)

  function deleteItem(index){
    return ()=>{
      setArr(arr.filter((item,i)=>{
        return i!==index;
      }))
    }
  }

  return (
    <>
    <div className="container my-3" id="inputs-div">
      <input onChange={onInputChange1} type="text" placeholder="name" name="name" value={name} required /> <br />
      <input onChange={onInputChange2} type="text" placeholder="desc" name="desc" value={desc} required /> <br />
      <input onChange={onInputChange3} type="number" placeholder="price" name="price" value={price} required /> <br />
      <input onChange={onInputChange4} type="number" placeholder="quantity" name="quantity" value={quantity} required /> <br />
      <input onChange={onInputChange5} type="text" placeholder="cmnt" name="cmnt" value={cmnt} required /> <br />
      <button onClick={saveData}>Save</button>
      <br />
      <br />
      <div className="container my-3" >
        <div className="row">
          <div className="col-md-12">
            <ul className="row">
              {arr.map((item, index) => {
                return (
                  <li key={index} className="col-md-3">
                    <p>Name: {item.name}</p>
                    <p>Description: {item.desc}</p>
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Cmnt: {item.cmnt}</p>
                    <button onClick={deleteItem(index)}>Delete</button>
                    <button>Edit</button>
                    <hr />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <button onClick={func_A()}> A </button>
      {/* <p>{data}</p> */}
    </div>

    <div>
      <h1>Double-click the Full Name's Value to Edit</h1>
      <div>
        <strong>Full Name: </strong>
        {/* Invoke the ElementMaker component with some attributes */}
        <ElementMaker
          value={fullName}
          handleChange={(e) => setFullName(e.target.value)}
          handleDoubleClick={() => setShowInputEle(true)}
          handleBlur={() => setShowInputEle(false)}
          showInputEle={showInputEle}
        />
      </div>
    </div>
    </>
  );

  
  function func_A(){
    return ()=>{
      console.log(arr);
    }
  }

}

// let arr = []

