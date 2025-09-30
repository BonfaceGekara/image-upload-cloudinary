import {useState} from 'react'
import axios from 'axios'

function Upload() {

    const [file, setFile] = useState(null);
    const [label, setLabel] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!label || !file) {
            alert("Please add all the required fields!");
        }

        const formData = new FormData();
        formData.append('image', file);
        formData.append('name', label);

        try {
            const res =await axios.post('http://localhost:3000/api/upload', formData,
                {headers: {'Content-Type':'multipart/form-data'},}
            )
        } catch(err) {
            console.error(err);
            alert('upload failed!');
        }
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={label}
            placeholder="Enter the image name"
            onChange={(e) => setLabel(e.target.value) }
            /><br />
            <input type="file"
            onChange={(e) => setFile(e.target.files[0])}
            accept='image/*'
            /><br />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Upload;