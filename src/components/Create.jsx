import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isSend, setIsSend] = useState(false);
    const history = useHistory();


    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleChangeBody = (e) => {
        setBody(e.target.value);
    };
    const handleChangeAuthor = (e) => {
        setAuthor(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog  = {title, body, author};
        axios.post('http://localhost:8000/blogs', blog)
            .then((response)=>{
                setIsSend(true);
                history.push('/')
            })
            .catch((error)=>{
                console.log(error);
            });
    };

    return (
        <div className="create">
            <h2>Create a new blog</h2>
            <form onSubmit={handleSubmit} >
                <label >Blog title</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={handleChangeTitle}
                />
                <label >Blog body</label>
                <textarea 
                    required
                    onChange={handleChangeBody}
                    value={body}
                ></textarea>
                <label >Blog author</label>
                <select 
                    value={author}
                    onChange={handleChangeAuthor}
                >
                    <option value="mario">Mario</option>
                    <option value="pierro">Pierro</option>
                </select>
                {!isSend && <button>Add Blog</button>}
                {isSend && <button disabled>Done</button>}
                
            </form>
        </div>
    );
};

export default Create;