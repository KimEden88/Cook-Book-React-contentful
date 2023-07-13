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

        
        <form>
          <div className="getTasty">
            <label className="inputLabel" htmlFor="email">
              Get new tasty recipes as they come
            </label>

            <input
              className="inputText"
              type="email"
              id="email"
              pattern=".+@gmail\.com"
              required
            />

            <div className="submitEmailButton">
              <button>Submit</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
