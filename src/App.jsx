import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <div
        className="containor"
        style={{
          background:"rgb(2,0,36)",
          background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(63,9,121,1) 38%, rgba(0,212,255,1) 100%)",
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div
          className="calculator"
          style={{
            backgroundColor: "white",
            width: "320px",
            height: "500px",
            borderRadius: "10px",
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow:"7px 7px 59px 10px"
            
          }}
        >
          <form type="">
            <input
              type=""
              value={value}
              style={{
                height: "40px",
                width: "250px",
                marginBottom: "20px",
                borderRadius: "10px",
                border: "1px solid",
                fontSize:"45px",
                backgroundColor: "#948fee",
              }} 
            ></input>

            <div>
              <input
                style={{
                  marginBottom: "20px",
                  marginRight: "5px",
                  backgroundColor: "#948fee",
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  fontSize: "larger",
                  marginRight: "5px",
                  border:"none"
                }}
                type="button"
                value="AC"
                onClick={(e)=>{
                  console.log(value)
                  setValue("")
                }}
              ></input>
              <input
                style={{
                  marginBottom: "20px",
                  marginRight: "5px",
                  backgroundColor: "beige",
                  backgroundColor: "#948fee",
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  fontSize: "larger",
                  border: "1px solid",
                }}
                type="button"
                value="DE"
                onClick={(e)=>{
                  console.log(value)
                  setValue(value.slice(0 ,-1))
                }}
              ></input>
              <input
                style={{
                  marginBottom: "20px",
                  marginRight: "5px",
                  backgroundColor: "beige",
                  backgroundColor: "#948fee",
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  fontSize: "larger",
                  border: "1px solid",
                }}
                onClick={(e)=>{
                  console.log(value)
                  setValue(value+e.target.value)
                  console.log(value+e.target.value)
                
                }}
                type="button"
                value="."
              ></input>
              <input
                style={{
                  marginBottom: "20px",
                  marginRight: "5px",
                  backgroundColor: "beige",
                  backgroundColor: "#948fee",
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  fontSize: "larger",
                  border: "1px solid",
                }}
                type="button"
                value="/"
                onClick={(e)=>{
                  setValue(value+e.target.value)
                  console.log(value)
                }}
              ></input>
            </div>
            <div>
              <input
                style={{
                  marginBottom: "20px",
                  marginRight: "5px",
                  backgroundColor: "beige",
                  backgroundColor: "#948fee",
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  fontSize: "larger",
                  border: "1px solid",
                }}
                type="button"
                value="7"
                onClick={(e)=>{
                  setValue(value+e.target.value)// adding here previous value and current value
                  console.log(value)
                }}
              ></input>
              <input
                style={{
                  marginBottom: "20px",
                  marginRight: "5px",
                  backgroundColor: "beige",
                  backgroundColor: "#948fee",
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  fontSize: "larger",
                  border: "1px solid",
                }}
                type="button"
                value="8"
                onClick={(e)=>{
                  setValue(value+e.target.value)
                  console.log(value)
                }}
              ></input>
              <input
                style={{
                  marginBottom: "20px",
                  marginRight: "5px",
                  backgroundColor: "beige",
                  backgroundColor: "#948fee",
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  fontSize: "larger",
                  border: "1px solid",
                }}
                type="button"
                value="9"
                onClick={(e)=>{
                  setValue(value+e.target.value)
                  console.log(value)
                }}
              ></input>
              <input
                style={{
                  marginBottom: "20px",
                  marginRight: "5px",
                  backgroundColor: "beige",
                  backgroundColor: "#948fee",
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  fontSize: "larger",
                  border: "1px solid",
                }}
                type="button"
                value="*"
                onClick={(e)=>{
                  setValue(value+e.target.value)
                  console.log(value)
                }}
              ></input>
            </div>
            <div>
              <input
                style={{
                  marginBottom: "20px",
                  marginRight: "5px",
                  backgroundColor: "beige",
                  backgroundColor: "#948fee",
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  fontSize: "larger",
                  border: "1px solid",
                }}
                type="button"
                value="4"
                onClick={(e)=>{
                  setValue(value+e.target.value)
                  console.log(value)
                }}
              ></input>
              <input
                style={{
                  marginBottom: "20px",
                  marginRight: "5px",
                  backgroundColor: "beige",
                  backgroundColor: "#948fee",
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  fontSize: "larger",
                  border: "1px solid",
                }}
                type="button"
                value="5"
                onClick={(e)=>{
                  setValue(value+e.target.value)
                  console.log(value)
                }}
              ></input>
              <input
                style={{
                  marginBottom: "20px",
                  marginRight: "5px",
                  backgroundColor: "beige",
                  backgroundColor: "#948fee",
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  fontSize: "larger",
                  border: "1px solid",
                }}
                type="button"
                value="6"
                onClick={(e)=>{
                  setValue(value+e.target.value)
                  console.log(value)
                }}
              ></input>
              <input
                style={{
                  marginBottom: "20px",
                  marginRight: "5px",
                  backgroundColor: "beige",
                  backgroundColor: "#948fee",
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  fontSize: "larger",
                  border: "1px solid",
                }}
                type="button"
                value="+"
                onClick={(e)=>{
                  setValue(value+e.target.value)
                  console.log(value)
                }}
              ></input>
            </div>
            <div>
              <input
                style={{
                  marginBottom: "20px",
                  marginRight: "5px",
                  backgroundColor: "beige",
                  backgroundColor: "#948fee",
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  fontSize: "larger",
                  border: "1px solid",
                }}
                type="button"
                value="3"
                onClick={(e)=>{
                  setValue(value+e.target.value)
                  console.log(value)
                }}
              ></input>
              <input
                style={{
                  marginBottom: "20px",
                  marginRight: "5px",
                  backgroundColor: "beige",
                  backgroundColor: "#948fee",
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  fontSize: "larger",
                  border: "1px solid",
                }}
                type="button"
                value="2"
                onClick={(e)=>{
                  setValue(value+e.target.value)
                  console.log(value)
                }}
              ></input>
              <input
                style={{
                  marginBottom: "20px",
                  marginRight: "5px",
                  backgroundColor: "beige",
                  backgroundColor: "#948fee",
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  fontSize: "larger",
                  border: "1px solid",
                }}
                type="button"
                value="1"
                onClick={(e)=>{
                  setValue(value+e.target.value)// feteching the previous value and current value
                  console.log(value)
                }}
              ></input>
              <input
                style={{
                  marginBottom: "20px",
                  marginRight: "5px",
                  backgroundColor: "beige",
                  backgroundColor: "#948fee",
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  fontSize: "larger",
                  border: "1px solid",
                }}
                type="button"
                value="-"
                onClick={(e)=>{
                  setValue(value+e.target.value)
                  console.log(value)
                }}
              ></input><br/>
              <input type="" value="="
               style={{
                marginBottom: "20px",
                marginRight: "5px",
                backgroundColor: "beige",
                backgroundColor: "#948fee",
                width: "250px",
                height: "50px",
                borderRadius: "10px",
                fontSize: "larger",
                border: "1px solid",
                textAlign:"center"
              }}
              onClick={(e)=>{
                console.log(eval(value))
                setValue(eval(value))
                console.log(value)
              }}
              ></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
