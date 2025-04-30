
import { faqs } from '@/constants';
import FaqItem from './FaqItem';



const FaqList = ({ faqs }: { faqs: FAQ[] }) => {
    return (

        <div className=''>
            {faqs.map((item, index) => <FaqItem item={item} key={index} />)}
        </div>


    )
}

export default FaqList