import { useState } from "react";

function App() {
	const initState = ["투두리스트"];
	const [state, setState] = useState(initState);
	const [value, setValue] = useState("");

	const changeInput = (e) => {
		setValue(e.target.value);
	};
	const addList = () => {
		setState((prevState) => [...prevState, value]);
		setValue("");
	};
	return (
		<div className="content">
			<div>
				<input type="text" onChange={changeInput} value={value} /> <button onClick={addList}>추가하기</button>
			</div>
			<div>
				<h1>Todo List</h1>
				<ul className="todolist">
					{state?.map((item) => {
						return <li>{item}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
