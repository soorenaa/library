import { NavLink, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { getBooks } from '../data/data'

const Books = () => {
    const location = useLocation();
    const books = getBooks();
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <div>
            <h2>
                کتاب های ما
            </h2>

            <hr style={{ width: "30%" }} />

            <nav id='books-nav'>

                <input type="text"
                    value={searchParams.get('filter') || ''}
                    onChange={(event) => {
                        let filter = event.target.value;
                        if (filter) setSearchParams({ filter });
                        else setSearchParams({});
                    }}
                    placeholder='جستجو کنید...' />

                {books.filter((book) => {
                    let filter = searchParams.get('filter');
                    if (!filter) return true;
                    let name = book.name.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                    .map((book) => (

                        <NavLink
              style={({ isActive }) => {
                return {
            
                  color: isActive ? "red" : "",
                };
              }}
              to={`/books/${book.number}${location.search}`}
              key={book.number}
            >
              {book.name}
            </NavLink>
                    ))
                }

            </nav>

            <Outlet />
        </div>
    )
}


export default Books;