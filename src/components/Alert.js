import React from 'react'
import '../App.css';

export default function Alert(props) {
    const capitalize = (words) => {
        if (typeof words !== 'string' || words.length === 0) {
          return "";
        }else{
            return words.charAt(0).toUpperCase() + words.slice(1).toLowerCase();
      }};
      if (!props.Alert || !props.Alert.type || !props.Alert.msg) {
        return null; // Return null if props.Alert is undefined or if it doesn't have type and msg properties
      }
  return (
    
    <div  >
    <div style={{height:"50px",position:"fixed",width:"100%"}}className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.Alert.type)}</strong> {props.Alert.msg}
      </div>
    </div>
    
  )
}
