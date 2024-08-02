import React, { useState } from 'react';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import './Addtool.css'; 

const AddTool = () => {
  const [selFile, setSelFile] = useState("");

  const AddProductForm = useFormik({
    initialValues: {
      name: '',
      description: '',
      inventoryNumber: '',
      image: '',
      level: 'New Recruit',
    },
    onSubmit: async (values, action) => {
      values.image = selFile;
      console.log(values);
      const res = await fetch('http://localhost:3000/Tools/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status);
      action.resetForm();

      if (res.status === 200) {
        enqueueSnackbar('Add Successful', { variant: 'success' });
      } else {
        enqueueSnackbar('Add Failed', { variant: 'error' });
      }
    },
  });

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:3000/util/uploadfile", {
      method: "POST",
      body: fd,
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("file upload");
        }
      });
  };

  return (
    <div className='m-5 bg-primary-subtle' style={{width:'100%', height:'800%'}}>
    <form className='prod' onSubmit={AddProductForm.handleSubmit}>
      <div className='form-group '>
        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          id="name"
          className='form-control'
          onChange={AddProductForm.handleChange}
          value={AddProductForm.values.name}
          required
        />
        {AddProductForm.touched.name && AddProductForm.errors.name ? (
          <div className='error'>{AddProductForm.errors.name}</div>
        ) : null}
      </div>
      <div className='form-group'>
        <label htmlFor="description">Description:</label>
        <input
          type='text'
          id="description"
          className='form-control'
          onChange={AddProductForm.handleChange}
          value={AddProductForm.values.description}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor="inventoryNumber">Inventory Number:</label>
        <input
          type='text'
          id="inventoryNumber"
          className='form-control'
          onChange={AddProductForm.handleChange}
          value={AddProductForm.values.inventoryNumber}
          required
        />
        
      </div>
      <div className='form-group'>
        <label htmlFor="photo">Photo:</label>
        <input
          type="file"
          id="photo"
          className='form-control-file'
          onChange={uploadFile}
        />
      </div>
      <button className="btn btn-info btn-lg btn-block" type="submit">Submit</button>
    </form>
    </div>
  );
}

export default AddTool;
