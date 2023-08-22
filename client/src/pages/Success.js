import "../style/Success.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Success() {
    return (
        <div className="content">
            <div className="wrapper-1">
                <div className="wrapper-2">
                    <h1 className="title-thanks">Thank you !</h1>
                    <p>

                        We want to express our heartfelt gratitude for your generous donation and for supporting, Jobjourney! Your contribution is a significant step in our journey to assist individuals in maintaining a more organized and efficient record of their job applications.
                        
                        We are excited about the positive impact Jobjourney will have on people's lives and how it will streamline their job search process.

                        Thank you once again for believing in us and being a part of this exciting journey. Your support makes a difference and motivates us to keep moving forward.

                        Warm regards,
                        Jobjourney Team</p>
                    <button className="btn btn-primary go-home">
                        go home
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Success;