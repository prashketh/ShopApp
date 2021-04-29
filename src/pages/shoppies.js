import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SearchBox from '../components/searchbox'
import Nominations from '../components/nominations'
import Results from '../components/results'
import { Container, Box, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		paddingBottom: theme.spacing(4),
	},
	title: {
		position: 'relative',
		marginTop: theme.spacing(2),
		textAlign: 'center',
		[theme.breakpoints.up('md')]: {
			textAlign: 'left',
		},
	},
	searchContainer: {
		marginTop: theme.spacing(2),
		boxShadow:
			'0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
		position: 'relative',
		height: 200,
		width: '100%',
		backgroundColor: '#5da2d5',
		display: 'flex',
		justifyContent: 'center',
		borderRadius: 6,
		[theme.breakpoints.up('md')]: {
			height: 150,
		},
	},
	searchBox: {
		position: 'absolute',
		top: 172,
		width: '90%',
		[theme.breakpoints.up('md')]: {
			width: '80%',
			top: 122,
		},
	},
	resultsContainer: {
		marginTop: theme.spacing(5),
		borderRadius: 6,
		width: '100%',
		backgroundColor: '#bcd9ef',
	},
	nominationsContainer: {
		borderRadius: 6,
		width: '100%',
		backgroundColor: '#bcd9ef',
		marginTop: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			marginLeft: theme.spacing(2),
			marginTop: theme.spacing(9),
		},
	},
	cardsContainer: {
		display: 'flex',
		flexDirection: 'row',
	},
	test: {
		minHeight: '100%',
		display: 'block',
	},
}))

export default function Shoppies({ ...props }) {
	const classes = useStyles(props)

	const [movies, setMovies] = useState([])
	const [nominations, setNominations] = useState([])
	const [loading, setLoading] = useState(false)
	const [limitReached, setLimitReached] = useState(false)
	const [saveForLater, setSaveForLater] = useState(false)

	const checkIfIDExists = (movie) => {
		return nominations.some((item) => item.imdbID === movie.imdbID)
	}

	const addNomination = (movie) => {
		if (!checkIfIDExists(movie) && nominations.length < 5) {
			setNominations(nominations.concat(movie))
		}
	}

	const removeNomination = (movie) => {
		setNominations(nominations.filter((item) => item.imdbID !== movie.imdbID))
		setLimitReached(false)
	}

	useEffect(() => {
		if (nominations.length >= 5) {
			setLimitReached(true)
		}
	}, [nominations])

	useEffect(() => {
		if (movies.length > 0) {
			window.localStorage.setItem('nominations', JSON.stringify(nominations))
			setSaveForLater(false)
		}
	}, [saveForLater])

	useEffect(() => {
		if (window.localStorage.getItem('nominations')) {
			console.log(window.localStorage.getItem('nominations'))
			setNominations(JSON.parse(window.localStorage.getItem('nominations')))
		}
	}, [])

	return (
		<Container maxWidth='md' className={classes.root}>
			<Grid container>
				<Grid item container xs={12} md={6} className={classes.test}>
					<Grid item xs={12} className={classes.title}>
						<Typography variant='h4'>The Shoppies</Typography>
					</Grid>
					<Grid item xs={12} className={classes.searchContainer}>
						<Box
							pt={1}
							display='flex'
							flexDirection='column'
							alignItems='center'
						>
							<Box maxWidth='85%' textAlign='center' pt={2} color='white'>
								<Typography variant='subtitle1'>
									<b>Tip: </b>Search and choose your top 5 favourite movies. Hit
									submit when you're happy with the choices.
								</Typography>
							</Box>
						</Box>
						<Box className={classes.searchBox}>
							<SearchBox
								onSearch={setMovies}
								onLoad={setLoading}
								limitReached={limitReached}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} className={classes.resultsContainer}>
						<Results
							movies={movies}
							onAdd={addNomination}
							checkIfIDExists={checkIfIDExists}
							loading={loading}
							limitReached={limitReached}
						/>
					</Grid>
				</Grid>
				<Grid item container xs={12} md={6}>
					<Grid item xs={12}>
						<Box className={classes.nominationsContainer}>
							<Nominations
								onRemove={removeNomination}
								movies={nominations}
								setSaveForLater={setSaveForLater}
							/>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}
