import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./serv.css";
import Error404 from "../../components/Error404/Error404";

const DetailService = () => {
  const [service, setService] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getServiceById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/services/${id}`
        );
        setService(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getServiceById();
  }, [id]);

  if (!service) {
    return <Error404 />;
  }

  return (
    <div className="servInfo">
      <h2>{service.name}</h2>
      <img src={service.image} alt={service.name} />
      <p>{service.description}</p>
      <p>$ {service.price.toLocaleString()}</p>
      <button class="btn btn-primary custom-btn">Comprar ahora</button>
      <Link class="btn custom-btn" to="/services">
        Ir atrás
      </Link>
    </div>
  );
};

export default DetailService;