import Link from 'next/link'
import {ContactLinks} from './ButtonLinks';


export default function Contact () {
    return (
        <div id='contact'
        className='flex justify-center bg-slate-800 py-24'>
            
            <div className='flex flex-col w-3/6 space-y-5'>
                <div className='flex flex-row items-center space-x-3 text-slate-50'>
                    <div className='h-10 bg-slate-100 w-2'></div>   
                    <div className='text-3xl font-semibold'>contact</div>
                </div>

                <div className='flex flex-col space-y-2 bg-slate-50 text-slate-800 p-4 rounded-md'>
                    <div>
                        I'm currently looking for full-time Software Engineering or Machine Learning opportunities! 
                    </div>
                    
                    <div>
                        If you know of any open positions, if you have any questions, 
                        or if you just want to say hi, feel free to reach out on&nbsp;

                        <Link className='text-teal-500 hover:text-rose-500 duration-200'
                        href='https://www.linkedin.com/in/zhao-charlie/' target="_blank">
                            LinkedIn
                        </Link>

                        &nbsp;or email me at&nbsp;

                        <Link className='text-teal-600 hover:text-rose-500 duration-200'
                        href='mailto:hellozhaocharli@gmail.com' target="_blank" >
                            hellozhaocharlie@gmail.com
                        </Link>
                        .
                    </div>

                    <div>
                        Also check out my&nbsp;

                        <Link className='text-teal-600 hover:text-rose-500 duration-200'
                        href='https://github.com/zcharz' target="_blank">
                            Github
                        </Link>

                        ,&nbsp;

                        <Link className='text-teal-600 hover:text-rose-400 duration-200'
                        href='https://www.youtube.com/@czmusic_' target="_blank">
                            YouTube
                        </Link>

                        , and&nbsp;

                        <Link className='text-teal-600 hover:text-rose-500 duration-300'
                        href='https://drive.google.com/file/d/1KroZl-79kF2Hltba0qhrsHdcOWxnzYmO/view' target="_blank">
                            Resume
                        </Link>

                        !
                    </div>

                </div>
                
                

                <ContactLinks/>
            </div>
        </div>
    );
}