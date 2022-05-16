import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateReview () {
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    CreateReview(formValues);
    setFormValues({
      name: "",
      title: "",
      body: "",
    });
    navigate("/books");
  };

  return  (
    <div className="createreview">
      <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input
          className="create-input"
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Name"
            value={formValues.name}
            required
          />
        </div>
        <div className="create-wrapper">
        <label>Title</label>
        <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="title"
            value={formValues.title}
            required
          />
        </div>
        <div className="create-wrapper">
        <label id="lable-3">body</label>
          <textarea
            onChange={handleChange}
            name="body"
            type="textarea"
            placeholder="Summary"
            value={formValues.body}
            required
          />
        </div>
        <button className='postButton' >Post Review</button>
      </form>
    </div>
    </div>
  )
}

export default CreateReview;