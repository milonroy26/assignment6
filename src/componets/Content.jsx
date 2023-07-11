const Content = () => {
  const showMessage = () => {
    const messageBox = document.getElementById("messageBox").value;
    const displayMessage = document.getElementById("displayMessage");
    const outPut = (displayMessage.innerHTML = "Show Message : " + messageBox);
    return outPut;
  };

  return (
    <>
      <div className=" bg-gray-200 h-[70vh] px-4 flex">
        <div className="container mx-auto flex  flex-col items-center justify-center">
          <div className="shadow-md">
            <textarea
              type="text"
              id="messageBox"
              className="h-[300px] w-[500px] p-4 rounded-lg focus:shadow focus:outline-none"
              placeholder="Your Messages..."
            />
            <div className="top-5 pb-4 text-center mt-5">
              <button
                onClick={showMessage}
                className="h-10 w-20 text-white rounded-lg bg-purple-500 hover:bg-purple-600"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="displayMessage bg-purple-200 mt-12 w-full rounded-sm py-4 px-5">
            <h2 id="displayMessage">Show Message : {showMessage} </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
