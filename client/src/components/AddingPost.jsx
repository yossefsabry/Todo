import React from 'react';

const AddingPost = () => {
    // State variables to hold user input
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [images, setImages] = React.useState([]);

    // Function to handle image selection
    const handleImageChange = (event) => {
        const selectedFiles = event.target.files;

        // Check for valid image files (optional, replace with appropriate validation)
        if (!selectedFiles || !selectedFiles.length) {
            console.log('Please select an image file.');
            return;
        }

        // Handle multiple image selection (if applicable)
        const newImages = Array.from(selectedFiles).map((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => setImages([...images, { url: e.target.result, size: file.size }]);
            return reader;
        });

        console.log('Selected image(s):', newImages); // Log details of the selected images
    };

    // Function to handle image removal (optional)
    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
        console.log('Image removed at index:', index); // Log the removed image index
    };

    return (
        <>
            <div className="wrapper__post__adding ">
                <div className="bg-white shadow p-4  rounded-lg w-max post__adding ">
                    <div className="heading text-center font-bold text-2xl m-5 text-white">New Post</div>
                    <div className="editor mx-auto w-max flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl rounded-lg adding__post__form">
                        <input
                            className="title bg-gray-800 border border-gray-300  
                            p-2 mb-4 outline-none"
                            spellCheck="false"
                            placeholder="Title"
                            type="text"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <textarea
                            className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
                            spellCheck="false"
                            placeholder="Describe  
                            everything about this post here"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />

                        {/* Icons */}
                        <div className="icons flex text-gray-500 m-2">
                            <label htmlFor="select-image">
                                <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round"  
                                        strokeLinejoin="round" strokeWidth="2"  
                                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                            </label>
                            <input  
                                hidden
                                type="file"
                                multiple
                                id="select-image"
                                onChange={handleImageChange}
                            />
                            <div className="count ml-auto text-gray-400 text-xs font-semibold">{images.length}/300</div>
                        </div>

                        {/* Image Preview */}
                        <div id="preview" className="my-4 flex">
                            {images.map((image, index) => (
                                <div className="relative w-32 h-32 object-cover rounded" key={index}>
                                    <div x-show={image.preview} className="relative w-32 h-32 object-cover rounded">
                                        <img src={image.url} className="w-32 h-32 object-cover rounded" alt={`Image ${index + 1}`} />
                                        <button onClick={() => handleRemoveImage(index)} className="w-6 h-6 absolute text-center flex items-center top-0 right-0 m-2 text-white text-lg bg-red-500 hover:text-red-700 hover:bg-gray-100 rounded-full p-1"><span  
                                            className="mx-auto">×</span></button>
                                        <div className="text-xs text-center p-2">{image.size}</div>
                                    </div>
                                    <div x-show={!image.preview} className="relative w-32 h-32 object-cover rounded">
                                        {/* Placeholder for non-preview image */}
                                        <svg className="fill-current  w-32 h-32 ml-auto pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                                        </svg>
                                        <button  
                                            onClick={() => handleRemoveImage(index)} className="w-6 h-6 absolute text-center flex items-center top-0 right-0 m-2 text-white text-lg bg-red-500 hover:text-red-700 hover:bg-gray-100 rounded-full p-1"><span  
                                                className="mx-auto">×</span></button>
                                        <div className="text-xs text-center p-2">{image.size}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Buttons */}
                        <div className="buttons flex justify-end">
                            <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
};

export default AddingPost;
