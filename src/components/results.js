import React, { useEffect } from 'react'
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
	IconButton,
	Link,
} from '@material-ui/core'

import { Add, Language } from '@material-ui/icons'
import Loading from '../images/loading.gif'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	title: {
		width: '100%',
		padding: theme.spacing(2),
	},
	resultRoot: {
		display: 'flex',
		margin: theme.spacing(1),
		justifyContent: 'space-between',
		width: '95%',
	},
	details: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
	content: {
		flex: '1 0 auto',
	},
	cover: {
		width: '50%',
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		paddingRight: theme.spacing(1),
	},
	addIcon: {
		height: 25,
		width: 25,
	},
	linkIcon: {
		height: 15,
		width: 15,
	},
	loading: {
		height: 70,
		width: 70,
	},
	loadingCard: {
		display: 'flex',
		margin: theme.spacing(1),
		padding: theme.spacing(1),
		justifyContent: 'center',
		width: '95%',
	},
}))

const _renderResults = (
	movies,
	addNomination,
	checkIfIDExists,
	loading,
	limitReached
) => {
	const classes = useStyles()

	if (limitReached) {
		return <Card className={classes.loadingCard}>Limit reached (IN DEV)</Card>
	} else if (loading) {
		return (
			<Card className={classes.loadingCard}>
				<img className={classes.loading} src={Loading} />
			</Card>
		)
	} else {
		return movies.map((movie, i) => (
			<Card className={classes.resultRoot} key={i}>
				<Box className={classes.details}>
					<Box>
						<CardContent className={classes.content}>
							<Typography component='h6' variant='h6'>
								{movie.Title}
							</Typography>
							<Typography
								variant='subtitle1'
								color='textSecondary'
								className={classes.subtitle}
							>
								{movie.Year}
							</Typography>
							<Link
								color='inherit'
								href={`https://www.imdb.com/title/${movie.imdbID}`}
							>
								More info &#x3e;
							</Link>
						</CardContent>
					</Box>
					<Box className={classes.controls}>
						<IconButton
							disabled={checkIfIDExists(movie)}
							onClick={() => addNomination(movie)}
						>
							<Add className={classes.addIcon} />
						</IconButton>
					</Box>
				</Box>
			</Card>
		))
	}
}

export default function Results({
	movies,
	onAdd,
	checkIfIDExists,
	loading,
	limitReached,
	searchTerm,
	...props
}) {
	const classes = useStyles(props)

	const addNomination = (movie) => {
		onAdd(movie)
	}

	return (
		<Box display='flex' flexDirection='column' alignItems='center'>
			<Box className={classes.title}>
				<Typography variant='h6'>Results</Typography>
			</Box>
			{movies &&
				_renderResults(
					movies,
					addNomination,
					checkIfIDExists,
					loading,
					limitReached
				)}
		</Box>
	)
}
