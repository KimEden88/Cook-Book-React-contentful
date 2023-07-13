import './subscribeInput.css';

export const SubscribeInput = () => {
  return (
    <div className="entireContainer">
      <div className="subscribeContainer">
        <div className="subscribeInput">
          <h3>Join our Community</h3>
        </div>
      </div>
      <div className="inputContainer">
        <div className="getTasty">
          <label htmlFor="email">Email:</label>
          Get new tasty recipes as they come
          <div className="submitEmailButton">
            <input
              name="email"
              id="email"
              type="email"
              autoComplete="off"
            />

            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
