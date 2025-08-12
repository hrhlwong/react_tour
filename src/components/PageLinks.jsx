import { pagelinks } from '../data';
import PageLink from './PageLink';
const PageLinks = ({groupName, itemName}) =>{
    return (
        <ul className={groupName}>
            {pagelinks.map((link)=>(
                <PageLink key={link.id} { ... link} itemName={itemName} />
            ))}
        </ul>
    );
}

export default PageLinks;

