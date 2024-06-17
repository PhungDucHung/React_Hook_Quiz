import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _ from 'lodash';
import './DetailQuiz.scss';
import Question from "./Question";

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;
    const location = useLocation();

    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetchQuestions();
    }, [quizId]);

    // Thêm async/await để gọi API và xử lý dữ liệu
    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);
        console.log('>>> API response:', res); // Log để kiểm tra phản hồi từ API
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                .groupBy("id")
                .map((value, key) => {
                    let answers = [];
                    let questionDescription, image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description;
                            image = item.image;
                        }
                        item.answers.isSelected = false;
                        answers.push(item.answers);
                    });
                    return { questionId: key, answers, questionDescription, image };
                })
                .value(); // Đảm bảo gọi .value() để chuyển đổi từ LodashWrapper sang mảng dữ liệu
            console.log('>>> Processed data:', data); // Log để kiểm tra dữ liệu đã xử lý
            setDataQuiz(data);
        }
    }

    console.log("Current dataQuiz state:", dataQuiz); // Log để kiểm tra trạng thái của dataQuiz

    const handlePrev = () => {
        if (index - 1 < 0) return;
        setIndex(index - 1);
    }

    const handleNext = () => {
        if (dataQuiz && dataQuiz.length > index + 1) {
            setIndex(index + 1);
        }
    }

    const handleCheckbox = (answerId , questionId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz);
        let question = dataQuizClone.find(item => +item.questionId === +questionId);
        if(question && question.answers) {
            question.answers = question.answers.map(item => {
                if(+item.id === +answerId){
                    item.isSelected = !item.isSelected;
                }
                return item;
            })
        }
        let index = dataQuizClone.findIndex(item => +item.questionId === +questionId);
        if(index > -1) {
            dataQuizClone[index] = question;
            setDataQuiz(dataQuizClone);
        }
    };
    
    

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                   Quiz {quizId}: {location?.state?.quizTitle}
                </div>
                <hr />
                <div className="q-body">
                    <img src="" alt="" />
                </div>
                <div className="q-content"> 
                    <Question
                        index={index}
                        handleCheckbox={handleCheckbox}
                        data={
                            dataQuiz && dataQuiz.length > 0
                                ? dataQuiz[index]
                                : []
                        }
                    />
                </div>
                <div className="footer">
                    <button
                        className="btn btn-secondary"
                        onClick={() => handlePrev()}
                    >
                        Prev
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleNext()}
                    >
                        Next
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => handleNext()}
                    >
                        Finish
                    </button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    )
}
export default DetailQuiz;
