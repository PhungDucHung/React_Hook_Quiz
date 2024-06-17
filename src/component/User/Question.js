import _ from 'lodash';

const Question = (props) => {
    const { data, index } = props;
    if (_.isEmpty(data)) {
        return (<></>);
    }

    const handleHandleCheckbox = (event, aId ,qId) => {
        console.log('>>> data props:' ,data.id);
        props.handleCheckbox(aId, qId);
    };
    return (
        <>
            {data.image ?
                <div className='q-image'>
                    <img src={`data:image/jpeg;base64,${data.image}`} alt="Question" />
                </div>
                :
                <div className='q-image'></div>  // làm vầy để không bị chạy chữ lên trên
                }
            <div className="question">Question {index + 1}: {data.questionDescription}</div>
            <div className="answer">
                {data.answers && data.answers.length > 0 && data.answers.map((a, idx) => {
                    return (
                        <div key={`answer-${idx}`} className="a-child">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={a.isSelected}
                                    onChange={(event) => handleHandleCheckbox(event,a.id , data.questionId)}
                                />
                                <label className='form-check-label'>
                                    {a.description}
                                </label>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Question;
