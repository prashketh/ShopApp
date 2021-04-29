import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
	IconButton,
	Link,
} from '@material-ui/core'

import { Add } from '@material-ui/icons'
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
}))

const _renderResults = (movies, removeNomination) => {
	const classes = useStyles()
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
				<div className={classes.controls}>
					<IconButton onClick={() => removeNomination(movie)}>
						<Add className={classes.addIcon} />
					</IconButton>
				</div>
			</Box>
		</Card>
	))
}

export default function Nominations({ movies, onRemove, ...props }) {
	const classes = useStyles(props)

	const removeNomination = (movie) => {
		onRemove(movie)
	}

	return (
		<Box display='flex' flexDirection='column'>
			<Box className={classes.title}>
				<Typography variant='h6'>Nominations</Typography>
			</Box>
			{movies && _renderResults(movies, removeNomination)}
		</Box>
	)
}
