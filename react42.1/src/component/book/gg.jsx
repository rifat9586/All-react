<div className='p-6 flex flex-col justify-between rounded-2xl border-[1px] border-[rgba(40,40,40,0.20)]'>
    <div className='max-w-[330px] h-[200px] rounded-2xl bg-gray-300'>
        <img className='w-full h-[200px] rounded-2xl' src={recipe_image} alt="" />
    </div>
    <h3 className='mt-6 mb-4 text-2xl font-semibold'>{recipe_name}</h3>
    <p className='text-[#878787] leading-[30px]  max-w-[330px] fira-sans'>{short_description}</p>
    <hr className='mt-4 mb-6 border-t-[1px] border-[rgba(40,40,40,0.10)] w-full' />
    <h3 className='mb-4 text-lg'>Ingredients: {ingredients.length}</h3>
    <ul className='list-disc *:ml-6 text-[#878787] text-lg fira-sans'>
        {
            ingredients.map((item, idx) => <li key={idx}>{item}</li>)
        }
    </ul>
    <hr className='mt-4 mb-6 border-t-[1px] border-[rgba(40,40,40,0.10)] w-full' />
    <div className="flex gap-4 text-[rgba(40,40,40,0.80)]">
        <p className='flex gap-2 items-center'><img className='size-6 fira-sans' src={clock} alt="" />{preparing_time}</p>
        <p className='flex gap-2 items-center'><img className='size-6 fira-sans' src={calorie} alt="" />{calories}</p>
    </div>