import React, { useState } from 'react';

const UpdateItem = ({ item }) => {
    const [formData, setFormData] = useState({
        // initialize the form data with the item's values
        // e.g. title: item.title, description: item.description
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // handle the form submission logic
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
            />
            <button type="submit">Update</button>
        </form>
    );
};

export default UpdateItem;
