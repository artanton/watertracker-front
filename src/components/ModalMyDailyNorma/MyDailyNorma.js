const MyDailyNormaModal = () => {
  return (
    <div>
      <div>
        <h1>My daily norma</h1>
        <div>
          <p>
            For girl: <span>V=(M*0.03) + (T*0.4)</span>
          </p>
          <p>
            For man: <span>V=(M*0.04) + (T*0.6)</span>
          </p>
        </div>
        <div>
          <span>*</span> V is the volume of the water norm in liters per day, M
          is your body weight, T is the time of active sports, or another type
          of activity commensurate in terms of loads (in the absence of these,
          you must set 0)
        </div>
        <div>
          <h3>Calculate your rate:</h3>
          <form>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleInputChange}
              />
              For girl
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleInputChange}
              />
              For man
            </label>
            <label>
              Your weight in kilograms:
              <input
                type="number"
                name="weight"
                max={200}
                min={0}
                placeholder="0"
                onChange={handleInputChange}
              />
            </label>
            <label>
              The time of active participation in sports or other activities
              with a high physical load(in hours):
              <input
                type="number"
                name="hours"
                max={24}
                min={0}
                placeholder="0"
                onChange={handleInputChange}
              />
            </label>
          </form>
          <div>
            The required amount of water in liters per day:
            <span>0 L</span>
          </div>
          <form>
            <label>
              Write down how much water you will drink(in liters):
              <input
                type="number"
                name="amount"
                min={1}
                max={15}
                step={0.1}
                required
              />
            </label>
          </form>
          <button type="submit">Save</button>
        </div>
      </div>
    </div>
  );
};
