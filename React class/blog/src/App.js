import React, { useEffect, useState } from 'react';
import Movie from './component/Movie';
import MovieForm from './component/MovieForm';
import Navbar from './component/Navbar';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

function App() {
	const [movies, setMovies] = useState([]);

	const removeMovie = (id) => {
		setMovies(movies.filter(movie => {
			return movie.id !== id;
		}));
	};

	const renderMovies = movies.length ? movies.map(movie => {
		return (
			<Movie
				movie={movie}
				key={movie.id}
				removeMovie={removeMovie}
			/>
		);
	}) : '추가된 영화가 없습니다.';
	const addMovie = (movie) => {
		setMovies([
			...movies,
			movie
		]);
	};

	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/movies">
						<h1>Movie list</h1>
						<MovieForm addMovie={addMovie} />
						{renderMovies}
					</Route>
					<Route path="/users">
						<h1>Users</h1>
					</Route>
					<Route path="/" exact>
						<h1>Home</h1>
					</Route>
				</Switch>
			</div>
		</Router>
	);

}

export default App;