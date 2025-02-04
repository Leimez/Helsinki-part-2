import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <h3>Total exercises: {totalExercises}</h3>
    </div>
  );
};

export default Course;
