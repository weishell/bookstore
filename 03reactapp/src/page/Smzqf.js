import { useState } from "react"
import Smzqc from './Smzqz'



export default function F1(){
   let [f1,changeF1] = useState(20)
   let [f2,changeF2] = useState(10)
   function changeF1Fun(){
    changeF1(f1+1)

   }
   function changeF2Fun(){
    changeF2(f2+1)

   }
    return <div>
        <div>{f2}---{f1}</div>
        <button onClick={changeF1Fun}>changeF1</button>
        <button onClick={changeF2Fun}>changeF2</button>
        {/* <Smzqc f1={f1}>
            <div>Hello, World!</div>  
            <p>This is a paragraph inside ChildComponent.</p> 
        </Smzqc> */}
        <Smzqc>
        {{
          content: (
            <div>
              <h3>HomePage</h3>
            </div>
          ),
          txt: "这是个文本",
          btnClick: () => {
            console.log("btnClick");
          }
        }}
      </Smzqc>

    </div>
} 