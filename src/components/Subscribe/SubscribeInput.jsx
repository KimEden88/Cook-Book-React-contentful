import './subscribeInput.css';

export const SubscribeInput = () => {
  return (
    <div className="entireContainer">
      <h3>Join our Community</h3>

      <form className="inputContainer">
        <label
          className="inputLabel"
          htmlFor="email"
        >
          Get new tasty recipes as they come
        </label>

        <div className="submitEmailButton">
          <input
            className="inputText"
            type="email"
            id="email"
            pattern=".+@gmail\.com"
            required
          />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
