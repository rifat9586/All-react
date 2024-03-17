import PropTypes from 'prop-types';
import Book from '../book/Book';

const Bookmars = ({ bookmars }) => {
    return (
        
        <div className="md:w-1/3 bg-[#1111110D] rounded-md p-6">
            <h4 className='text-xl font-bold'>Bookmarked Blogs : {bookmars.length}</h4>
            <div className=''>
                {
                    bookmars.map((book, idx) => <Book key={idx} book={book}></Book>)
                }
            </div>
        </div>
    );
};
Bookmars.propTypes={
    bookmars: PropTypes.array
}
export default Bookmars;