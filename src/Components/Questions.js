import React from 'react';
import '../Css/Questions.css'; // Import the CSS file
import Grid from '@mui/material/Grid';

function Questions({
	data,
	id,
	answers,
	setColor,
	setSelect,
	select,
}) {
	const handleAnswer = (id, qid) => {
		setColor(id);
		console.log(qid);
		const selectVal = {
			questionId: qid,
			answer: id,
		};

		const filterSelect = select.filter((val) => val.questionId !== qid);
		setSelect([...filterSelect, selectVal]);
	};

	const handleColor = (id, qId) => {
		const checkObject = { questionId: qId, answer: id };
		const found = select.some(
			(item) =>
				item.questionId === checkObject.questionId &&
				item.answer === checkObject.answer
		);
		if (found) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<>
			<div
				key={1}
				className="questionContainer2"
			>
				<Grid
					container
					sx={{ width: '100%' }}
				>
					<Grid xs="12">
						<p className="questionText" style={{ whiteSpace: 'pre-wrap'}}>
							{/* {data?.id} {data?.question} */}
							<span>{id+1})&nbsp;</span>
							{formatQuestions(data?.question)}
						</p>
						<div className="answerContainer">
							{data?.answers.map((val, idx) => (
								<div
									key={idx}
									className="answerText"
									style={{
										backgroundColor:
											(answers === val.id && 'rgb(12 154 16)') ||
											(handleColor(val.id, data.id) && '#2cb7a9'),
									}}
									onClick={() => handleAnswer(val.id, data.id)}
								>
									{idx+1}) {val.answer}
								</div>
							))}
						</div>
					</Grid>
					{/* {data?.image && (
						<Grid xs="2">
							<img
								style={{
									width: '193px',
									height: '166px',
									marginTop: '10px',
								}}
								src={data.url}
								alt="question"
							/>
						</Grid>
					)} */}
				</Grid>
			</div>
		</>
	);
}
function formatQuestions(text){
	let finalText = String(text).replaceAll("  ","\n").replace("1)"," \n\t1 -").replace(" 2)"," \n\t2 -").replace(" 3)"," \n\t3 -").replace(" 4)"," \n\t4 -").replace(" 5)"," \n\t5 -");
	return finalText;
}

export default Questions;
