import img from './../../../../../Assets/service-red.webp'
import violent from './../../../../../Assets/service-violet.webp'
import yellow from './../../../../../Assets/service-yellow.webp'
import cyan from './../../../../../Assets/service-cyan.webp'
const SectionOne = () => {
    return (
        <div className="pt-[150px] text-[#2C1B9A] h-[750px] max-w-[1200px] mx-auto">
            <div className="text-center ">
                <h1 className="text-5xl font-bold mb-5">Path is your virtual photo editing studio</h1>
                <h3 className="text-xl"><span className="text-3xl">Upload your images and get them back in hours, pixel perfect and ready to sell</span> — the size you need, the format you need. You don’t even have to think about it.</h3>
            </div>
            <div className='mt-20 flex gap-10'>
                <img className='h-[250px] w-[250px]' src={img} alt="" />
                <img className='h-[250px] w-[250px]' src={violent} alt="" />
                <img className='h-[250px] w-[250px]' src={yellow} alt="" />
                <img className='h-[250px] w-[250px]' src={cyan} alt="" />
            </div>
        </div>
    );
};

export default SectionOne;