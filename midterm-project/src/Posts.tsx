import { useState } from "react";
import { Header } from "./Header";
import { InitialPostsList } from "./data";

export const Posts = () => {

    const [postsList, setPostsList] = useState(InitialPostsList);
    const [editPostId, setEditPostId] = useState(null);
    const [editedTitle, setEditedTitle] = useState("");
    const [editedBody, setEditedBody] = useState("");
    const [newPostTitle, setNewPostTitle] = useState("");
    const [newPostBody, setNewPostBody] = useState("");

    const handleButtonClick = (id: number, type: 'like' | 'dislike' | 'delete' | 'edit' | 'save') => {
        let updatedPostsList;
        switch (type) {
            case 'delete':
                updatedPostsList = postsList.filter(post => post.id !== id);
                setPostsList(updatedPostsList);
                break;
            case 'like':
            case 'dislike':
                updatedPostsList = postsList.map(post => {
                    if (post.id === id) {
                        if (type === 'like') {
                            return { ...post, likes: post.likes + 1 };
                        } else if (type === 'dislike') {
                            return { ...post, dislikes: post.dislikes + 1 };
                        }
                    }
                    return post;
                });
                setPostsList(updatedPostsList);
                break;
            case 'edit':
                const postToEdit = postsList.find(post => post.id === id);
                if (postToEdit) {
                    setEditPostId(id);
                    setEditedTitle(postToEdit.title);
                    setEditedBody(postToEdit.body);
                }
                break;
            case 'save':
                updatedPostsList = postsList.map(post =>
                    post.id === id ? { ...post, title: editedTitle, body: editedBody } : post
                );
                setPostsList(updatedPostsList);
                setEditPostId(null);  // Reset edit state
                break;
            default:
                break;
        }
    };

    const handleAddPost = () => {
        const newPost = {
            id: Math.max(...postsList.map(post => post.id), 0) + 1,  // Get the next available id
            title: newPostTitle,
            body: newPostBody,
            likes: 0,
            dislikes: 0,
        };
        setPostsList([...postsList, newPost]);
        setNewPostTitle("");
        setNewPostBody("");
    };

    return (
        <div className="container">
            <Header />
            <h1>Posts</h1>
            <div className="new-post">
                <input
                    type="text"
                    placeholder="Title"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                />
                <textarea
                    placeholder="Body"
                    value={newPostBody}
                    onChange={(e) => setNewPostBody(e.target.value)}
                />
                <button onClick={handleAddPost}>Add Post</button>
            </div>
            <div>
            {postsList.map((post) => (
                <div key={post.id}>
                    {editPostId === post.id ? (
                        <div>
                            <input
                                type="text"
                                value={editedTitle}
                                onChange={(e) => setEditedTitle(e.target.value)}
                            />
                            <textarea
                                value={editedBody}
                                onChange={(e) => setEditedBody(e.target.value)}
                            />
                            <button onClick={() => handleButtonClick(post.id, 'save')}>Save</button>
                        </div>
                    ) : (
                        <div>
                            <h4>{post.title}</h4>
                            <div>{post.body}</div>
                        </div>
                    )}
                    <div>
                        <button onClick={() => handleButtonClick(post.id, 'like')}>Like: {post.likes}</button>
                        <button onClick={() => handleButtonClick(post.id, 'dislike')}>Dislike: {post.dislikes}</button>
                        <button onClick={() => handleButtonClick(post.id, 'edit')}>Edit</button>
                        <button onClick={() => handleButtonClick(post.id, 'delete')}>Delete</button>
                        <hr />
                        <br />
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}
