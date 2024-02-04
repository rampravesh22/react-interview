import React from "react";

const Home = () => {
	const handleClick = (e) => {
		console.log(e.nativeEvent);
	};
	return (
		<div>
			<button
				onClick={handleClick}
				className="px-8 bg-blue-500 text-2xl py-2 text-white rounded-md"
			>
				Click
			</button>
		</div>
	);
};

export default Home;
