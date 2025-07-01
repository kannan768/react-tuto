import React from 'react'
const BMI = () => {
    const[height, setHeight] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [bmi, setBmi] = React.useState(null);
    const [message, setMessage] = React.useState('');

    const calculateBMI = () => {
        if(!height ||! weight) {
            alert("Please enter both height and weight");
            setBmi(null);
            setMessage('please enter both height and weight');
            return;
        }
        const heightInInches = height * 0.393701;
        const calculatedBmi = weight / (heightInInches * heightInInches).toFixed(2);
        setBmi(calculatedBmi);
        if (calculatedBmi < 18.5) {
            setMessage('Underweight');
        } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
            setMessage('Normal weight');
        } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
            setMessage('Overweight');
        } else {
            setMessage('Obesity');
        }
    }

  return (
    <>
      <h1>BMI CALCULATOR</h1>
     
        <div className="flex flex-col items-center">
          <label>Height (cm): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <br />
          <label>Weight (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <br />
          <button onClick={calculateBMI}>Calculate BMI</button>
          {bmi && (
            <div>
              <h2>Your BMI: {bmi}</h2>
              <p>{message}</p>
            </div>
          )}
        </div>


      {!bmi && (
        <div>
          <h2>Please enter your height and weight to calculate BMI.</h2>
        </div>
      )}
    </>
  );
}

export default BMI