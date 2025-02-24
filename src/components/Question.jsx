/* eslint-disable react/prop-types */
const Question = ({ question, options, onAnswer }) => {
    return (
      <div>
        <h3>{question}</h3>
        {options.map((option, index) => (
          <button key={index} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  };
  
  export default Question;
  