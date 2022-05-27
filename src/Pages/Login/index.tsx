import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useAuth } from "../../contexts/Auth";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';


type UserSubmitForm = {
  username: string;
  password: string;
  email: string;
  acceptTerms: boolean;
};

const Ticket = () => {
    const { login } = useAuth();
    const [wrongPassword, setWrongPassword] = useState(false);
    const navigate = useNavigate();



  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid")
      .matches(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Email is invalid"
      ),
    username: Yup.string()
      .required("username is required")
      .min(6, "username must be at least 6 characters")
      .max(40, "username must not exceed 40 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(9, "Password must be at least 9 numbers"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (dataForm: UserSubmitForm) => {
    const jwt = await login(dataForm); // jwt sea null o sea distinto de null
    console.log(jwt);
    if (!jwt) return setWrongPassword(true);
    setWrongPassword(false);
    navigate('/');
    console.log(login)
    
  };

  return (
    <div className="Login"> 
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>

            <div className="form-group">
              <label>Username</label>
              <input
                type="username"
                {...register("username")}
                className={`form-control ${
                  errors.username ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.username?.message}</div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                {...register("password")}
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                {...register("acceptTerms")}
                className={`form-check-input ${
                  errors.acceptTerms ? "is-invalid" : ""
                }`}
              />
              <label htmlFor="acceptTerms" className="form-check-label">
                I have read and agree to the Terms
              </label>
              <div className="invalid-feedback">
                {errors.acceptTerms?.message}
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
    </div>
  );
};

export default Ticket;
