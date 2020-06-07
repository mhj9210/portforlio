import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const texts = ["Welcome, ", "What is your name?"];

const Home = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      guest: "Guest",
    },
  });
  const [txtIdx, setTxtIdx] = useState(0);

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setTxtIdx((txtIdx) => txtIdx + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  let txtChanges = texts[txtIdx % texts.length];

  return (
    <div style={{ height: "100vh", backgroundColor: "#99b898" }} id="home">
      <div className="container center text-center">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-white bold home_welcome animated fadeInDown slow">
              {txtChanges}
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                className="home_name_input animated fadeInUp slow"
                ref={register}
                name="guest"
              />
              <hr className="home_hr"></hr>
              <input
                type="submit"
                className="btn btn-success animated fadeInDown slower"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
