import { ChangeEvent } from "react"

const TestComponent = () =>{
    // const[file, setFile] = useState([])
    
    const handleFile = (event:ChangeEvent<HTMLInputElement>) =>{
        if (event.target.files && event.target.files.length > 0) {
            const selectedFile = event.target.files[0];
        const blob = new Blob([selectedFile], )
        console.log(blob,'blobblobblob')

            // You can then perform operations with the selectedFile, e.g., upload it
          }
        // const file = e.target.file
        // const blob = new Blob([file], )

    }
    return(
<div>
    <input type="file" onChange={(e)=>handleFile(e)} />
</div>
    )
}

export default TestComponent