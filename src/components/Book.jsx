import { useParams, useNavigate, useLocation } from "react-router-dom";

import { deleteBook, getBook } from "../data/data";

const Book = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const book = getBook(+(params.bookId));

    if (book) {
        return (
            <div>
                <p>
                    کتاب با شناسه ی : {book.number}
                </p>

                <p>
                    نام کتاب: {book.name}
                </p>

                <p>
                    قیمت کتاب: {book.amount}
                </p>

                <p>
                    تاریخ انتشار کتاب: {book.due}
                </p>

                <p>
                    <button
                        style={{ fontFamily: 'vazir' ,backgroundColor:'white'}}
                        onClick={() => {
                            deleteBook(book.number)
                            navigate('/books' + location.search)
                        }
                        }
                    >
                        حذف کتاب
                    </button>
                </p>
            </div>

        )
    } else {
        return (
            <h3>ای بابا چیزی نتونستم پیدا کنم </h3>
        )
    };
}

export default Book;