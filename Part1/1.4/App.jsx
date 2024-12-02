const App = () => {
  const Time = new Date();
  const Debug = `DEBUG ${Time.getDate()}.${Time.getUTCMonth()} ${Time.getHours()}:${Time.getMinutes()}:${Time.getMilliseconds()} |`;
  
  const course = 'Half Stack application development';
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ];

  const Header = ({ course }) => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    );
  };

  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map((part, index) => (
          <p key={index}>
            {part.name}: {part.exercises}
          </p>
        ))}
      </div>
    );
  };

  const Total = ({ parts }) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
    return <div>Number of exercises {totalExercises}</div>;
  };

  console.log(Debug + parts[0].exercises);

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
