import './App.css'
import {data} from './assets/data'
import { useState } from 'react';

function App() {

	const [myData, setMyData] = useState(data)

	const insertionSort = (arr) => {
		let newArr = []
		for (let i = 1; i < arr.length; i++){
			 for (let j = i; j > 0; j--){
				  if (arr[j].objVal < arr[j - 1].objVal){
						let temp = arr[j].objVal;
						let tempText = arr[j].text;

						arr[j].objVal = arr[j - 1].objVal
						arr[j].text = arr[j - 1].text

						arr[j - 1].objVal = temp
						arr[j - 1].text = tempText

						newArr.push(arr[i - 1].objVal)
				  } else {
						break;
				  }
			 }
			}
		setMyData(newArr)
		console.log(arr)
		return arr
  }

	const handleClick = () => {
		insertionSort(myData)
	}

  return (
    <div style={{ display:"flex", flexDirection:'column', alignItems:'center', justifyContent:"center", height:"100vh" }}>
      <button style={{ marginBottom:'25px' }} onClick={handleClick}>Sort</button>
      <div style={{ border:'1px solid white', width: '80%', height:"50%", display:"flex", flexDirection:"row", justifyContent:'center', alignItems:'center' }} >
			{myData.map((item) => {
				return(
					<div key={item.objVal || item} style={{ border:'1px solid white', margin:"10px", height:"50px", width:"50px", display:"flex", justifyContent:"center", alignItems:"center", color:"black", backgroundColor:'white' }}>{item.objVal || item}</div>
				)
			})}
      </div>
    </div>
  )
}

export default App
