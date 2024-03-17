import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between w-[85%] m-auto border-b-2 pb-4'>
            <h1 className='text-4xl font-bold text-[#252525]'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;