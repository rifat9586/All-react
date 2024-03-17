import PropTypes from 'prop-types';

const Book = ({book}) => {
    const {title}=book;
    // console.log(bookmars)
    return (
        <div className='bg-[#fff] mt-3 p-3 rounded-md'>
           <h3>{title}</h3> 
        </div>
    );
};
Book.propTypes={
    book: PropTypes.object
}
export default Book;