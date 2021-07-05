import React from 'react'

class Listing extends React.Component{
    render() {

        console.log(this.props.students)

        let students = this.props.students


        const listItems = students.map( student =>
            <li key={student.id}>{student.name} who's id is {student.id}</li>
        );

        return (
            <>

                <ul>
                    {listItems}
                </ul>

            </>
        )

    }
}

export default Listing