import React from 'react'
import Typography from "@material-ui/core/Typography";
import {CardMedia} from "@material-ui/core";
import step1 from "./images/step1.png";
import step2 from "./images/step2.png";

const question = ()=>{
	return (
		<div>
			<Typography variant="h4" gutterBottom>
				Question Four
			</Typography>
			<Typography variant="h5" gutterBottom>
				Kobayashi Maru
			</Typography>
			<Typography variant="body1" gutterBottom>
				Kirk solves the unsolvable by changing the rules, this is your chance to show us how you would solve your own Kobayashi Maru.
			</Typography>
			<Typography variant="body1" gutterBottom>
				We have a enrollment form's last step where we take disclosure from cadet to agree on our terms to be a Starflit Academy Cadet
			</Typography>
			<Typography variant="body1" gutterBottom>
				But there is issue where cadet clicking on I agree button still he's not able to complete his enrolment
			</Typography>
			<Typography variant="body1" gutterBottom>
				There may be co related errors to solve, so cadet can successfully enrol to Starflit Academy
			</Typography>
			<CardMedia
				image={step1}
				style={{
					width: '100%',
					height: 300,
					backgroundSize: 'contain',
				}}
				title="The Solution"
			/>
			<CardMedia
				image={step2}
				style={{
					width: '100%',
					height: 300,
					backgroundSize: 'contain',
				}}
				title="The Solution"
			/>
		</div>
	)
};

export default 	question