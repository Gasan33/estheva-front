
import { faqs } from '@/constants';
import FaqItem from './FaqItem';



const FaqList = () => {
    return (
        <ul className=''>
            {faqs.map((item, index) => <FaqItem item={item} key={index} />)}
        </ul>
    )
}

export default FaqList