import React from 'react';
import QuestionThree from './questionThree';
import Question from './question'
import ErrorBoundary from '../../components/errorBoundary'
const questionThree = () =>{
	return (
		<div>
			<ErrorBoundary question={Question}>
				<QuestionThree/>
			</ErrorBoundary>
		</div>
		
	)
}

export default questionThree;