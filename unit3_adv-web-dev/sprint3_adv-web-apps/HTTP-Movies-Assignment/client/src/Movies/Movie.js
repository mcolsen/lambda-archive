import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory, Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import Button from "react-bootstrap/Button";

function Movie({ addToSavedList, setMovieList }) {
	const [movie, setMovie] = useState(null);
	const params = useParams();
	const history = useHistory();

	const fetchMovie = (id) => {
		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then((res) => setMovie(res.data))
			.catch((err) => console.log(err.response));
	};

	const saveMovie = () => {
		addToSavedList(movie);
	};

	useEffect(() => {
		fetchMovie(params.id);
	}, [params.id]);

	if (!movie) {
		return <div>Loading movie information...</div>;
	}

	const deleteMovie = () => {
		axios
			.delete(`http://localhost:5000/api/movies/${params.id}`)
			.then((res) => {
				axios
					.get("http://localhost:5000/api/movies")
					.then((res) => {
						setMovieList(res.data);
						history.push("/");
					})
					.catch((err) => console.error(err));
			})
			.catch((err) => console.error(err));
	};

	return (
		<div className="save-wrapper">
			<MovieCard movie={movie} />

			<div className="save-button" onClick={saveMovie}>
				Save
			</div>
			<Button as={Link} to={`/update-movie/${params.id}`}>
				Edit
			</Button>
			<Button onClick={deleteMovie}>Delete</Button>
		</div>
	);
}

export default Movie;
