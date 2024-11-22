const getWeekDay = () => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date());
}

type Props = {
    name: string;
    roles?: string[];
}

export function Person({name, roles = ['Funcionário']}: Props) {

    return(
        <div>
            <h1>{name} - {getWeekDay()}</h1>
            <ul>
                {roles.map((role, index) => (
                    <li key={index}>{role}</li>
                ))}
            </ul>
        </div>
    );

}