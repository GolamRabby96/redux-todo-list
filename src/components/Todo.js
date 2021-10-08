import React, { useState } from "react";
import "./Todo.css";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
	const [inputData, setInputData] = useState("");
	const dispatch = useDispatch();
	const list = useSelector((state) => state.reducer.list);
	console.log(inputData, list);
	return (
		<div className="container todocontainer">
			<div className="maindiv row">
				<div className="col-md-12">
					<div className="childdiv">
						<h1>___Add your list here___</h1>

						<div className="addItems">
							<input
								className=""
								type="text"
								placeholder="Add items"
								value={inputData}
								onChange={(e) => setInputData(e.target.value)}
							/>
							&nbsp; &nbsp; &nbsp;
							<p
								onClick={() => dispatch(addTodo(inputData), setInputData(""))}
								className="btn clickButton"
							>
								Add
							</p>
						</div>
					</div>
					<div className="pt-5">
						{list.map((item) => (
							<div className="mapsection">
								<p className="mapP" key={item.id}>
									{item.data}
								</p>
								<p
									className="btn clickButton1"
									onClick={() => dispatch(deleteTodo(item.id))}
								>
									delete
								</p>
							</div>
						))}
					</div>

					<div className="removeItem bg-white">
						<button
							className="btn btn-default btn-lg container"
							onClick={() => dispatch(removeTodo())}
						>
							Remove All Item
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Todo;
