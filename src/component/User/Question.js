import _ from 'lodash';
import { useState } from 'react';
import Lightbox from "react-awesome-lightbox"
import { BsCursor } from 'react-icons/bs';

const Question = (props) => {
    const { data, index } = props;
    const [isPreviewImage, setIsPreviewImage] = useState(false);
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
                    <img 
                        onClick={() => setIsPreviewImage(true)}
                        style={{ cursor: 'pointer' }}
                        src={`data:image/jpeg;base64,${data.image}`}
                    />
                    {
                        isPreviewImage === true &&
                            <Lightbox
                                image = {`data:image/jpeg;base64,${data.image}`}
                                title = {"Question Image"}
                                onClose = {() => setIsPreviewImage(false)}
                                >
                            </Lightbox>
                    }

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
