import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function Login() {
  let register = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: ay7aga(),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  function ay7aga() {
    let schema = new Yup.object({
      name: Yup.string().required("Name is required"),
      password: Yup.string().required("Password is required").min(6).max(10),
    });
    return schema;
  }

  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-content-center flex-wrap bg-body-tertiary ">
        <div className="container ">
          <div className="w-75 m-auto my-5 brdrshdow p-4">
            <h3 className="title">LogIn:</h3>
            <form onSubmit={register.handleSubmit}>
              <label htmlFor="name">User Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control my-2"
                onChange={register.handleChange}
                onBlur={register.handleBlur}
              />
              {register.errors.name && register.touched.name ? (
                <div className="alert alert-danger">{register.errors.name}</div>
              ) : (
                ""
              )}

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control my-2 position-relative"
                onChange={register.handleChange}
                onBlur={register.handleBlur}
              />
              {register.errors.password && register.touched.password ? (
                <div className="alert alert-danger">
                  {" "}
                  {register.errors.password}{" "}
                </div>
              ) : (
                ""
              )}
              <button className="btn bg-dark text-white mt-3" type="submit">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
