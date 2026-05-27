
interface Props {
  name: string;
  age: number;
  isTall: boolean;
}

const User = (props: Props) => {
  // const [bio, setBio] = useState<string | null>(null);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setBio(e.target.value);
  // };

  // For OnSubmit
  // const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };
  return (
    <div>
      <h2>Name:{props.name}</h2>
      <p>Age{props.age}</p>
      <p>{props.isTall ? "Person Is tall" : "Person Not Tall"}</p>
    </div>
  );
};

export default User;
