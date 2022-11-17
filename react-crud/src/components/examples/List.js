import PropTypes from 'prop-types';


export default function List() {
    return (
        <>
            <h1>My list</h1>
            <ul>
                <Item />
                <Item name='Bulgati' year={1920} />
            </ul>
        </>
    )
}

function Item({ name, year }) {
    return (<li> {name} - {year}</li>)
}

Item.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number
}

Item.defaultProps = {
    name: 'faltou o nome',
    year: 0
}