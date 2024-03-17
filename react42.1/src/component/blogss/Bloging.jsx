import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Bloging = ({ bloging, handelEvent, handelMarkass}) => {
    const { title, cover, author_image, author, posted_time, reading_time, hashtags }= bloging;
    
    return (
       
        <div>
           <div>
                <img src={cover} alt={bloging} className='w-full h-[200px]' />
                <div className='flex justify-between mt-6'>
                    <div className='flex gap-4'>
                        <img src={author_image} alt="" className='w-12 rounded-full' />
                        <div>
                            <h3>{author}</h3>
                            <p>{posted_time}</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <span className=' mt-3 mr-1'>{reading_time} min read</span>
                        <button onClick={() => handelEvent(bloging)}><FaBookmark></FaBookmark></button>
                    </div>
                </div>

                <h2 className='text-3xl font-bold mt-3'>{title}</h2>

                <p className=''>
                    {
                        hashtags.map((hash, idx) => <span key={idx}><a href="" className='mr-2'>#{hash}</a></span>)
                    }
                </p>
                <a href="#" className='font-semibold underline' onClick={() => handelMarkass(reading_time)}>Mark as read</a>
                <div className='my-7npm run build border-b-2'></div>
           </div>
        </div>
    );
};
Bloging.propTypes={
    bloging: PropTypes.object.isRequired,
    handelEvent: PropTypes.func,
    handelMarkass: PropTypes.func
}
export default Bloging;