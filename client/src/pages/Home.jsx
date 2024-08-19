import { useState } from "react";
import ListTodo from "../components/ListTodo";
import AddingPost from "../components/AddingPost";
import Navbar from "../components/BarMenu";

const Home = () => {
    const [showAddingPost, setShowAddingPost] = useState(false);
    const welcome = () => {
        setShowAddingPost(!showAddingPost);
    };
    return(
        <>
            <div className=''>
                <Navbar />
                <div className="container_content">
                    <button onClick={() => welcome()}>welcome</button>
                    <ListTodo />
                    { showAddingPost && <AddingPost />}
                </div>
            </div>
        </>
    )
}

export default Home;
