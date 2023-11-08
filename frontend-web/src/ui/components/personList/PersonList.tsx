import { People } from '../../../models/person';
import './style.css';

type PersonListProps = {
    people: People;
    prefix: string;
};

export const PersonList: React.FC<PersonListProps> = ({ people, prefix }) => {
    return (
        <ul className="people-container">
            <p>{prefix}</p>
            {people.map((person, index) => {
                return <li key={index}>{`${person.firstname} ${person.lastname}`}</li>;
            })}
        </ul>
    );
};
