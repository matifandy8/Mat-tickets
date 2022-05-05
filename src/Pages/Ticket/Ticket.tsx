import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type UserSubmitForm = {
  fullname: string;
  phone: string;
  email: string;
  acceptTerms: boolean;
};

const Ticket = () => {
  const { id } = useParams();
  const endpoint = `tickets/${id}`;

  const { data, loading, error } = useFetch(endpoint);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid")
          .matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Email is invalid"),
    fullname: Yup.string()
      .required("Fullname is required")
      .min(6, "Fullname must be at least 6 characters")
      .max(40, "Fullname must not exceed 40 characters"),
    phone: Yup.string()
      .required("Phone is required")
      .min(9, "Phone must be at least 9 numbers")
      .max(9, "Phone must not exceed 9 numbers")
      .matches(/^[0-9]+$/, "Phone must be numbers only"),
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

  const onSubmit = (dataForm: UserSubmitForm) => {
    console.log(JSON.stringify(dataForm, null, 2));
    console.log(dataForm); 
    console.log(data);

  };

 
  return (
    <div className="Ticket">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="ticket">
          <img className="ticket__img" src={data?.image} alt={data?.show} />
          <h1>{data?.show}</h1>
          <p> {data?.date} </p>
          <p>{data?.price}</p>
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
              <label>Fullname</label>
              <input
                type="fullname"
                {...register("fullname")}
                className={`form-control ${
                  errors.fullname ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.fullname?.message}</div>
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                {...register("phone")}
                className={`form-control ${
                  errors.phone ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.phone?.message}</div>
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
                Buy ticket
              </button> 
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Ticket;
