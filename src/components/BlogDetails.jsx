
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import axios from 'axios';
import { useHistory} from 'react-router-dom'

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleDelete = () => {
        axios.delete("http://localhost:8000/blogs/"+ id )
            .then(()=>{
                history.push('/');
            })
    };

    return (
        <div className="blog-details">
            { isPending && 'wait a moment'}
            { blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <p>written by {blog.author} </p>
                    <div> {blog.body} </div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
};

export default BlogDetails;