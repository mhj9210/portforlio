import React, { useState, useEffect } from "react";

const texts = ["Welcome, ", "What is your name?"];

const Home = (props) => {
  const [txtIdx, setTxtIdx] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    let interval = setInterval(() => {
      setTxtIdx((txtIdx) => txtIdx + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  let txtChanges = texts[txtIdx % texts.length];

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onChange(name);
    return <h1>Click 'About' to continue!</h1>;
  };

  return (
    <div
      className="container-fluid"
      style={{ height: "100vh", backgroundColor: "#99b898" }}
      id="home"
    >
      <div className="h-100 row align-items-center">
        <div className="col-xs-12 col-s-12 col-md-12 col-lg-12 col-xl-12 m-auto">
          <div className="col-md-6 text-center m-auto">
            <h1 className="text-white bold home_welcome animated fadeInDown slow">
              {txtChanges}
            </h1>
          </div>
          <div className="col-md-6 text-center m-auto">
            <form onSubmit={submitHandler}>
              <input
                type="text"
                className="home_name_input animated fadeInUp slow"
                value={name}
                onChange={changeHandler}
                placeholder="Enter your name here!"
              />
              <hr className="home_hr"></hr>
              {name.length === 0 ? null : (
                <input
                  type="submit"
                  className="btn btn-success animated fadeIn slower"
                />
              )}
            </form>
            <div className="col-md-12">
              {name ? (
                <h1
                  className="animated fadeIn slower"
                  style={{
                    color: "#fff",
                    marginTop: "30px",
                    fontFamily: "Bellota, cursive",
                  }}
                >
                  Hey, {name}! Please click submit and continue.
                </h1>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
