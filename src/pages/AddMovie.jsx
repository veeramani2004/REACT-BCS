import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { object, string, number } from "yup";
import { API } from "../global";

export function AddMovie() {
  const movieSchema = object({
    name: string().required(),
    poster: string().required().url().min(4),
    rating: number().required().min(0).max(10).integer(),
    summary: string().required().min(20),
    trailer: string().required().url().min(4),
  });
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        poster: "",
        name: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: movieSchema,
      onSubmit: (newMovie) => {
        console.log(newMovie);
        addMovie(newMovie);
      },
    });

  const navigate = useNavigate();

  const addMovie = async (newMovie) => {
    // POST
    // 1. method - POST
    // 2. Data - Body & JSON
    // 3. Headers - JSON

    const response = await fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    navigate("/movies");
    // Existing movies + new Movie
    // setMovies([...movies, newMovie]);
    // resetMovieForm();
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      className="add-movie-form"
    >
      <TextField
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        name="name"
        label="Movie Poster URL"
        variant="outlined"
        className="form-detailes"
      />
      {touched.name && errors.name ? <p>{errors.name}</p> : null}
      <TextField
        value={values.poster}
        onChange={handleChange}
        onBlur={handleBlur}
        name="poster"
        label="Movie Name"
        variant="outlined"
        className="form-detailes"
      />
      {touched.poster && errors.poster ? <p>{errors.poster}</p> : null}
      <TextField
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        name="rating"
        label="Rating"
        type="number"
        variant="outlined"
        className="form-detailes"
      />
      {touched.rating && errors.rating ? <p>{errors.rating}</p> : null}
      <TextField
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        name="summary"
        label="Summary"
        multiline
        rows={3}
        variant="outlined"
        className="form-detailes"
      />
      {touched.summary && errors.summary ? <p>{errors.summary}</p> : null}
      <TextField
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        name="trailer"
        label="Trailer URL"
        variant="outlined"
        className="form-detailes"
      />
      {touched.trailer && errors.trailer ? <p>{errors.trailer}</p> : null}

      <Button type="submit" variant="contained" color="primary">
        ➕ Add Movie
      </Button>
    </Box>
  );
}
