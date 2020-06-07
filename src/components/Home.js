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
    <div style={{ height: "100vh", backgroundColor: "#99b898" }} id="home">
      <div className="container center text-center">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-white bold home_welcome animated fadeInDown slow">
              {txtChanges}
            </h1>
            <div>
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
            </div>
            <div className="col-md-12">
              {name ? (
                <h1 style={{ color: "#fff", marginTop: "30px" }}>
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
