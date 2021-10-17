import React, {useState, useEffect} from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles'
import kobayashiMaru from "./images/kobayashiMaru.jpg";



const QuestionFour = (props) =>{
	const { classes } = props;
	let [complete] = useState(false);
	
	useEffect(() => {
		throw new Error("not working"); 
	}, []);

	const handleClick = ()=>{
		complete = !complete;
	}
	return(
		<div className={classes.container}>
			<Card className={classes.card}>
				<CardMedia
					image={kobayashiMaru}
					style={{
						width: '100%',
						height: 200,
						backgroundSize: 'contain',
					}}
					title="The Solution"
				/>
				<CardContent className={classes.content}>
					<Typography gutterBottom variant="subtitle2" component="h2">
						Hereby I declare that, I agree to take The Kobayashi Maru test & become a Starfleet Academy cadet
					</Typography>
					<div>
					{!complete? 
						<Button variant="contained" onClick={handleClick}>
							I Agree
						</Button>
						: <Typography gutterBottom variant="h5" component="h2">
								Now I will fight along with James T. Kirk
							</Typography>
						}
					</div>	
				</CardContent>
			</Card>
		</div>
	)
}

export default withStyles(styles)(QuestionFour);