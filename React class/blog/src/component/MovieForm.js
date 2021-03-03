import React, { useState } from 'react';
import InputField from './InputField';

const MovieForm = ({ addMovie }) => {
	const [movieTitle, setMovieTtitle] = useState('');
	const [movieYear, setMovieYear] = useState('');
	const [titleError, setTitleError] = useState('');
	const [yearError, setYearError] = useState('');
	
	const resetForm = () => {
		resetErrors();
		setMovieTtitle('');
		setMovieYear('');
	};

	const validateForm = () => {
		let validated = true;
		if (!movieTitle) {
			setTitleError('영화제목을 넣어주세요.');
			validated = false;
		}
		if (!movieYear) {
			setYearError('개봉년도를 넣어주세요.');
			validated = false;
		}

		return validated;
	}

	const resetErrors = () => {
		setTitleError('');
		setYearError('');
	}

	const onSubmit = (event) => {
		event.preventDefault();
		if (validateForm()) {
			addMovie({
				id: Date.now(),
				title: movieTitle,
				year: movieYear,
			});
			resetErrors();
			resetForm();
		}
	};

	return (
	<form onSubmit={onSubmit}>
		<InputField
			type="text"
			value={movieTitle}
			placeholder="영화제목"
			onChange={e => setMovieTtitle(e.target.value)}
			errorMessage={titleError}
		/>
		<InputField
			type="number"
			value={movieYear}
			placeholder="개봉년도"
			onChange={e => setMovieYear(e.target.value)}
			errorMessage={yearError}
		/>
		<button type="submit">영화추가</button>
	</form>
	);
};

export default MovieForm;